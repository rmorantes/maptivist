import HONG_KONG_POLICE_RIOT_LAYER from './HONG_KONG_POLICE_RIOT_LAYER'
import HONG_KONG_POLICE_RIOT_SOURCE from './HONG_KONG_POLICE_RIOT_SOURCE'

const addRiot = async map => {
  map.addSource('hongKongPoliceRiot', HONG_KONG_POLICE_RIOT_SOURCE)

  for (let layer of HONG_KONG_POLICE_RIOT_LAYER) {
    map.addLayer(layer)
  }

  const handleSelect = e => {
    const feature = map.queryRenderedFeatures(
      e.point,
      {layers: ['hongKongPoliceRiot']}
    )[0]

    if (feature.properties.cluster) {
      const clusterId = feature.properties.cluster_id;
      map.getSource('hongKongPoliceRiot')
      .getClusterExpansionZoom(clusterId, (error, zoom) =>
        !error && map.easeTo({
          center: feature.geometry.coordinates,
          zoom: zoom
        })
      )
    } else {
      // TODO: HTML details popup. ~ RM
    }
  }

  map.on('click', 'hongKongPoliceRiot', handleSelect)
  map.on('touchstart', 'hongKongPoliceRiot', handleSelect)

  map.on('mouseenter', 'hongKongPoliceRiot', () =>
    map.getCanvas().style.cursor = 'pointer'
  )

  map.on('mouseleave', 'hongKongPoliceRiot', () =>
    map.getCanvas().style.cursor = ''
  )
}

export default addRiot
