import Button from 'src/components/Button'
import SignUpSignIn_Heading from './components/Heading'
import SignUpSignIn_Input from './components/Input'
import { useStateValue } from 'src/services/context'

const PageIndex_SignUpSignIn = props => {
  const [error, setError] = useState()
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [valueAlias, setValueAlias] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [{ gun }, dispatch] = useStateValue()
  const user = gun.user()

  const callback = response => {
    const publicKey = response.pub || response.soul && response.soul.slice(1)
    if (publicKey) {
      dispatch({
        type: 'AUTH_SET_USER',
        user: {
          alias: valueAlias,
          publicKey: publicKey
        }
      })
    } else {
      setError(response.err)
      setValuePassword('')
      setValueAlias('')
    }
  }

  const onClickSignIn = () => {
    if (!isSigningUp) {
      user.auth(valueAlias, valuePassword, callback)
    } else {
      setValuePassword('')
      setValueAlias('')
      setIsSigningUp(false)
    }
  }

  const onClickSignUp = () => {
    if (isSigningUp) {
      user.create(valueAlias, valuePassword, callback)
    } else {
      setValuePassword('')
      setValueAlias('')
      setIsSigningUp(true)
    }
  }

  const onClickTemporaryAccount = () => {
    // TEMP: There's probably a better way of generating a temporary alias. ~ RM
    const alias = 'Anonymous' + String(Date.now()).slice(5)
    user.create(alias, '111111', callback)
  }

  const onChangePassword = e => {
    setValuePassword(e.target.value)
    setError()
  }

  const onChangeAlias = e => {
    setValueAlias(e.target.value)
    setError()
  }

  const validatePassword = () => {
    let isValid = false
    if (valuePassword.length > 5) {
      isValid = true
    }
    return isValid
  }

  const validateAlias = () => {
    let isValid = false
    if (valueAlias.length > 5) {
      isValid = true
    }
    return isValid
  }

  return (
    <Wrapper>
      <SignUpSignIn_Heading> MAPTIVIST </SignUpSignIn_Heading>
      <Disclaimer> Maptivist is a work in progress and has yet to be optimized for desktop and tablet screen resolutions </Disclaimer>

      <Form>
        {error &&
          <Error> {error} </Error>
        }

        <SignUpSignIn_Input
          isValid={isSigningUp ? validateAlias() : null}
          onChange={onChangeAlias}
          type='alias'
          value={valueAlias}
        />
        <SignUpSignIn_InputMod
          isValid={isSigningUp ? validatePassword() : null}
          onChange={onChangePassword}
          type='password'
          value={valuePassword}
        />
        <Buttons>
          <ButtonSubmit
            isFaded={isSigningUp}
            isPulsing={
              !isSigningUp &&
              validateAlias() &&
              validatePassword()
            }
            onClick={onClickSignIn}
            type='button'
          >
            Sign In
          </ButtonSubmit>
          <ButtonSubmit
            isFaded={!isSigningUp}
            isPulsing={
              isSigningUp &&
              validateAlias()
              && validatePassword()
            }
            onClick={onClickSignUp}
            type='button'
          >
            Sign Up
          </ButtonSubmit>
        </Buttons>
        <ButtonTemporaryAccount
          onClick={onClickTemporaryAccount}
          type='button'
        >
          Continue with <br/> Temporary Account
        </ButtonTemporaryAccount>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`

const Disclaimer = styled.h3`
  color: black;
  padding: 0.5rem 0.5rem 0.5rem;
  text-shadow: 0 0 0.25rem white;
`

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  max-width: 30rem;
  width: 100%;
`

const Error = styled.p`
  color: red;
`

const SignUpSignIn_InputMod = styled(SignUpSignIn_Input)`
  margin-top: 1rem;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 1rem);
`

const ButtonSubmit = styled(Button)`
  @keyframes pulse {
    from {text-shadow: none;}
    to {text-shadow: 0 0 1rem white, 0 0 1rem white;}
  }
  animation-direction: alternate;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-name: ${props => props.isPulsing ? 'pulse' : 'none'};
  animation-timing-function: linear;
  color: ${props => props.isPulsing ? 'white' : 'grey'};
  height: 2.25rem;
  margin-top: 1rem;
  opacity: ${props => props.isFaded ? 0.25 : 1};
`

const ButtonTemporaryAccount = styled(Button)`
  height: 3.5rem;
  margin-top: 8rem;
  width: calc(100% - 1rem);
`

export default PageIndex_SignUpSignIn
