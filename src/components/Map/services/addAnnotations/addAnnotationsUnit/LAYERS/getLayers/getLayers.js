import getExpIconNumTypes from './getExpIconNumTypes'
import getExpIconNumUnits from './getExpIconNumUnits'
import getExpIconOffset from './getExpIconOffset'
import ICONS from '../../ICONS'

// TODO: Hostility indication layer. ~ RM
// IDEA: Text disappears as user zooms in. ~ RM
// IDEA: Draggable icons. ~ RM
// IDEA: Drag/drop icons onto each other to merge. ~ RM
// IDEA: UI for dividing icons. ~ RM
const getLayers = () => {
  const layers = [
    // TODO: Heading size is a function of unit speed. ~ RM
    {
      filter: ['has', 'heading'],
      id: 'heading',
      layout: {
        'icon-allow-overlap': true,
        'icon-image': 'heading',
        'icon-offset': [0, -35],
        'icon-pitch-alignment': 'viewport',
        'icon-rotate': ['get', 'heading'],
        'icon-rotation-alignment': 'map',
        'icon-size': [
          'step',
          ['get', 'count'],
          0.5,
          10, 0.666,
          100, 0.833,
          1000, 1
        ]
      },
      source: 'maptivist-units',
      type: 'symbol'
    },
    {
      filter: ['has', 'cluster'],
      id: 'cluster',
      paint: {
        'circle-color': 'transparent',
        'circle-radius': [
          'let', 'numTypes', getExpIconNumTypes(),
          [
            'case',
            ['==', ['var', 'numTypes'], 1],
            [
              'step',
              getExpIconNumUnits(),
              17,
              10, 23,
              100, 29,
              1000, 32,
              2000, 35
            ],
            ['+', ['*', 9, ['var', 'numTypes']], 10]
          ]
        ],
        'circle-stroke-color': 'rgba(0, 0, 0, 0.5)',
        'circle-stroke-width': 8
      },
      source: 'maptivist-units',
      type: 'circle'
    }
  ]

  ICONS.forEach(ICON => layers.push({
    filter: ['any',
      ['all',
        ['==', ['get', 'type'], ICON.type],
        ['==', ['get', 'faction'], ICON.faction]
      ],
      ['to-boolean', ['get', `sum_${ICON.faction}_${ICON.type}`]]
    ],
    id: `${ICON.faction}_${ICON.type}`,
    layout: {
      'icon-allow-overlap': true,
      'icon-image': ICON.image,
      'icon-offset': getExpIconOffset(
        ICON.faction,
        ICON.type,
        ICON.priority
      ),
      'icon-padding': 0,
      'icon-size': [
        'step', [
          'coalesce',
          ['get', 'count'],
          ['get', `sum_${ICON.faction}_${ICON.type}`]
        ],
        0.5,
        10, 0.666,
        100, 0.833,
        1000, 1
      ],
      'text-allow-overlap': true,
      'text-field': [
        'let',
        'num', [
          'coalesce',
          ['get', 'count'],
          ['get', `sum_${ICON.faction}_${ICON.type}`]
        ],
        [
          'step',
          ['var', 'num'],
          ['var', 'num'],
          1000,
          ['concat', ['/', ['round', ['/', ['var', 'num'], 100]], 10], 'K'],
          10000,
          ['concat', ['round', ['/', ['var', 'num'], 1000]], 'K'],
          1000000,
          ['concat', ['/', ['round', ['/', ['var', 'num'], 100000]], 10], 'M'],
          10000000,
          ['concat', ['round', ['/', ['var', 'num'], 1000000]], 'M'],
          1000000000,
          '☠'
        ]
      ],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-offset': getExpIconOffset(
        ICON.faction,
        ICON.type,
        ICON.priority,
        12
      ),
      'text-size': 12
    },
    paint: {
      'icon-opacity-transition': {
        // BUG: Fade out persists. ~ RM
        duration: 0
      },
      'text-color': 'white'
    },
    source: 'maptivist-units',
    type: 'symbol'
  }))
  return layers
}

export default getLayers
