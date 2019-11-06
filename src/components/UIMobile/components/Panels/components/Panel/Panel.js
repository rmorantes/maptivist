const Panel = props => {
  const [isSticky, setIsSticky] = useState(false)
  const isEventListenerAdded = useRef(false)
  const scrollContainerRef = useRef()
  const scrollContentRef = useRef()

  const onTouchEnd = () => {
    scrollContainerRef.current.classList.remove('hasPointerEvents')
  }

  const onTouchStart = () => {
    scrollContainerRef.current.classList.add('hasPointerEvents')
  }

  useEffect(() => {
    const style = (
      scrollContentRef.current.currentStyle ||
      window.getComputedStyle(scrollContentRef.current)
    )
    const marginTop = style['margin-top'].slice(0, -2)

    const onScroll = () => {
      if (scrollContainerRef.current.scrollTop >= marginTop - 18) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    if (!isEventListenerAdded.current) {
      isEventListenerAdded.current = true
      scrollContainerRef.current.addEventListener('scroll', onScroll)
      scrollContainerRef.current.scrollBy(0, 200)
    }
  })

  return (
    <Container ref={scrollContainerRef} id='scroll-me'>
      <Content
        onTouchEnd={onTouchEnd}
        onTouchStart={onTouchStart}
        ref={scrollContentRef}
      >
        <BorderTop/>

        <Bar ref={scrollContentRef}>
          <Label isSticky={isSticky}>
            {props.label}
          </Label>
        </Bar>

        {props.children}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  left: 0;
  height: calc(100vh - 3.5rem);
  overflow: hidden scroll;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  &.hasPointerEvents {
    pointer-events: all;
  }
`

const Content = styled.div`
  backdrop-filter: blur(2px);
  background-color: var(--themeOverlayBackgroundColor);
  display: flex;
  flex-direction: column;
  margin-top: calc(100vh - 4.5rem);
  min-height: calc(100vh - 4.625rem);
  pointer-events: auto !important;
  position: relative;
  width: 100%;
`

const BorderTop = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0)
  );
  border-top: 0.125rem black solid;
  height: 0.5rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Bar = styled.div`
  display: flex;
  justify-content: center;
  left: 0;
  margin-top: -1.125rem;
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 4;
`

const Label = styled.button`
  --dimension: calc(
    var(--padding) +
    var(--paddingTopAldrich) +
    var(--fontSize)
  );
  --fontSize: 1.5rem;
  --padding: 0.25rem;
  ${'' /* NOTE: To compensate for Aldrich font's extra bottom spacing. */}
  --paddingTopAldrich: 0.5rem;
  background-color: black;
  clip-path: polygon(
    calc(100% - var(--dimension)) 0,
    100% 50%,
    calc(100% - var(--dimension)) 100%,
    var(--dimension) 100%,
    0 50%,
    var(--dimension) 0
    );
  color: white;
  display: inline;
  font-size: var(--fontSize);
  line-height: var(--fontSize);
  margin: auto;
  min-width: ${props => props.isSticky ? '123vw' : 0};
  padding: var(--paddingTopAldrich) var(--dimension) var(--padding);
  transition-duration: 0.2s;
  transition-property: min-width;
  transition-timing-function: linear;
`

export default Panel
