const Preloader = () => (
  <Wrapper>
    <Heading> MAPTIVIST </Heading>
  </Wrapper>
)

const Wrapper = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  height: calc(100vh);
  justify-content: center;
  outline: black solid 8px;
  width: 100%;
`

const Heading = styled.h1`
  @keyframes gradient {
    from {background-position: right;}
    to {background-position: left;}
  }

  animation-duration: 1.5s;
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

  @media (min-width: 1000px) {
    font-size: 7.5rem;
    letter-spacing: 1.25rem;
    -webkit-text-stroke-width: 0.625rem;
  }
`

export default Preloader
