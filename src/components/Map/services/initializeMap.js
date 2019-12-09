import mapboxgl from 'mapbox-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
import addAnnotations from './addAnnotations'
// TODO: Implement annotation color selection. ~ RM
// import STYLES_DRAW_ANNOTATIONS from './STYLES_DRAW_ANNOTATIONS'

const initializeMap = (
  dispatch,
  gun,
  markersOnScreen,
  markers,
  previousFeatureCount,
  setIsMapLoaded,
  setMapState,
  user
) => {
  const map = new mapboxgl.Map({
    accessToken: 'pk.eyJ1Ijoicm1vcmFudGVzIiwiYSI6ImNqYTRtaWp5MzRjcXEzMXBveWViOGNjYm0ifQ.lt1qdGpfbbrT328BOUhIpQ',
    center: [114.16869276786753, 22.317047137772564],
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
    zoom: 16
  })

  const Draw = new MapboxDraw({
    displayControlsDefault: false
    // styles: STYLES_DRAW_ANNOTATIONS
  })

  map.addControl(Draw)

  map.on('load', async () => {
    addAnnotations(map)
    setIsMapLoaded(true)

    // NOTE: For development. ~ RM
    // TODO: A marker is placed at rounded coords. ~ RM
    // map.on('click', function (e) {
    //   console.log('map.style = ', map.getStyle())
    //   console.log('coords = ', e.lngLat.lng, ',', e.lngLat.lat)
    // })
  })

  dispatch({
    draw: Draw,
    map: map,
    type: 'SET_MAP'
  })
}

export default initializeMap
