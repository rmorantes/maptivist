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
    center: [114.105942, 22.397843],
    container: 'map',
    fadeDuration: 0,
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
    zoom: 10
  })
  const Draw = new MapboxDraw({
    displayControlsDefault: false
    // styles: STYLES_DRAW_ANNOTATIONS
  })
  map.addControl(Draw)

  // NOTE: For development. ~ RM ///////////////////////////////////////////////
  // const element = document.createElement('div')
  // element.style.cssText = `
  //   background: red;
  //   border-radius: 50%;
  //   height: 25px;
  //   width: 25px;
  // `
  // const marker = new mapboxgl.Marker(element, { draggable: true })
  // const round = (value, precision = 6) => {
  //   const multiplier = Math.pow(10, precision || 0)
  //   return Math.round(value * multiplier) / multiplier
  // }
  // marker.on('dragend', () => {
  //   const lng = round(marker.getLngLat().lng)
  //   const lat = round(marker.getLngLat().lat)
  //   marker.setLngLat([lng, lat])
  //   console.log(`coords = ${lng}, ${lat}`)
  // })
  // ///////////////////////////////////////////////////////////////////////////

  map.on('load', async () => {
    addAnnotations(map, gun, user)
    setIsMapLoaded(true)

    // NOTE: For development. ~ RM /////////////////////////////////////////////
    // map.on('click', function (e) {
    //   const lng = round(e.lngLat.lng)
    //   const lat = round(e.lngLat.lat)
    //   marker.setLngLat([lng, lat]).addTo(map)
    //   console.log(`coords = ${lng}, ${lat}`)
    //   console.log('map.style = ', map.getStyle())
    // })
    // /////////////////////////////////////////////////////////////////////////
  })
  dispatch({
    draw: Draw,
    map: map,
    type: 'SET_MAP'
  })
}

export default initializeMap
