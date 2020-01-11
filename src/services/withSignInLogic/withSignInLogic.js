import { useStateValue } from 'src/services/context'
import validateAlias from './services/validateAlias'
import validatePassword from './services/validatePassword'

// TODO: Integrate sign in logic with new db. ~ RM
// QUESTION: For how long should temporary users persist? ~ RM
const withSignInLogic = BaseComponent => props => {
  const [error, setError] = useState()
  const [isSigningUp, setIsSigningUp] = useState(false)
  const [valueAlias, setValueAlias] = useState('')
  const [valuePassword, setValuePassword] = useState('')
  const [{ gun }, dispatch] = useStateValue()
  const user = gun.user()

  const handleSignUp = (alias, password) => {
    // Check to ensure alias is unique.
    if (alias.length > 5 && password.length > 5) {
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
          setError('* Alias already in use!')
          setValueAlias('')
          setValuePassword('')
        }
      })
    } else {
      setError('* Alias and password must be at least 6 characters long!')
    }
  }

  const onAuthenticate = response => {
    if (!response.err) {
      props.onClose && props.onClose()
      // TODO: For temporary users, setIsSigningUp(true) will not take effect by
      // the time this line executes, hence the slice hack. Refactor associated
      // logic with useEffect(). ~ RM
      if (isSigningUp || user.is.alias.slice(0, 9) === 'Anonymous') {
        const group = gun.get('defaultSettings').get('group')
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

  const onChangeAlias = e => {
    setError()
    setValueAlias(e.target.value)
  }

  const onChangePassword = e => {
    setError()
    setValuePassword(e.target.value)
  }

  const onClickSignIn = () => {
    if (!isSigningUp) {
      if (!valueAlias || !valuePassword) {
        setError('* Invalid alias or password')
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

  return (
    <BaseComponent
      isSigningUp={isSigningUp}
      onChangeAlias={onChangeAlias}
      onChangePassword={onChangePassword}
      onClickSignIn={onClickSignIn}
      onClickSignUp={onClickSignUp}
      onClickTemporaryAccount={onClickTemporaryAccount}
      validateAlias={() => validateAlias(valueAlias)}
      validatePassword={() => validatePassword(valuePassword)}
      valueAlias={valueAlias}
      valuePassword={valuePassword}
      {...props}
    />
  )
}

export default withSignInLogic
