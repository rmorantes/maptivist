const OverlayTriangle = props => (
  <Wrapper className={props.className}>
    <BorderRight/>
    <BorderLeft/>
  </Wrapper>
)

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.75);
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
  height: 100%;
  width: 100%;
  position: relative;
`

const BorderRight = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, .65),
    rgba(0, 0, 0, 0)
  );
  border-top: 0.125rem black solid;
  height: 0.5rem;
  position: absolute;
  top: 0;
  transform: rotate(-26deg);
  top: 0.4rem;
  width: 126%;
`

const BorderLeft = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(0,0,0,.65),
    rgba(0,0,0,0)
  );
  border-bottom: 0.125rem black solid;
  bottom: 0.4rem;
  height: 0.5rem;
  position: absolute;
  transform: rotate(26deg);
  width: 126%;
`


export default OverlayTriangle
