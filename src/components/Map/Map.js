import handleAuthentication from './services/handleAuthentication'
import initializeMap from './services/initializeMap'
import { useStateValue } from 'src/services/context'

// TODO: UI for adjusting camera pitch. ~ RM
// TODO: UI for camera orbit (radius, direction, speed). ~ RM
// TODO: Some way of quickly bookmarking and panning to locations. ~ RM
// TODO: Hit tab, map camera pans to next item (member in a group, point in a
// route, and so on). ~ RM
// TODO: A minimap. ~ RM
// TODO: Clicking other nearby layers doesn't select MapboxDraw features. ~ RM
// TODO: A legend that upates according to what annoations are currently visible
// on map. ~ RM
// TODO: UI for layer management. Collections of layer collections are used to
// indicate associations, facilitate mangement (ex: disable "Hong Kong" to hide
// all subcollections), merge subcollection clusters (ex: "Cars" and "Buses" are
// merged into "Vehicles", such that their associated icons are replaced with
// another selected icon upon clustering or even when not, depending on
// settings), and so on. By default, leaf layer collection clusters do not merge
// with other such clusters, although they do form a superCluster according to
// settings. Something like:
//
//   Hong Kong             (collection)
//     Government          (collection)
//       Facilities        (layer)
//       Vehicles          (layer + collection) (clusterMerge: true)
//         Cars            (layer) (cluster: true)
//         Buss            (layer) (cluster: true)
//       Units             (layer + collection)
//         Crowd control   (layer) (cluster: true)
//         Medic           (layer) (cluster: true)
//     Media               (collection)
//       Reporter          (layer) (cluster: true)
//     Protesters          (layer + collection)
//       Medic             (layer) (cluster: true)
//       Crowd             (layer) (cluster: true)
//
// ~ RM
// IDEA: Multiple maps accessible via tab bar, with corresponding panes. ~ RM
const Map = props => {
  const [{ draw, gun, map, user }, dispatch] = useStateValue()
  const [intervalId, setIntervalId] = useState()
  const [isMapLoaded, setIsMapLoaded] = useState()
  const markers = useRef({})
  const markersOnScreen = useRef({})
  const previousFeatureCount = useRef(0)
  const [mapState, setMapState] = useState({
    center: null,
    pitch: null,
    zoom: null
  })

  // QUESTION: Can this be refactored as a custom hook? ~ RM
  useEffect(() => initializeMap(
    dispatch,
    gun,
    markersOnScreen,
    markers,
    previousFeatureCount,
    setIsMapLoaded,
    setMapState,
    user
  ), [])

  // QUESTION: Can this be refactored as a custom hook? ~ RM
  useEffect(() => handleAuthentication(
    draw,
    intervalId,
    isMapLoaded,
    gun,
    map,
    setIntervalId,
    user
  ), [isMapLoaded, map, user])

  return <Wrapper id='map' isMobile={props.isMobile}/>
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  ${props => props.isMobile ? css`
    .mapboxgl-ctrl-bottom-left {
      left: -0.25rem;
      top: 0.25rem !important;
    }
    .mapboxgl-ctrl-bottom-right {
      right: -0.375rem;
      top: -0.125rem !important;
      a {
        font-size: 0.8rem;
      }
    }
  ` : css`
    .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
      z-index: 0;
    }
    .mapboxgl-ctrl-bottom-left {
      bottom: 0.125rem;
      left: 0.125rem;
      .mapboxgl-ctrl, .mapboxgl-ctrl-logo {
        margin: 0;
      }
      .mapboxgl-ctrl-logo {
        height: 1.125rem;
      }
    }
  `}
`

export default Map
