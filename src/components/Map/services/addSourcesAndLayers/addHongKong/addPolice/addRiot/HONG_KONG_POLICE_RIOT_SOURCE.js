const HONG_KONG_POLICE_RIOT_SOURCE = {
  cluster: true,
  clusterMaxZoom: 22,
  clusterProperties: {
    'sum': ['+', ['number', ['get', 'count'], 0]]
  },
  clusterRadius: 50,
  data: {
    features: [
      {
        geometry: {
          coordinates: [114.16966941500493, 22.31835225709888],
          type: 'Point'
        },
        properties: {
          count: 100
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.17015026517686, 22.31844005222615],
          type: 'Point'
        },
        properties: {
          count: 50,
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16952648224952, 22.317492279928672],
          type: 'Point'
        },
        properties: {
          count: 150,
          heading: 255
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16950769470134, 22.316479291941278],
          type: 'Point'
        },
        properties: {
          count: 40,
          // heading: 255
          heading: 180
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16984532604346, 22.316714433711326],
          type: 'Point'
        },
        properties: {
          count: 30,
        },
        type: 'Feature'
      },

      {
        geometry: {
          coordinates: [114.1701246408781, 22.31536233536505],
          type: 'Point'
        },
        properties: {
          count: 8,
          heading: 255
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.1703578187566 , 22.31760784163056],
          type: 'Point'
        },
        properties: {
          count: 20,
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16942782105514, 22.31931038909697],
          type: 'Point'
        },
        properties: {
          count: 20
        },
        type: 'Feature'
      }
    ],
    type: 'FeatureCollection'
  },
  generateId: true,
  type: 'geojson'
}

export default HONG_KONG_POLICE_RIOT_SOURCE
