import { useStateValue } from 'src/services/context'

// TODO: Move Gun logic and state to PanelLayers. ~ RM
const Layer = props => {
  const [isSelected, setIsSelected] = useState(false)
  const [layerCollections, setLayerCollections] = useState([])
  const [isViewing, setIsViewing] = useState(false)
  const [{ gun }] = useStateValue()
  const toggleIsSelected = () => setIsSelected(prevState => !prevState)

  useEffect(() => {
    const layerCollectionsId = props.layerCollection.layerCollections
    if (layerCollectionsId) {
      gun.get(layerCollectionsId).map().once(layerCollection => {
        setLayerCollections(prevState => {
          prevState.push(layerCollection)
          return prevState
        })
      })
    }
  }, [])

  const renderChildren = () => {
    const children = []
    layerCollections.forEach((layerCollection, i) => (
      children.push(
        <Layer key={i} layerCollection={layerCollection} depth={props.depth + 1} />
      )
    ))
    return children
  }

  const onClickName = () => setIsViewing(prevState => !prevState)
  const isRenderingChildren = (
    isSelected && (
      props.layerCollection.layerCollections ||
      props.layerCollection.layers
    )
  )

  return (
    <>
      <Wrapper isViewing={isViewing}>
        {props.layerCollection.layerCollections ? (
          <ButtonIconFolder
            depth={props.depth}
            onClick={toggleIsSelected}
          >
            <Image className='fas fa-folder' />
            <Arrow isSelected={isSelected} />
          </ButtonIconFolder>
        ) : (
          <ButtonIconLayer
            depth={props.depth}
            isGovernment={props.layerCollection.path.includes('Government')}
            onClick={toggleIsSelected}
          />
        )}
        <ButtonName
          isLayer={!props.layerCollection.layerCollections}
          onClick={onClickName}
        >
          {props.layerCollection.name || props.layer.name}
        </ButtonName>
      </Wrapper>
      {isRenderingChildren && renderChildren()}
    </>
  )
}

const Wrapper = styled.li`
  align-items: center;
  background: ${props => (
    props.isViewing && 'rgba(255,255,255,0.25)'
  )};
  display: flex;
  list-style-type: none;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
`

const ButtonIconFolder = styled.button`
  cursor: pointer;
  margin-left: ${props => (
    props.depth ? String(props.depth * 2 + 0.5) + 'rem' : '0.5rem'
  )};
  position: relative;
`

const Arrow = styled.div`
  background: #ccc;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  height: 2rem;
  left: 0;
  position: absolute;
  top: 0;
  transform: ${props => (
    props.isSelected ? 'rotate(90deg)' : 'rotate(45deg)'
    )};
  width: 2rem;
  z-index: -1;
  -webkit-mask-image: radial-gradient(
    circle at 50% 50%,transparent 65%,black 75%
  );
`

const Image = styled.i`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  color: #ccc;
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  min-width: 2rem;
  text-align: center;
  width: 1rem;
`

const ButtonIconLayer = styled.i`
  background-color: black;
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  height: 2rem;
  line-height: 2rem;
  min-width: 2rem;
  margin-left: ${props => (
    props.depth ? String(props.depth * 2 + 0.5) + 'rem' : '0.5rem'
  )};
  text-align: center;
  width: 2rem;
  ${props => props.isGovernment ? css`
    background: yellow;
    box-shadow: 0 0 0 0.5rem red inset;
    ` : css`
    background: white;
    box-shadow: 0 0 0 0.5rem black inset;
    `
  }
`

const ButtonName = styled.button`
  color: #ccc;
  cursor: pointer;
  line-height: 2rem;
  margin-left: 1rem;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

export default Layer
