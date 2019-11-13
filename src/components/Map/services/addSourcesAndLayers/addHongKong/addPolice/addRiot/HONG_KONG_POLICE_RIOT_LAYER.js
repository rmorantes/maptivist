const HONG_KONG_POLICE_RIOT_LAYER = [
  // IDEA: Heading arrow like Whatsapp logo. ~ RM
  {
    'filter': ['has', 'heading'],
    'id': 'hongKongPoliceRiotHeading',
    'layout': {
      'icon-allow-overlap': true,
      'icon-image': [
        'step',
        ['get', 'count'],
        'heading1',
        10,
        'heading2',
        100,
        'heading3',
        1000,
        'heading4'
      ],
      'icon-offset': [0, -25],
      'icon-pitch-alignment' : 'viewport',
      'icon-rotate': ['get', 'heading'],
      'icon-rotation-alignment': 'map'
    },
    'source': 'hongKongPoliceRiot',
    'type': 'symbol'
  },
  {
    'id': 'hongKongPoliceRiot',
    'layout': {
      'icon-allow-overlap': true,
      'icon-image': [
        'let', 'count', ['coalesce', ['get', 'count'], ['get', 'sum']],
        [
          'step',
          ['var', 'count'],
          'policeBadge1',
          10,
          'policeBadge2',
          100,
          'policeBadge3',
          1000,
          'policeBadge4'
      ]
    ],
      'icon-padding': 0,
      'text-allow-overlap': true,
      'text-field': [
        'let', 'count', ['coalesce', ['get', 'count'], ['get', 'sum']],
        [
          'case',
          ['<', ['var', 'count'], 1000],
          ['var', 'count'],
          ['<', ['var', 'count'], 1000000],
          ['concat', ['round', ['/', ['var', 'count'], 1000]], 'K'],
          ['<', ['var', 'count'], 1000000000],
          ['concat', ['round', ['/', ['var', 'count'], 1000000]], 'M'],
          ['>', ['var', 'count'], 1000000000],
          '☠',
          ''
        ],
      ],
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
]

export default HONG_KONG_POLICE_RIOT_LAYER
