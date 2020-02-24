import Layer from './components/Layer'
import { useStateValue } from 'src/services/context'

// TODO: Move Gun logic and state to PanelLayers. ~ RM
const SubpanelLayers = props => {
  const [{ gun }] = useStateValue()

  const renderLayers = () => {
    const renderedLayers = []
    const group = gun.get('defaultSettings').get('group')
    let i = 1
    // BUG: Should use .once(), but doesn't seem to work. ~ RM
    group.get('layerCollections').map().on(layerCollection => {
      renderedLayers.push(
        <Layer layerCollection={layerCollection} key={i} depth={0} />
      )
      i++
    })
    return renderedLayers
  }

  return (
    <Wrapper>
      {renderLayers()}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(0,0,0,0.25);
  height: 100%;
  overflow-y: scroll;
`

export default SubpanelLayers
