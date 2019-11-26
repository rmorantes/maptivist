const getSum = type => {
  const isType = ['==', ['get', 'type'], type]
  const getCount = ['number', ['get', 'count'], 0]
  return ['+', ['case', isType, getCount, 0]]
}

// TODO: Merge sources into one source (necessary for heterogeneous clustering,
// for instance, displaying sums of both police and protesters using just one
// cluster icon)). ~ RM
// TODO: Start thinking about how to store such data using gun.js. ~ RM
const HONG_KONG_POLICE_RIOT_SOURCE = {
  cluster: true,
  clusterMaxZoom: 22,
  clusterProperties: {
    'sum': ['+', ['number', ['get', 'count'], 0]],
    'sumPolice': getSum('police'),
    'sumProtesters': getSum('protesters')
  },
  clusterRadius: 50,
  data: {
    features: [
      {
        geometry: {
          coordinates: [114.16907383749196, 22.317415805201733],
          type: 'Point'
        },
        properties: {
          count: 2500,
          heading: 260,
          type: 'protesters'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.1676666368221, 22.317801853965705],
          type: 'Point'
        },
        properties: {
          count: 20,
          type: 'protesters'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.1669410618656, 22.317399508732507],
          type: 'Point'
        },
        properties: {
          count: 20,
          type: 'protesters'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16850031654354, 22.315712742285598],
          type: 'Point'
        },
        properties: {
          count: 9,
          type: 'protesters'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16784550486028, 22.31649489389102],
          type: 'Point'
        },
        properties: {
          count: 70,
          type: 'protesters'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16816859095303, 22.31761934880805],
          type: 'Point'
        },
        properties: {
          count: 50,
          type: 'protesters'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16875247974298, 22.31692244563817],
          type: 'Point'
        },
        properties: {
          count: 350,
          type: 'protesters'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.1691350646006, 22.317125082138546],
          type: 'Point'
        },
        properties: {
          count: 500,
          heading: 170,
          type: 'protesters'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16966941500493, 22.31835225709888],
          type: 'Point'
        },
        properties: {
          count: 100,
          type: 'police'
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
          type: 'police'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16952648224952, 22.317492279928672],
          type: 'Point'
        },
        properties: {
          count: 250,
          heading: 260,
          type: 'police'
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
          heading: 170,
          type: 'police'
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
          type: 'police'
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
          heading: 260,
          type: 'police'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.1703578187566, 22.31760784163056],
          type: 'Point'
        },
        properties: {
          count: 20,
          type: 'police'
        },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates: [114.16942782105514, 22.31931038909697],
          type: 'Point'
        },
        properties: {
          count: 20,
          type: 'police'
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
