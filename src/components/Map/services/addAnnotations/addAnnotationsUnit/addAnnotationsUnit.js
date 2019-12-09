import addLayers from '../addLayers'
import LAYERS from './LAYERS'
import SOURCE from './SOURCE'

const addAnnotationsUnit = async map => {
  map.addSource('maptivist-units', SOURCE)
  await addLayers(map, LAYERS)

  LAYERS.forEach(LAYER => {
    // TODO: Add detail popups. ~ RM
    // TODO: Pointer logic correctly handles overlapping icons. ~ RM
    map.on('mouseenter', LAYER.id, () => {
      map.getCanvas().style.cursor = 'pointer'
    })

    map.on('mouseleave', LAYER.id, () => {
      map.getCanvas().style.cursor = ''
    })
  })
}

export default addAnnotationsUnit
