const Heading = props => (
  <Wrapper> {props.children} </Wrapper>
)

const Wrapper = styled.h1`
  @keyframes gradient {
    from {background-position: right;}
    to {background-position: left;}
  }

  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-name: gradient;
  animation-timing-function: linear;
  background-image: linear-gradient(
    to left,
    white,
    black,
    white,
    black,
    white
  );
  background-size: 200% auto;
  color: black;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 13vw;
  font-weight: 500;
  letter-spacing: 2.5vw;
  margin: 0;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 1.5vw;
`

export default Heading
