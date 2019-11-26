// TODO: Reduce text hitboxes when not visible so as not to interfere with the
// rendering of other features. Also ensures that mouseover of invisible text
// (versus associated icon) doesn't trigger visibility. ~ RM
// IDEA: Building icon size scales with importance (post < station < district HQ
// < regional HQ). ~ RM
// TODO: Buildings visible only at certain zoom level. ~ RM
const HONG_KONG_POLICE_BUILDINGS_LAYER = {
  'id': 'hongKongPoliceBuildings',
  'layout': {
    'icon-image': 'policeBuilding1',
    'text-anchor': 'top',
    'text-field': ['get', 'label'],
    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
    'text-justify': 'auto',
    'text-letter-spacing': 0.05,
    'text-radial-offset': 2,
    'text-size': 11,
    'text-transform': 'uppercase',
    'text-variable-anchor': [
      'top',
      'right',
      'left',
      'bottom'
    ],
  },
  'paint': {
    'text-halo-color': 'white',
    'text-halo-width': 2,
    'text-opacity': [
      'case',
      ['boolean', ['feature-state', 'isTextVisible'], false],
      1,
      0
    ]
  },
  'source': 'hongKongPoliceBuildings',
  'type': 'symbol'
}

export default HONG_KONG_POLICE_BUILDINGS_LAYER
