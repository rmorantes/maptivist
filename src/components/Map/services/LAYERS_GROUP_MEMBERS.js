const LAYERS_GROUP_MEMBERS = [
  {
    'filter': ['has', 'point_count'],
    'id': 'clusters',
    'paint': {
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
    'source': 'groupMembers',
    'type': 'circle'
  },
  {
    'filter': ['has', 'point_count'],
    'id': 'cluster-count',
    'layout': {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['Arial Unicode MS Bold'],
      'text-size': 15
    },
    'paint': {
      'text-color': '#fff'
    },
    'source': 'groupMembers',
    'type': 'symbol'
  },
  {
    'filter': ['!', ['has', 'point_count']],
    'id': 'unclustered-point',
    'paint': {
      'circle-color': '#1b9e77',
      'circle-radius': 5
    },
    'source': 'groupMembers',
    'type': 'circle'
  },
  {
    'filter': ['!', ['has', 'point_count']],
    'id': 'aliases',
    'layout': {
      'text-field': ['get', 'alias'],
      'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
      'text-letter-spacing': 0.05,
      'text-radial-offset': 0.5,
      'text-size': 15,
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
    },
    'paint': {
      'text-color': '#1b9e77',
      'text-halo-color': 'rgba(255, 255, 255, 0.5)',
      'text-halo-width': 2
    },
    'source': 'groupMembers',
    'type': 'symbol'
  }
]

export default LAYERS_GROUP_MEMBERS
