import Menu from './components/Menu/Menu'
import PromptSignIn from './components/PromptSignIn'
import SearchBar from './components/SearchBar'

const Navbar = () => {
  const [isSigningIn, setIsSigningIn] = useState(false)
  const stopSigningIn = () => setIsSigningIn(false)

  return (<>
    <Wrapper>
      <Content>
        <SearchBar/>
        <Menu setIsSigningIn={setIsSigningIn}/>
      </Content>

      <BorderBottom/>
    </Wrapper>

    {isSigningIn && <PromptSignIn onClose={stopSigningIn}/>}
  </>)
}

const Wrapper = styled.nav`
  background-color: var(--themeOverlayBackgroundColor);
  backdrop-filter: blur(2px);
  display: flex;
  height: 3rem;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transition: background 0.5s;
  width: 100%;
  z-index: 1;
`

const Content = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  max-width: 1012px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`

const BorderBottom = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, .35)
  );
  border-bottom: 0.125rem black solid;
  bottom: 0;
  height: 0.5rem;
  left: 0;
  position: absolute;
  width: 100%;
`

export default Navbar
