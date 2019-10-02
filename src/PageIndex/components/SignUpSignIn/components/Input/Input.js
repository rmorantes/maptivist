import Input_OverlayTriangle from './components/OverlayTriangle'
import OverlayRectangle from 'src/components/OverlayRectangle'

const SignUpSignIn_Input = props => (
  <OverlayRectangleMod
    className={props.className}
    hasBorderBottom
    hasBorderTop
  >
    <Input_OverlayTriangleLeft/>

    <IconType className={
      props.type === 'alias'  ? 'fas fa-user' :
      props.type === 'password' && 'fas fa-lock'
    }/>

    <Field
      onChange={props.onChange}
      placeholder={
        props.type === 'alias'  ? 'Alias' :
        props.type === 'password' && 'Password'
      }
      type={props.type}
      value={props.value}
    />

    {typeof props.isValid === 'boolean' && props.value &&
      <IconValidity
        className={props.isValid ? 'fas fa-check' : 'fas fa-times'}
        isValid={props.isValid}
      />
    }

    <OverlayTriangleRight/>
  </OverlayRectangleMod>
)

const OverlayRectangleMod = styled(OverlayRectangle)`
  --height: 2.25rem;
  display: flex;
  height: var(--height);
  width: calc(100% - 5.5rem);
`

const Field = styled.input`
  flex: 1;
  padding-top: 0.25rem;
  text-align: left;
  width: 100%;
`

const IconType = styled.i`
  background: black;
  line-height: var(--height);
  margin-right: 0.5rem;
  text-align: center;
  width: var(--height);
`

const IconValidity = styled.i`
  color: ${props => props.isValid ? '#00ff00' : 'red'};
  font-size: 1.25rem;
  line-height: var(--height);
  margin-left: 0.5rem;
`

const Input_OverlayTriangleLeft = styled(Input_OverlayTriangle)`
  left: 0;
  margin-left: calc(-1 * var(--height));
  position: absolute;
  top: 0;
  width: var(--height);
`

const OverlayTriangleRight = styled(Input_OverlayTriangle)`
  margin-right: calc(-1 * var(--height));
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(180deg);
  width: var(--height);
`

export default SignUpSignIn_Input
