import getFeatureCollection from './getFeatureCollection'
import getLayerFacility from './getLayerFacility'
import getLayersUnit from './getLayersUnit'
import getSourceUnit from './getSourceUnit'
import getSourceFacility from './getSourceFacility'
import SCAFFOLDS from './SCAFFOLDS'

// TODO: Break this up. ~ RM
// TODO: Add Hong Kong Media faction. ~ RM
// TODO: Add Boston scenario. ~ RM
const addLayerCollections = seed => {
  let layerCollectionId = 1
  let layerId = 1
  let featureCollectionId = 1
  let featureId = 1
  const processScaffolds = (scaffolds, previousLayerCollection) => {
    scaffolds.forEach(scaffold => {
      const newLayerCollection = {
        groupId: 1,
        id: layerCollectionId,
        name: scaffold.name
      }
      if (scaffold.name.includes('Units >')) {
        newLayerCollection.sourceJSON = JSON.stringify(getSourceUnit())
        newLayerCollection.layerIds = []
        const textColor = scaffold.name
          .includes('Government') ? '#DF2507' : '#000000'
        // TODO: Reformat name input to use hyphens. ~ RM
        const layers = getLayersUnit(scaffold.name, textColor)
        layers.forEach(layer => {
          const newLayer = {
            dataJSON: JSON.stringify(layer),
            id: layerId
          }
          const iconImageId = layer.layout && layer.layout['icon-image']
          if (iconImageId) {
            if (iconImageId.slice(-7) === 'heading') {
              newLayer.iconImagePropsJSON = JSON.stringify({
                colorFill: '#000000',
                id: scaffold.name + '-heading',
                opacityFill: 0.5,
                type: 'heading'
              })
            } else {
              const type = iconImageId
                .slice(iconImageId.lastIndexOf('>') + 2)
                .toLowerCase()
              const substring = iconImageId
                .slice(iconImageId.indexOf('>') + 2)
              const faction = substring
                .slice(0, substring.indexOf('>') - 1)
              const colorBackground = {
                Government: '#DF2507',
                Media: '#0000FF',
                Protesters: '#000000'
              }[faction]
              const colorFill = {
                Government: '#FFDF00',
                Media: '#FFFFFF',
                Protesters: '#FFFFFF'
              }[faction]
              newLayer.iconImagePropsJSON = JSON.stringify({
                colorBackground: colorBackground,
                colorFill: colorFill,
                id: scaffold.name,
                type: type
              })
            }
          }
          newLayerCollection.layerIds.push(layerId)
          seed.layers[layerId] = newLayer
          layerId++
        })
        const newFeatureCollection = {
          featureIds: [],
          groupId: 1,
          id: featureCollectionId,
          // NOTE: May not be useful, just adding so gun.set() isn't passed an
          // empty object. ~ RM
          name: scaffold.name
        }
        getFeatureCollection(scaffold.name).forEach(feature => {
          seed.features[featureId] = {
            ...feature,
            id: featureId
          }
          newFeatureCollection.featureIds.push(featureId)
          featureId++
        })
        seed.featureCollections[featureCollectionId] = newFeatureCollection
        newLayerCollection.featureCollectionIds = [featureCollectionId]
        featureCollectionId++
      // }
      } else if (scaffold.name.includes('Facilities')) {
        newLayerCollection.sourceJSON = JSON.stringify(getSourceFacility())
        const newLayer = {
          dataJSON: JSON.stringify(getLayerFacility(scaffold.name)),
          iconImagePropsJSON: JSON.stringify({
            colorFill: '#FFDF00',
            colorBackground: '#DF2507',
            id: scaffold.name,
            opacity: 0.5,
            type: 'facility'
          }),
          id: layerId
        }
        newLayerCollection.layerIds = [layerId]
        seed.layers[layerId] = newLayer
        layerId++
        const newFeatureCollection = {
          featureIds: [],
          groupId: 1,
          id: featureCollectionId,
          // NOTE: May not be useful, just adding so gun.set() isn't passed an
          // empty object. ~ RM
          name: scaffold.name
        }
        getFeatureCollection(scaffold.name).forEach(feature => {
          seed.features[featureId] = {
            ...feature,
            id: featureId
          }
          newFeatureCollection.featureIds.push(featureId)
          featureId++
        })
        seed.featureCollections[featureCollectionId] = newFeatureCollection
        newLayerCollection.featureCollectionIds = [featureCollectionId]
        featureCollectionId++
      }
      seed.layerCollections[layerCollectionId] = newLayerCollection
      if (previousLayerCollection) {
        previousLayerCollection.layerCollectionIds.push(layerCollectionId)
      }
      layerCollectionId++
      if (scaffold.layerCollections) {
        newLayerCollection.layerCollectionIds = []
        processScaffolds(scaffold.layerCollections, newLayerCollection)
      }
    })
  }
  processScaffolds(SCAFFOLDS)
  seed.groups[1].layerCollectionIds = [1]
}

export default addLayerCollections
