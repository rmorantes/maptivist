import OverlayRectangle from 'src/components/OverlayRectangle'

const Heading = props => (
  <OverlayRectangleMod hasBorderBottom hasBorderTop>
    <TextForeground> {props.children} </TextForeground>
    <TextBackground> {props.children} </TextBackground>
  </OverlayRectangleMod>
)

const OverlayRectangleMod = styled(OverlayRectangle)`
  align-items: center;
  display: flex;
  height: 30vw;
  justify-content: center;
  position: relative;
  width: 100%;
`

const TextForeground = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 15vw;
  font-weight: 500;
  letter-spacing: 2vw;
  margin: 0;
  position: absolute;
  text-align: center;
  -webkit-text-stroke-color: transparent;
`

const TextBackground = styled(TextForeground)`
  @keyframes gradient {
    from {background-position: right;}
    to {background-position: left;}
  }
  animation: gradient 4s linear infinite;
  background: linear-gradient(
    to left,
    white,
    black,
    white,
    black,
    white
  );
  background-size: 200% auto;
  color: black;
  -webkit-background-clip: text;
  -webkit-text-stroke-width: 1.5vw;
`

export default Heading
