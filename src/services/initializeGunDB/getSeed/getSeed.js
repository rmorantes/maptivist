import addLayerCollections from './addLayerCollections'

const getSeed = () => {
  const seed = {
    featureCollections: {},
    groups: {},
    features: {},
    layerCollections: {},
    layers: {},
    users: {}
  }
  // TODO: Find a more secure way of seeding users. ~ RM
  seed.users[1] = {
    alias: 'RandyM',
    groupIds: [1],
    id: 1,
    password: '111111'
  }
  seed.groups[1] = {
    adminIds: [1],
    id: 1,
    memberIds: [1],
    name: 'Maptivist General Group'
  }

  addLayerCollections(seed)
  return seed
}

export default getSeed
