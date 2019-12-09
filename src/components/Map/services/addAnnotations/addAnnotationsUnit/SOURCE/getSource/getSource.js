import getClusterProperties from './getClusterProperties'
import MOCK_FEATURES from './MOCK_FEATURES'

const getSource = () => ({
  cluster: true,
  clusterMaxZoom: 15,
  clusterProperties: getClusterProperties(),
  clusterRadius: 100,
  data: {
    features: MOCK_FEATURES,
    type: 'FeatureCollection'
  },
  generateId: true,
  type: 'geojson'
})

export default getSource
