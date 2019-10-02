import Button from 'src/components/Button'
import SignUpSignIn_Heading from './components/Heading'
import SignUpSignIn_Input from './components/Input'
import { useStateValue } from 'src/services/context'

// TODO: Load icon/experience while authenticating. ~ RM
// TODO: Sign out. ~ RM
// TODO: Offline/online tracking. ~ RM
// TODO: Users cannot double sign in? Or they are at least notified? ~ RM
// QUESTION: For how long should temporary users persist? ~ RM
const PageIndex_SignUpSignIn = props => {
  const [error, setError] = useState()
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [valueAlias, setValueAlias] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [{ gun }, dispatch] = useStateValue()
  const user = gun.user()

  const handleSignUp = (alias, password) => {
    // Check to ensure alias is unique.
    gun.get(`~@` + alias).once(response => {
      if (!response) {
        user.create(alias, password, response => {
          if (response.ok === 0) {
            // Newly created users must then be authenticated to set fields.
            user.auth(alias, password, onAuthenticate)
          } else {
            setError(response.err)
            setValueAlias('')
            setValuePassword('')
          }
        })
      } else {
        setError('Alias already in use!')
        setValueAlias('')
        setValuePassword('')
      }
    })
  }

  const onAuthenticate = response => {
    if (!response.err) {
      // TODO: For temporary users, setIsSigningUp(true) will not take effect by
      // the time this line executes, hence the slice hack. Refactor associated
      // logic with useEffect(). ~ RM
      if (isSigningUp || user.is.alias.slice(0, 9) === 'Anonymous') {
        // TEMP: For now, all users automatically join this particular group,
        // pending a UI for group joining, creation, and administration. ~ RM
        const group = gun.get('k186og53phEOMTGOOCQR')
        gun.get('groups').set(group)
        group.get('members').set(gun.user(response.pub))
        user.get('groups').set(group)
        user.get('activeGroup').put(group)
      }

      dispatch({
        type: 'AUTH_SET_USER',
        user: user
      })
    } else {
      setError(response.err)
      setValueAlias('')
      setValuePassword('')
    }
  }

  const onChangePassword = e => {
    setError()
    setValuePassword(e.target.value)
  }

  const onChangeAlias = e => {
    setError()
    setValueAlias(e.target.value)
  }

  const onClickSignIn = () => {
    if (!isSigningUp) {
      if (!valueAlias || !valuePassword) {
        setError('Invalid alias or password')
      } else {
        user.auth(valueAlias, valuePassword, onAuthenticate)
      }
    } else {
      setIsSigningUp(false)
      setValueAlias('')
      setValuePassword('')
    }
  }

  const onClickSignUp = () => {
    if (isSigningUp) {
      handleSignUp(valueAlias, valuePassword)
    } else {
      setError()
      setIsSigningUp(true)
      setValueAlias('')
      setValuePassword('')
    }
  }

  const onClickTemporaryAccount = () => {
    handleSignUp('Anonymous' + String(Date.now()).slice(5), '111111')
  }

  const validateAlias = () => {
    let isValid = false
    if (valueAlias.length > 5) {
      isValid = true
    }
    return isValid
  }

  const validatePassword = () => {
    let isValid = false
    if (valuePassword.length > 5) {
      isValid = true
    }
    return isValid
  }

  return (
    <Wrapper>
      <SignUpSignIn_HeadingMod> MAPTIVIST </SignUpSignIn_HeadingMod>
      <Disclaimer> Maptivist is a work in progress and has yet to be optimized for desktop and tablet screen resolutions. </Disclaimer>

      <Form>
        {error &&
          <Error> {error} </Error>
        }

        <SecurityNotice>
          <SecurityNoticeHeader> SECURITY NOTICE </SecurityNoticeHeader>
          Maptivist is a work in progress and may be unsecure! Do not reuse important passwords (bank, email, etc) or use it to share sensitive information.
        </SecurityNotice>

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

          <Or> or </Or>

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
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`

const SignUpSignIn_HeadingMod = styled(SignUpSignIn_Heading)`
  margin-top: 1rem;
`

const Disclaimer = styled.h3`
  color: black;
  font-size: 0.8rem;
  padding: 0.5rem 0.5rem 0.5rem;
  text-shadow: 0 0 0.25rem white;
`

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 30rem;
  width: 100%;
`

const Error = styled.p`
  color: red;
`

const SecurityNotice = styled.p`
  color: red;
  padding: 0 2.75rem 0.5rem 2.75rem;
  text-shadow: 0 0 0.25rem white;
`

const SecurityNoticeHeader = styled.span`
  background: red;
  padding-top: 0.15rem;
  padding-left: 0.25rem;
  margin-right: 0.25rem;
  line-height: 1.25rem;
  border-radius: 0.5rem;
`

const SignUpSignIn_InputMod = styled(SignUpSignIn_Input)`
  margin-top: 1rem;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
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
  opacity: ${props => props.isFaded ? 0.25 : 1};
`

const Or = styled.p`
  color: black;
  line-height: 2.25rem;
  text-shadow: 0 0 0.25rem white;
`

const ButtonTemporaryAccount = styled(Button)`
  height: 3.25rem;
  margin-top: 5rem;
  width: calc(100% - 1rem);
`

export default PageIndex_SignUpSignIn
