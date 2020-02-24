import PanelComms from './components/PanelComms'
import PanelGroups from './components/PanelGroups'
import PanelLayers from './components/PanelLayers'
// QUESTION: Should this functionality live in panels or in navbar?
// import PanelFiles from './components/PanelFiles'
// import PanelOrganizations from './components/PanelOrganizations'
// import PanelProfile from './components/PanelProfile'

const getWindowDimensions = () => ({
  height: window.innerHeight,
  width: window.innerWidth
})

// TODO: Panels cannot be resized such that they intersect. ~ RM
// TODO: Panels can be combined and seperated via dragging. ~ RM
const Panels = props => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const isThrottling = useRef(false)
  const delay = 250
  let lastExecutionTimeoutId

  const updatePanels = () => {
    setWindowDimensions(getWindowDimensions())
  }

  useEffect(() => {
    // TODO: Create custom hook for resize logic. ~ RM
    // * https://medium.com/exodevhub/react-hooks-making-it-easier-to-compose-reuse-and-share-react-code-328f3bb49b16
    window.onresize = () => {
      if (!isThrottling.current) {
        updatePanels()
        isThrottling.current = true
        setTimeout(() => {
          isThrottling.current = false
        }, delay)
      }
      clearTimeout(lastExecutionTimeoutId)
      lastExecutionTimeoutId = setTimeout(updatePanels, delay)
    }
  }, [])

  return (
    <BoundingBox>
      {props.panels.map((panel, i) =>
        panel.heading === 'Groups' ? (
          <PanelGroups windowDimensions={windowDimensions} key={i} {...panel} />
        ) : panel.heading === 'Annotations' ? (
          <PanelLayers windowDimensions={windowDimensions} key={i} {...panel} />
        ) : (
          <PanelComms windowDimensions={windowDimensions} key={i} {...panel} />
        )
      )}
    </BoundingBox>
  )
}

const BoundingBox = styled.div`
  height: calc(100vh - 3rem);
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 3rem;
  width: 100vw;
`

export default Panels
