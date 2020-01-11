// TODO: Indicate hostility level with `icon-halo-blur`. ~ RM
// NOTE: Cluster happens at source level, so for now it's necessary to
// create a source and corresponding layers for each icon (ouch). ~ RM
// NOTE: Instances of a given symbol layer do not stack properly with regard
// to each other (image and text overlap weirdly). Effect is worse when
// pairing a circle layer (for icon background) with a symbol layer (icon
// image and text) - icon "detaches" from background, stacking over the
// circle instances/backgrounds of all other icons, versus overlapping as
// intended. Fortunately, this can mostly be avoided via cluster settings
// that do not permit much overlap. Really only an issue when exceeding
// clusterMaxZoom. ~ RM
const getLayersUnit = (name, textColor) => ([
  {
    id: `${name}-cluster`,
    paint: {
      'circle-opacity': 0,
      'circle-radius': [
        'step',
        ['coalesce', ['get', 'count'], ['get', 'sum']],
        18,
        10, 23.75,
        100, 29.75,
        1000, 35.5
      ],
      'circle-stroke-color': 'rgba(0, 0, 0, 0.5)',
      'circle-stroke-width': ['case', ['has', 'cluster'], 6, 0]
    },
    source: name,
    type: 'circle'
  },
  {
    filter: ['has', 'heading'],
    id: `${name}-heading`,
    layout: {
      'icon-allow-overlap': true,
      'icon-image': `${name}-heading`,
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
    source: name,
    type: 'symbol'
  },
  {
    id: name,
    layout: {
      'icon-allow-overlap': true,
      'icon-image': name,
      'icon-size': [
        'step', [
          'coalesce',
          ['get', 'count'],
          ['get', 'sum']
        ],
        0.5,
        10, 0.666,
        100, 0.833,
        1000, 1
      ],
      'text-allow-overlap': true,
      'text-optional': true,
      'text-field': [
        'let',
        'num', [
          'coalesce',
          ['get', 'count'],
          ['get', 'sum']
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
      'text-size': 12
    },
    paint: {
      'text-color': textColor
    },
    source: name,
    type: 'symbol'
  }
])

export default getLayersUnit
