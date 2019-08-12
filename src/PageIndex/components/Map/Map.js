import sleep from 'src/services/sleep'

const PageIndex_Map = props => {
  const map = useRef()
  const user = useRef()
  const initiallyHiddenLayers = [
    'admin-0-boundary',
    'admin-0-boundary-bg',
    'admin-0-boundary-disputed',
    'country-label'
  ]

  useEffect(() => {
    user.current = props.user

    if (!map.current) {
      // NOTE: Publically available access token. ~ RM
      // https://docs.mapbox.com/mapbox-gl-js/example/simple-map/
      // TODO: Hide access token. ~ RM
      mapboxgl.accessToken = 'pk.eyJ1Ijoicm1vcmFudGVzIiwiYSI6ImNqYTRtaWp5MzRjcXEzMXBveWViOGNjYm0ifQ.lt1qdGpfbbrT328BOUhIpQ'
      const panDuration = 30000
      // Picks three random equidistant longitudes between which to pan so as
      // not to favor a particular region.
      const offset = Math.floor(Math.random() * 121)
      const longitudes = [0, -120, -240].map(longitude => longitude - offset)
      let cycle = Math.floor(Math.random() * longitudes.length)

      // TODO: Add user location icons to map. ~ RM
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
      })

      const startPanning = async () => {
        if (!user.current) {
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
    } else if (user.current) {
      // Freezes panning.
      map.current.setCenter(map.current.getCenter())
      for (let layer of initiallyHiddenLayers) {
        map.current.setLayoutProperty(layer, 'visibility', 'visible')
      }
      // startGeotracking()
    }
  }, [props.user])

  const startGeotracking = () => {
    const success = position => {
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
