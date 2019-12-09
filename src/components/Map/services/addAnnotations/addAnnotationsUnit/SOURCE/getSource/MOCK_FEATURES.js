const MOCK_FEATURES = [
  {
    geometry: {
      coordinates: [114.169671, 22.318127],
      type: 'Point'
    },
    properties: {
      count: 6,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169854, 22.317236],
      type: 'Point'
    },
    properties: {
      count: 4,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169742, 22.317778],
      type: 'Point'
    },
    properties: {
      count: 4,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169641, 22.317670],
      type: 'Point'
    },
    properties: {
      count: 10,
      faction: 'HongKongPolice',
      type: 'medics'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168890, 22.317383],
      type: 'Point'
    },
    properties: {
      count: 22,
      faction: 'HongKongProtesters',
      type: 'medics'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168288, 22.317584],
      type: 'Point'
    },
    properties: {
      count: 5,
      faction: 'HongKongProtesters',
      type: 'medics'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168969, 22.317897],
      type: 'Point'
    },
    properties: {
      count: 300,
      heading: 350,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169073, 22.317415],
      type: 'Point'
    },
    properties: {
      count: 1000,
      heading: 80,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.167666, 22.317801],
      type: 'Point'
    },
    properties: {
      count: 20,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.166941, 22.317399],
      type: 'Point'
    },
    properties: {
      count: 20,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168500, 22.315712],
      type: 'Point'
    },
    properties: {
      count: 30,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.167845, 22.316494],
      type: 'Point'
    },
    properties: {
      count: 70,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168168, 22.317619],
      type: 'Point'
    },
    properties: {
      count: 50,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168752, 22.316922],
      type: 'Point'
    },
    properties: {
      count: 350,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169135, 22.317125],
      type: 'Point'
    },
    properties: {
      count: 500,
      heading: 170,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169678, 22.316273],
      type: 'Point'
    },
    properties: {
      count: 200,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169669, 22.318352],
      type: 'Point'
    },
    properties: {
      count: 100,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.170150, 22.318440],
      type: 'Point'
    },
    properties: {
      count: 50,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169526, 22.317492],
      type: 'Point'
    },
    properties: {
      count: 250,
      faction: 'HongKongPolice',
      heading: 260,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169507, 22.316479],
      type: 'Point'
    },
    properties: {
      count: 40,
      faction: 'HongKongPolice',
      heading: 170,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169845, 22.316714],
      type: 'Point'
    },
    properties: {
      count: 30,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.170124, 22.315362],
      type: 'Point'
    },
    properties: {
      count: 20,
      faction: 'HongKongPolice',
      heading: 260,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.170357, 22.317607],
      type: 'Point'
    },
    properties: {
      count: 20,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169427, 22.319310],
      type: 'Point'
    },
    properties: {
      count: 20,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  }
]

export default MOCK_FEATURES
