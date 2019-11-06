import LAYERS_GROUP_MEMBERS from '../../LAYERS_GROUP_MEMBERS'

const handleSignOut = (draw, intervalId, map) => {
  clearInterval(intervalId)

  for (let layer of LAYERS_GROUP_MEMBERS) {
    map.removeLayer(layer.id)
  }

  draw.deleteAll()
  map.removeSource('groupMembers')
}

export default handleSignOut
