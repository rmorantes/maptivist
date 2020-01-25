// TODO: Reduce text hitboxes when not visible so as not to interfere with the
// rendering of other features. Also ensures that mouseover of invisible text
// (versus associated icon) doesn't trigger visibility. ~ RM
// TODO: Buildings visible only at certain zoom level. ~ RM
// TODO: Replace/remove Mapbox police station layer
// IDEA: Buildings become overlappable once zoomed in beyond unit annotation
// clusterability. ~ RM
// IDEA: Icon appears first, text appears later at higher zoom. ~ RM
// IDEA: Building icon size and/or image scales with importance (post < station
// < district HQ < regional HQ). ~ RM
const getLayerFacility = id => ({
  id: id,
  layout: {
    'icon-allow-overlap': true,
    'icon-image': id,
    'icon-size': 0.5,
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
    ]
  },
  minzoom: 14,
  paint: {
    'text-halo-color': 'white',
    'text-halo-width': 2
  },
  source: id,
  type: 'symbol'
})

export default getLayerFacility
