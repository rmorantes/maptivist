import Corner from './components/Corner'
import Header from './components/Header'
import { Rnd as ResizeableAndDraggable } from 'react-rnd'

const Panel = props => {
  const [height, setHeight] = useState(props.height || 400)
  const [isHoveringHeader, setIsHoveringHeader] = useState(false)
  const [width, setWidth] = useState(props.width || 400)
  const [windowDimensions, setWindowDimensions] = useState(props.windowDimensions)
  const [x, setX] = useState(props.x || 0)
  const [y, setY] = useState(props.y || 0)
  const ref = useRef()

  function update(windowWidth, windowHeight) {
    if (height > windowHeight) {
      setHeight(windowHeight)
    }
    if (width > windowWidth) {
      setWidth(windowWidth)
    }
    if (x + width > windowWidth) {
      setX(windowWidth - width > 0 ? windowWidth - width : 0)
    }
    if (y + height > windowHeight - 48) {
      setY((windowHeight - height - 48) > 0 ? (windowHeight - height - 48) : 0)
    }
  }

  useEffect(() => {
    const newWidth = props.windowDimensions.width !== windowDimensions.width
    const newHeight = props.windowDimensions.height !== windowDimensions.height
    if (newWidth || newHeight) {
      update(props.windowDimensions.width, props.windowDimensions.height)
    }
  })

  return (
    <ResizeableAndDraggable
      bounds='parent'
      disableDragging={props.isNotDraggable}
      id={props.id}
      minHeight='200'
      minWidth='200'
      onDragStop={(e, d) => {
        setX(d.x)
        setY(d.y)
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setHeight(parseInt(ref.style.height))
        setWidth(parseInt(ref.style.width))
        setX(position.x)
        setY(position.y)
      }}
      position={{ x: x, y: y }}
      ref={ref}
      size={{ width: width, height: height }}
      style={{
        backdropFilter: 'blur(2px)',
        backgroundColor: 'var(--themeOverlayBackgroundColor)',
        border: '0.125rem solid black',
        boxShadow: '0 0 0.5rem black inset',
        fontSize: '3rem',
        height: '100%',
        pointerEvents: 'all',
        width: '100%'
      }}
    >
      <Header
        heading={props.heading}
        isHovered={isHoveringHeader}
        onMouseEnter={() => setIsHoveringHeader(true)}
        onMouseLeave={() => setIsHoveringHeader(false)}
      />
      <Scrollable>
        {props.children}
      </Scrollable>
      {!isHoveringHeader && (
        <>
          <Corner topLeft />
          <Corner topRight />
        </>
      )}
      <Corner bottomLeft />
      <Corner bottomRight />
    </ResizeableAndDraggable>
  )
}

const Scrollable = styled.div`
  height: calc(100% - 2rem);
  overflow: hidden scroll;
  position: relative;
  width: 100%;
  z-index: -1;
`

export default Panel
