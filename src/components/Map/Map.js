import handleAuthentication from './services/handleAuthentication'
import initializeMap from './services/initializeMap'
import { useStateValue } from 'src/services/context'

// TODO: UI for adjusting camera pitch. ~ RM
// TODO: UI for camera orbit (radius, direction, speed). ~ RM
// TODO: Some way of quickly bookmarking and panning to locations. ~ RM
// TODO: Hit tab, map camera pans to next item (member in a group, point in a
// route, and so on). ~ RM
// TODO: A minimap. ~ RM
// IDEA: Multiple maps accessible via tab bar, with corresponding panes. ~ RM
const Map = props => {
  const [{ draw, gun, user }, dispatch] = useStateValue()
  const [intervalId, setIntervalId] = useState()
  const [isMapLoaded, setIsMapLoaded] = useState()
  const mapRef = useRef()

  // QUESTION: Can this be refactored as a custom hook? ~ RM
  useEffect(() => initializeMap(
    dispatch,
    gun,
    mapRef,
    setIsMapLoaded,
    user
  ), [])

  // QUESTION: Can this be refactored as a custom hook? ~ RM
  useEffect(() => handleAuthentication(
    draw,
    intervalId,
    isMapLoaded,
    gun,
    mapRef.current,
    setIntervalId,
    user
  ), [isMapLoaded, mapRef, user])

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