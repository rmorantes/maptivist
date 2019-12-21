const MOCK_FEATURES = [
  {
    geometry: {
      coordinates: [114.169214, 22.305515],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168904, 22.304826],
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
      coordinates: [114.168476, 22.452873],
      type: 'Point'
    },
    properties: {
      count: 15,
      faction: 'HongKongPolice',
      type: 'medics'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.035437, 22.44531],
      type: 'Point'
    },
    properties: {
      count: 700,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.036525, 22.445413],
      type: 'Point'
    },
    properties: {
      count: 100,
      faction: 'HongKongPolice',
      heading: 270,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.037721, 22.444971],
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
      coordinates: [114.03594, 22.445328],
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
      coordinates: [114.167514, 22.452971],
      type: 'Point'
    },
    properties: {
      count: 300,
      faction: 'HongKongProtesters',
      heading: 90,
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.167865, 22.452869],
      type: 'Point'
    },
    properties: {
      count: 1000,
      faction: 'HongKongProtesters',
      type: 'protesters'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.036569, 22.44434],
      type: 'Point'
    },
    properties: {
      count: 5,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.036898, 22.444348],
      type: 'Point'
    },
    properties: {
      count: 5,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.036367, 22.444339],
      type: 'Point'
    },
    properties: {
      count: 40,
      faction: 'HongKongPolice',
      heading: 90,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.035019, 22.446598],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.030306, 22.438095],
      type: 'Point'
    },
    properties: {
      count: 5,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.030339, 22.438109],
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
      coordinates: [114.030135, 22.440627],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.029269, 22.444196],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.029459, 22.444429],
      type: 'Point'
    },
    properties: {
      count: 4,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.028861, 22.44484],
      type: 'Point'
    },
    properties: {
      count: 3,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.034159, 22.444248],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.034175, 22.444206],
      type: 'Point'
    },
    properties: {
      count: 4,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.028774, 22.448786],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.028921, 22.44869],
      type: 'Point'
    },
    properties: {
      count: 10,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.023593, 22.443043],
      type: 'Point'
    },
    properties: {
      count: 3,
      faction: 'HongKongPolice',
      heading: 270,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.023049, 22.443047],
      type: 'Point'
    },
    properties: {
      count: 3,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168699, 22.322932],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      heading: 180,
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169116, 22.320252],
      type: 'Point'
    },
    properties: {
      count: 20,
      faction: 'HongKongPolice',
      heading: 350,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169231, 22.320247],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169157, 22.319265],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.169073, 22.31925],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168335, 22.319129],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168173, 22.319102],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.187798, 22.322788],
      type: 'Point'
    },
    properties: {
      count: 10,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.187508, 22.322165],
      type: 'Point'
    },
    properties: {
      count: 90,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.187793, 22.322817],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.187451, 22.322965],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.171877, 22.301241],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      heading: 0,
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.171874, 22.301289],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      heading: 0,
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.172087, 22.298159],
      type: 'Point'
    },
    properties: {
      count: 8,
      faction: 'HongKongPolice',
      type: 'riot'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.171696, 22.303829],
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
      coordinates: [114.171691, 22.303906],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.17168, 22.304018],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.153624, 22.339098],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.157512, 22.338289],
      type: 'Point'
    },
    properties: {
      count: 3,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.157483, 22.338312],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.128432, 22.359166],
      type: 'Point'
    },
    properties: {
      count: 5,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.111721, 22.372456],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.185857, 22.374409],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.187717, 22.382382],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.187815, 22.382511],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.1883, 22.382106],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.188278, 22.383221],
      type: 'Point'
    },
    properties: {
      count: 15,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168802, 22.452881],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168866, 22.452884],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.260044, 22.310878],
      type: 'Point'
    },
    properties: {
      count: 10,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168674, 22.452446],
      type: 'Point'
    },
    properties: {
      count: 50,
      faction: 'HongKongPolice',
      heading: 0,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168044, 22.452602],
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
      coordinates: [114.168239, 22.452871],
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
      coordinates: [114.168697, 22.452877],
      type: 'Point'
    },
    properties: {
      count: 50,
      faction: 'HongKongPolice',
      heading: 270,
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.167364, 22.452863],
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
      coordinates: [114.16088, 22.331755],
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
      coordinates: [114.160969, 22.331842],
      type: 'Point'
    },
    properties: {
      count: 5,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.164822, 22.450251],
      type: 'Point'
    },
    properties: {
      count: 4,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.160823, 22.331799],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.021412, 22.325463],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      heading: 70,
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.167792, 22.320627],
      type: 'Point'
    },
    properties: {
      count: 3,
      faction: 'HongKongPolice',
      heading: 80,
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168269, 22.451141],
      type: 'Point'
    },
    properties: {
      count: 10,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.168838, 22.45114],
      type: 'Point'
    },
    properties: {
      count: 10,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.167367, 22.453413],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.25616, 22.320098],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.213633, 22.326597],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.214418, 22.323278],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.205915, 22.326027],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.206081, 22.326039],
      type: 'Point'
    },
    properties: {
      count: 2,
      faction: 'HongKongPolice',
      type: 'buses'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.160979, 22.331834],
      type: 'Point'
    },
    properties: {
      count: 3,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.160823, 22.331799],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.208743, 22.324482],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.213128, 22.322184],
      type: 'Point'
    },
    properties: {
      count: 10,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.213932, 22.326751],
      type: 'Point'
    },
    properties: {
      count: 3,
      faction: 'HongKongPolice',
      type: 'crowdControl'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.214001, 22.326668],
      type: 'Point'
    },
    properties: {
      count: 3,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.214371, 22.32244],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.214359, 22.322439],
      type: 'Point'
    },
    properties: {
      count: 1,
      faction: 'HongKongPolice',
      type: 'sedan'
    },
    type: 'Feature'
  },
  {
    geometry: {
      coordinates: [114.212976, 22.322312],
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
      count: 20,
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
