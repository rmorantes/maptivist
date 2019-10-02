const LAYERS = [
  {
    filter: ['has', 'point_count'],
    id: 'clusters',
    paint: {
      'circle-color': 'rgba(0, 0, 0, 0.625)',
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        15,
        10,
        20,
        100,
        40
      ],
      'circle-stroke-color': '#1b9e77',
      'circle-stroke-width': 5
    },
    source: 'groupMembers',
    type: 'circle'
  },
  {
    filter: ['has', 'point_count'],
    id: 'cluster-count',
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['Arial Unicode MS Bold'],
      'text-size': 15
    },
    source: 'groupMembers',
    paint: {
      'text-color': '#fff'
    },
    type: 'symbol',
  },
  {
    filter: ['!', ['has', 'point_count']],
    id: 'unclustered-point',
    paint: {
      'circle-color': '#1b9e77',
      'circle-radius': 5
    },
    source: 'groupMembers',
    type: 'circle'
  },
  {
    'id': 'aliases',
    'type': 'symbol',
    'source': 'groupMembers',
    filter: ['!', ['has', 'point_count']],
    'layout': {
      'text-variable-anchor': [
        'top',
        'top-right',
        'top-left',
        'right',
        'left',
        'bottom-right',
        'bottom-left',
        'bottom'
      ],
      'text-field': ['get', 'alias'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-size': 15,
      'text-radial-offset': 0.5,
      'text-letter-spacing': 0.05,
    },
    'paint': {
      'text-color': '#1b9e77',
      'text-halo-color': 'rgba(255, 255, 255, 0.5)',
      'text-halo-width': 2
    },
  }
]

export default LAYERS
