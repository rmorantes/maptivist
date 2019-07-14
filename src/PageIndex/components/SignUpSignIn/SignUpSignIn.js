import Button from 'src/components/Button'
import SignUpSignIn_Heading from './components/Heading'
import SignUpSignIn_Input from './components/Input'

const PageIndex_SignUpSignIn = props => {
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [valuePassword, setValuePassword] = useState('')
  const [valueUsername, setValueUsername] = useState('')

  const onClickSignIn = () => {
    if (!isSigningUp) {
      console.log('Attempting sign in')
    } else {
      setValuePassword('')
      setValueUsername('')
      setIsSigningUp(false)
    }
  }

  const onClickSignUp = () => {
    if (isSigningUp) {
      console.log('Attempting sign up')
    } else {
      setValuePassword('')
      setValueUsername('')
      setIsSigningUp(true)
    }
  }

  const onChangePassword = e => {
    setValuePassword(e.target.value)
  }

  const onChangeUsername = e => {
    setValueUsername(e.target.value)
  }

  const validatePassword = () => {
    let isValid = false
    if (valuePassword.length > 5) {
      isValid = true
    }
    return isValid
  }

  const validateUsername = () => {
    let isValid = false
    if (valueUsername.length > 5) {
      isValid = true
    }
    return isValid
  }

  return (
    <Wrapper>
      <SignUpSignIn_Heading> MAPTIVIST </SignUpSignIn_Heading>

      <Form>
        <SignUpSignIn_Input
          isValid={isSigningUp ? validateUsername() : null}
          onChange={onChangeUsername}
          type='alias'
          value={valueUsername}
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
              validateUsername() &&
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
              validateUsername()
              && validatePassword()
            }
            onClick={onClickSignUp}
            type='button'
          >
            Sign Up
          </ButtonSubmit>
        </Buttons>
        <ButtonTemporaryAccount>
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

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  max-width: 30rem;
  width: 100%;
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
