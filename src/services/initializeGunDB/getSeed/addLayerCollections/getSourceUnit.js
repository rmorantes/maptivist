const getSourceUnit = () => ({
  cluster: true,
  clusterMaxZoom: 17,
  clusterProperties: {
    sum: ['+', ['get', 'count']]
  },
  clusterRadius: 70,
  data: {
    features: [],
    type: 'FeatureCollection'
  },
  type: 'geojson'
})

export default getSourceUnit
