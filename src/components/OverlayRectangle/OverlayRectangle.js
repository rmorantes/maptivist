const OverlayRectangle = props => (
  <Wrapper className={props.className}>
    {props.hasBorderTop && <BorderTop/>}
    {props.hasBorderBottom && <BorderBottom/>}
    {props.children}
  </Wrapper>
)

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.75);
  height: 100%;
  position: relative;
  width: 100%;
`

const BorderTop = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, .65),
    rgba(0, 0, 0, 0)
  );
  border-top: 0.125rem black solid;
  height: 0.5rem;
  position: absolute;
  top: 0;
  width: 100%;
`

const BorderBottom = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, .65),
    rgba(0, 0, 0, 0)
  );
  border-bottom: 0.125rem black solid;
  bottom: 0;
  height: 0.5rem;
  position: absolute;
  width: 100%;
`

export default OverlayRectangle
