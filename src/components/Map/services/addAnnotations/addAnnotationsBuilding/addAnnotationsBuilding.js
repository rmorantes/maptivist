import addLayers from '../addLayers'
import LAYERS from './LAYERS'
import SOURCE from './SOURCE'

const addAnnotationsUnit = async map => {
  map.addSource('maptivist-buildings', SOURCE)
  await addLayers(map, LAYERS)

  // NOTE: Tracking just one id would occasionally result in selected state
  // incorrectly remaining true for some features if moving cursor quickly. ~ RM
  let selectedIds = []

  const setIsTextVisibleFalse = () => {
    for (const selectedId of selectedIds) {
      map.setFeatureState(
        { id: selectedId, source: 'maptivist-buildings' },
        { isTextVisible: false }
      )
    }
    map.getCanvas().style.cursor = ''
  }

  const setIsTextVisibleTrue = e => {
    setIsTextVisibleFalse()
    const selectedId = e.features[0].id
    selectedIds = [selectedId]
    map.setFeatureState(
      { id: selectedId, source: 'maptivist-buildings' },
      { isTextVisible: true }
    )
    map.getCanvas().style.cursor = 'pointer'
  }

  const toggleIsTextVisible = e => {
    if (selectedIds.includes(e.features[0].id)) {
      setIsTextVisibleFalse(e)
      selectedIds = []
    } else {
      setIsTextVisibleTrue(e)
    }
  }

  LAYERS.forEach(layer => {
    // TODO: Add detail popups. ~ RM
    // TODO: Pointer logic correctly handles overlapping icons. ~ RM
    map.on('mouseenter', layer.id, e => setIsTextVisibleTrue(e, layer.source))
    map.on('mouseleave', layer.id, () => setIsTextVisibleFalse(layer.source))
    map.on('touchstart', layer.id, toggleIsTextVisible)
  })
}

export default addAnnotationsUnit
