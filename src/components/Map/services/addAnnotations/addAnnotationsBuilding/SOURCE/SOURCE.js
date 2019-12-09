import MOCK_FEATURES from './MOCK_FEATURES'

// TODO: Look into optimizations for working with large geojson data. ~ RM
// * https://docs.mapbox.com/help/troubleshooting/working-with-large-geojson-data/
const SOURCE = {
  data: {
    features: MOCK_FEATURES,
    type: 'FeatureCollection'
  },
  generateId: true,
  type: 'geojson'
}

export default SOURCE
