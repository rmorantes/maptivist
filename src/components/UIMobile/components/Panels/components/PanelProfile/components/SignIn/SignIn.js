import Button from './components/Button'
import Heading from './components/Heading'
import Input from './components/Input'
// import { useStateValue } from 'src/services/context'
import withSignInLogic from 'src/services/withSignInLogic'

// TODO: Load icon/experience while authenticating. ~ RM
// TODO: Break this component up. ~ RM
const SignIn = props => (
  <Form>
    <Heading> MAPTIVIST </Heading>

    <SecurityNotice>
      <SecurityNoticeHeader> SECURITY NOTICE </SecurityNoticeHeader>
      Maptivist is a work in progress and may be unsecure! Do not reuse important passwords (bank, email, etc) or use it to share sensitive information.
      {props.error && <Error> {props.error} </Error>}
    </SecurityNotice>

    <Input
      isValid={props.isSigningUp ? props.validateAlias() : null}
      onChange={props.onChangeAlias}
      type='alias'
      value={props.valueAlias}
    />

    <InputMod
      isValid={props.isSigningUp ? props.validatePassword() : null}
      onChange={props.onChangePassword}
      type='password'
      value={props.valuePassword}
    />

    <Buttons>
      <ButtonSubmit
        isFaded={props.isSigningUp}
        isPulsing={
          !props.isSigningUp &&
          props.validateAlias() &&
          props.validatePassword()
        }
        onClick={props.onClickSignIn}
        type='button'
      >
        Sign In
      </ButtonSubmit>

      <Or> or </Or>

      <ButtonSubmit
        isFaded={!props.isSigningUp}
        isPulsing={
          props.isSigningUp &&
          props.validateAlias()
          && props.validatePassword()
        }
        onClick={props.onClickSignUp}
        type='button'
      >
        Sign Up
      </ButtonSubmit>
    </Buttons>

    <ButtonTemporaryAccount
      onClick={props.onClickTemporaryAccount}
      type='button'
    >
      Continue with <br/> Temporary Account
    </ButtonTemporaryAccount>
  </Form>
)

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const Error = styled.p`
  color: red;
  margin-top: 1rem;
`

const SecurityNotice = styled.div`
  background: white;
  border-radius: 0.5rem;
  color: red;
  margin: 2rem 1rem 1rem 1rem;
  padding: 0.5rem;
`

const SecurityNoticeHeader = styled.span`
  background-color: red;
  border-radius: 0.5rem;
  line-height: 1.25rem;
  margin-right: 0.25rem;
  padding-top: 0.15rem;
  padding-left: 0.25rem;
`

const InputMod = styled(Input)`
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
`

const ButtonTemporaryAccount = styled(Button)`
  height: 3.25rem;
  margin-top: 1rem;
  width: calc(100% - 1rem);
`

export default withSignInLogic(SignIn)
