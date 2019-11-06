import mapboxgl from 'mapbox-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
// TODO: Implement annotation color selection. ~ RM
// import STYLES_DRAW_ANNOTATIONS from './STYLES_DRAW_ANNOTATIONS'

const initializeMap = (
  dispatch,
  gun,
  mapRef,
  setIsMapLoaded,
  user,
) => {
  const map = new mapboxgl.Map({
    accessToken: 'pk.eyJ1Ijoicm1vcmFudGVzIiwiYSI6ImNqYTRtaWp5MzRjcXEzMXBveWViOGNjYm0ifQ.lt1qdGpfbbrT328BOUhIpQ',
    center: [0, 0],
    container: 'map',
    // TODO: Replace Mapbox-served vector tiles (via the style prop) with
    // self-hosted vector tiles downloaded from OpenStreetMap. Maptiler's
    // tileserver-gl may be useful. Also look into Radisk Storage Engine (RAD)
    // and IndexedDB. ~ RM
    // * https://openmaptiles.com/downloads/planet/
    // * https://openmaptiles.org/docs/host/tileserver-gl/
    // * https://gun.eco/docs/RAD
    // TODO: Design custom map style, attach to app (no Mapbox API call). ~ RM
    // * https://openmaptiles.org/docs/style/maputnik/
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 2.25
  })

  const Draw = new MapboxDraw({
    displayControlsDefault: false,
    // styles: STYLES_DRAW_ANNOTATIONS
  })
  map.addControl(Draw)
  map.on('load', () => setIsMapLoaded(true))
  dispatch({
    draw: Draw,
    map: map,
    type: 'SET_MAP'
  })
  mapRef.current = map
}

export default initializeMap
