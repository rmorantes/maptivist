import addSourcesAndLayers from './addSourcesAndLayers'
import mapboxgl from 'mapbox-gl'
import MapboxDraw from '@mapbox/mapbox-gl-draw'
// TODO: Implement annotation color selection. ~ RM
// import STYLES_DRAW_ANNOTATIONS from './STYLES_DRAW_ANNOTATIONS'
import LAYERS_GROUP_MEMBERS from './LAYERS_GROUP_MEMBERS'

const initializeMap = (
  dispatch,
  gun,
  mapRef,
  setIsMapLoaded,
  user,
) => {
  const map = new mapboxgl.Map({
    accessToken: 'pk.eyJ1Ijoicm1vcmFudGVzIiwiYSI6ImNqYTRtaWp5MzRjcXEzMXBveWViOGNjYm0ifQ.lt1qdGpfbbrT328BOUhIpQ',
    center: [114.16985583924117, 22.317542746173288],
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
    zoom: 11
  })

  const Draw = new MapboxDraw({
    displayControlsDefault: false,
    // styles: STYLES_DRAW_ANNOTATIONS
  })

  map.addControl(Draw)

  map.on('load', async () => {
    addSourcesAndLayers(map)
    setIsMapLoaded(true)

    // NOTE: For development. ~ RM
    // map.on('click', function (e) {
    //   console.log('coords = ', e.lngLat.lng,',',e.lngLat.lat)
    // })
  })

  dispatch({
    draw: Draw,
    map: map,
    type: 'SET_MAP'
  })

  mapRef.current = map
}

export default initializeMap
