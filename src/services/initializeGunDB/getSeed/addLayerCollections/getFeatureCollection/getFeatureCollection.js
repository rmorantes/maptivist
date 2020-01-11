import FEATURE_COLLECTIONS from './FEATURE_COLLECTIONS'

// TODO: Feature collections can have feature collections.
// EX: A user wants to create a custom layer that combines cars, trucks, vans,
// buses, and so on into a single "Vehicles" layer. ~ RM
// TODO: Look into optimizations for working with large geojson data. ~ RM
// * https://docs.mapbox.com/help/troubleshooting/working-with-large-geojson-data/
const getFeatureCollection = id => FEATURE_COLLECTIONS[id]

export default getFeatureCollection
