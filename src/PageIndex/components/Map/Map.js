import styled from 'styled-components'

const Map = props => {
  const map = useRef()

  const initialize = () => {
    (async () => {
      if (!map.current) {
        // NOTE: Publically available access token. ~ RM
        // https://docs.mapbox.com/mapbox-gl-js/example/simple-map/
        // TODO: Hide access token. ~ RM
        mapboxgl.accessToken = 'pk.eyJ1Ijoicm1vcmFudGVzIiwiYSI6ImNqYTRtaWp5MzRjcXEzMXBveWViOGNjYm0ifQ.lt1qdGpfbbrT328BOUhIpQ'

        // TODO: Add user location icons to map. ~ RM
        const newMap = new mapboxgl.Map({
          center: [0, 0],
          container: 'listing-map',
          style: 'mapbox://styles/mapbox/streets-v11',
          zoom: 1
        })

        map.current = newMap
        startGeotracking()
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
`

export default Map
