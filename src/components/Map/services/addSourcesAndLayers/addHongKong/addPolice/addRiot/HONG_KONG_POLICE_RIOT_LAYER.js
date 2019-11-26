const formatCount = [
  'let', 'count', ['coalesce', ['get', 'count']],
  [
    'case',
    ['<', ['var', 'count'], 1000],
    ['var', 'count'],
    ['<', ['var', 'count'], 10000],
    ['concat', ['/', ['round', ['/', ['var', 'count'], 100]], 10], 'K'],
    ['<', ['var', 'count'], 1000000],
    ['concat', ['round', ['/', ['var', 'count'], 1000]], 'K'],
    ['<', ['var', 'count'], 10000000],
    ['concat', ['/', ['round', ['/', ['var', 'count'], 100000]], 10], 'M'],
    ['<', ['var', 'count'], 1000000000],
    ['concat', ['round', ['/', ['var', 'count'], 1000000]], 'M'],
    ['>', ['var', 'count'], 1000000000],
    '☠',
    ''
  ]
]

const formatImage = imagePath => {return [
  'step',
  ['get', 'count'],
  imagePath + 1,
  10,
  imagePath + 2,
  100,
  imagePath + 3,
  1000,
  imagePath + 4
]}

const HONG_KONG_POLICE_RIOT_LAYER = [
  // IDEA: Heading arrow like Whatsapp logo. ~ RM
  {
    'filter': ['has', 'heading'],
    'id': 'hongKongPoliceRiotHeading',
    'layout': {
      'icon-allow-overlap': true,
      'icon-image': formatImage('heading'),
      'icon-offset': [0, -25],
      'icon-pitch-alignment' : 'viewport',
      'icon-rotate': ['get', 'heading'],
      'icon-rotation-alignment': 'map'
    },
    'source': 'hongKongPoliceRiot',
    'type': 'symbol'
  },
  {
    'filter': ['==', ['get', 'type'], 'police'],
    'id': 'hongKongPoliceRiot',
    'layout': {
      'icon-allow-overlap': true,
      'icon-image': formatImage('policeBadge'),
      'icon-padding': 0,
      'text-allow-overlap': true,
      'text-field': formatCount,
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 13,
    },
    'paint': {
      'icon-opacity': 1,
      'icon-opacity-transition': {
        'duration': 0
      },
      'text-color': 'white',
  },
    'source': 'hongKongPoliceRiot',
    'type': 'symbol'
  },
  {
    'filter': ['==', ['get', 'type'], 'protesters'],
    'id': 'protesters',
    'layout': {
      'icon-allow-overlap': true,
      'icon-image': formatImage('protestersCrowd'),
      'icon-padding': 0,
      'text-allow-overlap': true,
      'text-field': formatCount,
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 13,
    },
    'paint': {
      'icon-opacity': 1,
      'icon-opacity-transition': {
        'duration': 0
      },
      'text-color': 'white',
  },
    'source': 'hongKongPoliceRiot',
    'type': 'symbol'
  }
]

export default HONG_KONG_POLICE_RIOT_LAYER
