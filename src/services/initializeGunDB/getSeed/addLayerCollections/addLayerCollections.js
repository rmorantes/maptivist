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
  const processScaffolds = (scaffolds, path = '', previousLayerCollection) => {
    scaffolds.forEach(scaffold => {
      const pathNew = `${path}/${scaffold.name}`
      const newLayerCollection = {
        groupId: 1,
        id: layerCollectionId,
        name: scaffold.name,
        path: pathNew
      }
      if (!scaffold.layerCollections) {
        if (scaffold.name.includes('Facilities')) {
          newLayerCollection.sourceJSON = JSON.stringify(getSourceFacility())
          const newLayer = {
            dataJSON: JSON.stringify(getLayerFacility(pathNew)),
            iconImagePropsJSON: JSON.stringify({
              colorFill: '#FFDF00',
              colorBackground: '#DF2507',
              id: pathNew,
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
            name: pathNew
          }
          getFeatureCollection(pathNew).forEach(feature => {
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
        } else {
          newLayerCollection.sourceJSON = JSON.stringify(getSourceUnit())
          newLayerCollection.layerIds = []
          const textColor = pathNew
            .includes('Government') ? '#DF2507' : '#000000'
          // TODO: Reformat name input to use hyphens. ~ RM
          const layers = getLayersUnit(pathNew, textColor)
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
                  id: pathNew + '-heading',
                  opacityFill: 0.5,
                  type: 'heading'
                })
              } else {
                const faction = (
                  path.includes('Government') ? 'Government' :
                  path.includes('Media') ? 'Media' : 'Protesters'
                )
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
                const noSpaces = scaffold.name.replace(/\s/g, '')
                const type = noSpaces.slice(0, 1).toLowerCase() + noSpaces.slice(1)
                newLayer.iconImagePropsJSON = JSON.stringify({
                  colorBackground: colorBackground,
                  colorFill: colorFill,
                  id: pathNew,
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
            name: pathNew
          }
          getFeatureCollection(pathNew).forEach(feature => {
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
      }
      seed.layerCollections[layerCollectionId] = newLayerCollection
      if (previousLayerCollection) {
        previousLayerCollection.layerCollectionIds.push(layerCollectionId)
      }
      layerCollectionId++
      if (scaffold.layerCollections) {
        newLayerCollection.layerCollectionIds = []
        processScaffolds(scaffold.layerCollections, pathNew, newLayerCollection)
      }
    })
  }
  processScaffolds(SCAFFOLDS)
  seed.groups[1].layerCollectionIds = [1]
}

export default addLayerCollections
