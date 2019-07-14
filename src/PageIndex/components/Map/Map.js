import sleep from 'src/services/sleep'

const PageIndex_Map = props => {
  const map = useRef()

  const initialize = () => {
    (async () => {
      const panDuration = 20000
      const offset = Math.floor(Math.random() * 121)
      const longitudes = [0, -120, -240].map(longitude => longitude - offset)
      let cycle = Math.floor(Math.random() * longitudes.length)

      if (!map.current) {
        // NOTE: Publically available access token. ~ RM
        // https://docs.mapbox.com/mapbox-gl-js/example/simple-map/
        // TODO: Hide access token. ~ RM
        mapboxgl.accessToken = 'pk.eyJ1Ijoicm1vcmFudGVzIiwiYSI6ImNqYTRtaWp5MzRjcXEzMXBveWViOGNjYm0ifQ.lt1qdGpfbbrT328BOUhIpQ'

        // TODO: Add user location icons to map. ~ RM
        const newMap = new mapboxgl.Map({
          center: [longitudes[cycle], 0],
          container: 'listing-map',
          maxZoom: 20,
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 1.5
        })

        newMap.on('load', () => {
          const layers = [
            'admin-0-boundary',
            'admin-0-boundary-bg',
            'admin-0-boundary-disputed',
            'country-label'
          ]

          for (let layer of layers) {
            newMap.setLayoutProperty(layer, 'visibility', 'none')
          }
        })

        map.current = newMap
        // TODO: Implement transition from auto-panning to geotracking. ~ RM
        // startGeotracking()
      }

      while (true) {
        cycle = cycle === longitudes.length - 1 ? 0 : cycle + 1
        map.current.panTo([longitudes[cycle], 0], {
          duration: panDuration,
          easing: t => t
        })
        await sleep(panDuration)
      }
    })()
  }

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
    // TODO: Cleanup. ~ RM
    // navigator.geolocation.clearWatch(id)
  }

  useEffect(initialize)

  return (
    <Wrapper id='listing-map'/>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  transition: all 0.2s;
`

export default PageIndex_Map
