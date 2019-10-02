import sleep from 'src/services/sleep'
import { useStateValue } from 'src/services/context'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import LAYERS from './services/LAYERS'
import DRAW_STYLES from './services/DRAW_STYLES'

// TODO: HTML cluster markers. ~ RM
// https://blog.mapbox.com/clustering-properties-with-mapbox-and-html-markers-bb353c8662ba
const PageIndex_Map = props => {
  const map = useRef()
  const user2 = useRef()
  const [{ draw, gun, user }, dispatch] = useStateValue()
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
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 1.5
      })

      const Draw = new MapboxDraw({displayControlsDefault: false})

      dispatch({
        draw: Draw,
        map: map.current,
        type: 'SET_MAP'
      })

      map.current.addControl(Draw)

      const drawLogic = e => {
        if (e.features && e.features.length) {
          const geojson = JSON.stringify(e.features[0])
          const annotation = user2.current.get('activeGroup').get('annotations').set({
            // // NOTE: Inline references not yet supported. ~ RM
            // // https://gun.eco/docs/API#unexpected-behavior
            // creator: gun.user(user2.current.is.pub),
            geojson: geojson
          })
          annotation.get('creator').put(gun.user(user2.current.is.pub))
        }
      }

      map.current.on('draw.actionable', drawLogic)
      map.current.on('draw.modechange', drawLogic)
      // The `draw.selectionchange` event is necessary to access select + drag
      // movement as the other events do not.
      map.current.on('draw.selectionchange', drawLogic)
      map.current.on('draw.update', drawLogic)

      map.current.on('load', () => {
        for (let layer of initiallyHiddenLayers) {
          map.current.setLayoutProperty(layer, 'visibility', 'none')
        }

        map.current.addSource('groupMembers', {
          data: {
            'features': [],
            'type': 'FeatureCollection'
          },
          cluster: true,
          clusterMaxZoom: 18,
          clusterRadius: 50,
          type: 'geojson'
        })

        for (let layer of LAYERS) {
          map.current.addLayer(layer)
        }
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
      const group = user2.current.get('activeGroup')

      // Stops panning.
      map.current.setCenter(map.current.getCenter())
      for (let layer of initiallyHiddenLayers) {
        map.current.setLayoutProperty(layer, 'visibility', 'visible')
      }

      group.get('annotations').map(annotation => {
        // If annotation has not been deleted.
        if (annotation) {
          // BUG: Somehow, annotations are appearing in both string and JS form.
          // Handling both cases for now. ~ RM
          if (typeof annotation.geojson === 'string') {
            draw.add(JSON.parse(annotation.geojson))
          } else {
            draw.add(annotation.geojson)
          }
        } else {
          // TODO: If gun.js annotation has been deleted but corresponding
          // MapboxDraw annotation has not, then delete the latter. ~ RM
        }
      })

      // TODO: This is done via user gesture. ~ RM
      startGeotracking()

      setInterval(() => {
        const features = []
        // TODO: If users are offline for < N minutes, their icons become grey.
        // If users are offline for > N minutes, their icons are not rendered.
        // ~ RM
        group.get('members').map(member => {
          features.push({
            'geometry': {
              'coordinates': [member.longitude, member.latitude],
              'type': 'Point'
            },
            'properties': {
              'alias': member.alias
            },
            'type': 'Feature'
          })
        })
        map.current.getSource('groupMembers').setData({
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
