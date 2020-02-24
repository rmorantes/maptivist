import addLayerIconImageToMap from './addLayerIconImageToMap'

// TODO: Layer collections aggregate child layer collections into a single
// icon via UI. ~ RM
// TODO: Aggregations can be aggregated (1 layer deep) into a supercluster
// (evenly places cluster icons in a ring) to prevent overlapping. ~ RM
const addAnnotations = (map, gun, user) => {
  if (!user) {
    const addLayerCollections = layerCollections => {
      layerCollections.map().on(layerCollection => {
        if (layerCollection.layers) {
          const source = JSON.parse(layerCollection.sourceJSON)
          const features = source.data.features
          gun.get(layerCollection.featureCollections).map().on(featureCollection => {
            gun.get(featureCollection.features).map().on(feature => {
              features.push({
                geometry: {
                  coordinates: [feature.lng, feature.lat],
                  type: 'Point'
                },
                // TODO: Stored in features as a propertiesJSON object? ~ RM
                // ex: properties: JSON.parse(feature.propertiesJSON),
                properties: {
                  ...(feature.count && { count: feature.count }),
                  ...(feature.label && { label: feature.label }),
                  ...(feature.heading && { heading: feature.heading })
                },
                type: 'Feature'
              })
            })
          })
          map.addSource(layerCollection.path, source)
          gun.get(layerCollection.layers).map().on(async layer => {
            if (layer.iconImagePropsJSON) {
              const iconImageProps = JSON.parse(layer.iconImagePropsJSON)
              const data = JSON.parse(layer.dataJSON)
              await addLayerIconImageToMap(map, iconImageProps)
              // If the layer collection is an actual layer collection, versus
              // a layer-collection-as-a-folder
              // NOTE: Assuming for now layer-collections-as-folders don't
              // themselves have corresponding layers/their own map icon - will
              // probably change once faction clustering is implemented
              // (EX: disparate HK Gov units are aggregated under a HK Gov flag
              // icon when zooming out past a certain level). ~ RM
              if (!layerCollection.layerCollections) {
                if (data.id.slice(-8) === '-heading') {
                  map.addLayer(data, data.id.slice(0, -8) + '-cluster')
                } else if (layerCollection.name.includes('Facilities')) {
                  map.addLayer(data)
                } else {
                  // NOTE: Unable to directly add layer after another layer.
                  // ~ RM
                  map.addLayer(data, data.id + '-cluster')
                  map.moveLayer(data.id + '-cluster', data.id)
                }
              }
            } else {
              map.addLayer(JSON.parse(layer.dataJSON))
            }
          })
        }
        if (layerCollection.layerCollections) {
          addLayerCollections(gun.get(layerCollection.layerCollections))
        }
      })
    }
    const group = gun.get('defaultSettings').get('group')
    addLayerCollections(group.get('layerCollections'))
  } else {
    // NOTE: When signing in, default settings should be changed as necessary.
    // ~ RM
    // TODO: Register user settings. ~ RM
    // TODO: When adding user's channels/layers/etc, check to ensure they're
    // still public.
  }
}

export default addAnnotations
