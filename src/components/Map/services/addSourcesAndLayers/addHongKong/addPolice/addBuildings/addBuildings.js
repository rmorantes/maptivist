import HONG_KONG_POLICE_BUILDINGS_LAYER from './HONG_KONG_POLICE_BUILDINGS_LAYER'
import HONG_KONG_POLICE_BUILDINGS_SOURCE from './HONG_KONG_POLICE_BUILDINGS_SOURCE'

// TODO: Icons stack according to importance. ~ RM
// IDEA: Center map on a particular icon via double-click. ~ RM
const addPoliceBuildings = async map => {
  map.addSource('hongKongPoliceBuildings', HONG_KONG_POLICE_BUILDINGS_SOURCE)
  map.addLayer(HONG_KONG_POLICE_BUILDINGS_LAYER)
  // NOTE: Tracking just one id would occasionally result in selected state
  // incorrectly remaining true for some features if moving cursor quickly. ~ RM
  let selectedIds = []

  const setIsTextVisibleFalse = () => {
    for (let selectedId of selectedIds) {
      map.setFeatureState({
        id: selectedId,
        source: 'hongKongPoliceBuildings'
      }, {isTextVisible: false}
    )}
  }

  const setIsTextVisibleTrue = e => {
    setIsTextVisibleFalse()
    const selectedId = e.features[0].id
    selectedIds = [selectedId]
    map.setFeatureState({
      id: selectedId,
      source: 'hongKongPoliceBuildings'
    }, {isTextVisible: true})
  }

  const toggleIsTextVisible = e => {
    if (selectedIds.includes(e.features[0].id)) {
      setIsTextVisibleFalse(e)
      selectedIds = []
    } else {
      setIsTextVisibleTrue(e)
    }
  }

  map.on('mouseenter', 'hongKongPoliceBuildings', setIsTextVisibleTrue)
  map.on('mouseleave', 'hongKongPoliceBuildings', setIsTextVisibleFalse)
  map.on('touchstart', 'hongKongPoliceBuildings', toggleIsTextVisible)
}

export default addPoliceBuildings
