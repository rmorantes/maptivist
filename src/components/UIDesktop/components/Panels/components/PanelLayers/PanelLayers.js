import Pane from 'react-split-pane'
import SplitPane from 'react-split-pane'
import Panel from '../Panel'
import SubpanelLayer from './components/SubpanelLayer'
import SubpanelLayers from './components/SubpanelLayers'

// TODO: Toggling parent retains toggled state of all children. ~ RM
// TODO: Currently viewed layer shows in SubpanelLayer. ~ RM
// TODO: All folders start toggled open (for demoing). ~ RM
// TODO: A legend that updates according to region and/or currently visible
// asset icons. ~ RM
console.log('NOTE: Any React deprecation warnings likely stem from an in-progress version of "react-split-pane". See: https://github.com/tomkp/react-split-pane/issues/233')
const PanelLayers = props => {
  const [isNotDraggable, setIsNotDraggable] = useState(false)
  const [pane1Size, setPane1Size] = useState('33%')

  // NOTE: Somewhat hacky/non-React due to in-progress state of
  // `react-split-pane@next`. ~ RM
  // TODO: Implement split-pane solution? ~ RM
  useEffect(() => {
    const panelLayers = document.getElementById('panel-layers')
    const splitPane = panelLayers.children[1].firstElementChild
    const pane1 = splitPane.children[0]
    const divider = splitPane.children[1]

    divider.onmouseenter = () => setIsNotDraggable(true)
    divider.onmouseleave = () => {
      // Ex: 'calc(25% - 0.25px)'
      const widthString = pane1.style.width
      const start = widthString.indexOf('(') + 1
      const end = widthString.indexOf('%')
      const num = Number(widthString.slice(start, end))
      const size = num < 75 ? String(num) + '%' : '75%'
      setPane1Size(size)
      setIsNotDraggable(false)
    }

    // TEMP: Just until `react-split-pane@next` components accept styling. ~ RM
    divider.style = `
      background-color: transparent;
      background-image: linear-gradient(
        to right,transparent,
        rgba(0,0,0,0.05),
        rgba(0,0,0,0.15),
        rgba(0,0,0,0.25),
        rgba(0,0,0,0.35),
        black,
        rgba(0,0,0,0.35),
        rgba(0,0,0,0.25),
        rgba(0,0,0,0.15),
        rgba(0,0,0,0.05),
        transparent
      );
      border: none;
      margin: 0;
      margin-left: -0.5rem;
      opacity: 1;
      width: 1rem;
    `
  }, [])

  return (
    <Panel
      height={200}
      id='panel-layers'
      isNotDraggable={isNotDraggable}
      width={800}
      {...props}
    >
      {/* TEMP/BUG: The arrays are to prevent: `Failed prop type: Invalid prop
        `children` of type `object` supplied to `SplitPane`, expected an array.`
        Will probably get fixed as new version of `react-split-pane` progresses.
        ~ RM
      */}
      <SplitPane split='vertical' id='test2'>
        {[
          <Pane initialSize={pane1Size} key='1' minSize='25%'>
            {[<SubpanelLayers key='1' />]}
          </Pane>,
          <Pane key='2' minSize='25%'>
            {[<SubpanelLayer key='1' />]}
          </Pane>
        ]}
      </SplitPane>
    </Panel>
  )
}

export default PanelLayers
