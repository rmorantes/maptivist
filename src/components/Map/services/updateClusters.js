import mapboxgl from 'mapbox-gl'

// TODO: Reimplement clustering with Mapbox layers vs HTML markers. ~ RM
// SOURCE: https://docs.mapbox.com/mapbox-gl-js/example/cluster-html/
const updateClusters = (
  map,
  markers,
  markersOnScreen,
  previousFeatureCount
) => {
  if (!(map && map.loaded)) return
  const features = map.querySourceFeatures('hongKongPoliceRiot')

  if (features.length === previousFeatureCount.current) return
  previousFeatureCount.current = features.length
  const markersNew = {}

  for (let feature of features) {
    const coordinates = feature.geometry.coordinates
    const props = feature.properties
    const id = props.cluster_id

    if (!props.cluster) continue
    let marker = markers.current[id]

    if (!marker) {
      const domstring = `
        <svg
          height='6rem'
          id=${id}
          viewBox='0 0 100 100'
          width='6rem'
        >
          <circle
            cx='50'
            cy='50'
            r='37.5'
            fill='rgba(0, 0, 0, 0.65)'
          >
          </circle>
          <text
            dominant-baseline='middle'
            text-anchor='middle'
            x='50%'
            y='50%'
          >
            <tspan
              dy='-0.55rem'
              fill='red'
              style='font-size: 1.25rem'
              x='50%'
            >
              ${props.sumPolice}
            </tspan>
            <tspan
              dy='1.35rem'
              fill='lawngreen'
              style='font-size: 1.25rem'
              x='50%'
            >
              ${props.sumProtesters}
            </tspan>
          </text>
        </svg>
      `

      const html = new DOMParser()
        .parseFromString(domstring , 'text/html')
        .body
        .firstChild
      marker = new mapboxgl.Marker({element: html}).setLngLat(coordinates)
      markers.current[id] = marker
    }

    markersNew[id] = marker

    if (!markersOnScreen.current[id]) {
      marker.addTo(map)
    }
  }

  for (let markerId in markersOnScreen.current) {
    if (!markersNew[markerId]) {
      markersOnScreen.current[markerId].remove()
    }
  }

  markersOnScreen.current = markersNew
}

export default updateClusters
