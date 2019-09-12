import sleep from 'src/services/sleep'
import { useStateValue } from 'src/services/context'

const PageIndex_Map = props => {
  const map = useRef()
  const user2 = useRef()
  const [{ gun, user }] = useStateValue()
  const initiallyHiddenLayers = [
    'admin-0-boundary',
    'admin-0-boundary-bg',
    'admin-0-boundary-disputed',
    'country-label'
  ]

  useEffect(() => {
    // TODO: Find a better way for useEffect to access user. ~ RM
    user2.current = user
    if (!map.current) {
      // TODO: Replace Mapbox-served vector tiles with self-hosted vector tiles
      // downloaded from OpenStreetMap. Web local storage max is 50 MB, and the
      // total of OSM vector tiles is about 67 GB, so superpeers may be needed.
      // Maptiler's tileserver-gl may be useful. ~ RM
      // https://openmaptiles.com/downloads/planet/
      // https://openmaptiles.org/docs/host/tileserver-gl/
      mapboxgl.accessToken = 'pk.eyJ1Ijoicm1vcmFudGVzIiwiYSI6ImNqYTRtaWp5MzRjcXEzMXBveWViOGNjYm0ifQ.lt1qdGpfbbrT328BOUhIpQ'
      const panDuration = 30000
      // Picks three random equidistant longitudes between which to pan so as
      // not to favor a particular region.
      const offset = Math.floor(Math.random() * 121)
      const longitudes = [0, -120, -240].map(longitude => longitude - offset)
      let cycle = Math.floor(Math.random() * longitudes.length)

      map.current = new mapboxgl.Map({
        center: [longitudes[cycle], 0],
        container: 'listing-map',
        maxZoom: 20,
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 1.5
      })

      map.current.on('load', () => {
        for (let layer of initiallyHiddenLayers) {
          map.current.setLayoutProperty(layer, 'visibility', 'none')
        }

        map.current.addSource('group_1', {
          data: {
            'features': [],
            'type': 'FeatureCollection'
          },
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
          type: 'geojson'
        })

        map.current.addLayer({
          filter: ['has', 'point_count'],
          id: 'clusters',
          paint: {
            'circle-color': [
              'step',
              ['get', 'point_count'],
              '#51bbd6',
              100,
              '#f1f075',
              750,
              '#f28cb1'
            ],
            'circle-radius': [
              'step',
              ['get', 'point_count'],
              20,
              100,
              30,
              750,
              40
            ]
          },
          source: 'group_1',
          type: 'circle'
        })

        map.current.addLayer({
          filter: ['has', 'point_count'],
          id: 'cluster-count',
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
          },
          source: 'group_1',
          type: 'symbol'
        })

        map.current.addLayer({
          filter: ['!', ['has', 'point_count']],
          id: 'unclustered-point',
          paint: {
            'circle-color': '#11b4da',
            'circle-radius': 4,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
          },
          source: 'group_1',
          type: 'circle'
        })
      })

      const startPanning = async () => {
        if (!user2.current) {
          cycle = cycle === longitudes.length - 1 ? 0 : cycle + 1
          map.current.panTo([longitudes[cycle], 0], {
            duration: panDuration,
            easing: t => t
          })
          await sleep(panDuration)
          startPanning()
        }
      }

      startPanning()
    } else if (user2.current) {
      // Stops panning.
      map.current.setCenter(map.current.getCenter())
      for (let layer of initiallyHiddenLayers) {
        map.current.setLayoutProperty(layer, 'visibility', 'visible')
      }
      // TODO: This is done via user gesture. ~ RM
      startGeotracking()

      setInterval(() => {
        const features = []
        gun.get('group_1').get('members').map(member => {
          features.push({
            'geometry': {
              'coordinates': [member.longitude, member.latitude],
              'type': 'Point'
            },
            'type': 'Feature'
          })
        })
        map.current.getSource('group_1').setData({
          'features': features,
          'type': 'FeatureCollection'
        })
      }, 3000)
    }
  }, [user2.current])

  const startGeotracking = () => {
    const success = position => {
      user2.current.get('longitude').put(position.coords.longitude)
      user2.current.get('latitude').put(position.coords.latitude)

      map.current.flyTo({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoom: 15
      })
    }

    const error = error => {
      console.warn('ERROR(' + error.code + '): ' + error.message)
    }

    const id = navigator.geolocation.watchPosition(success, error)
    // TODO: Toggleable geotracking. ~ RM
    // TODO: Cleanup. ~ RM
    // navigator.geolocation.clearWatch(id)
  }

  return <Wrapper id='listing-map' isHidingAttributions={!props.user}/>
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  .mapboxgl-ctrl-bottom-left {
    left: -0.25rem;
    top: 0.25rem !important;
  }
  .mapboxgl-ctrl-bottom-right {
    right: -0.375rem;
    top: -0.125rem !important;
    a {
      font-size: 0.8rem;
    }
  }
  .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
    opacity: ${props => props.isHidingAttributions ? 0 : 1};
    transition: opacity 1s;
  }
`

export default PageIndex_Map
