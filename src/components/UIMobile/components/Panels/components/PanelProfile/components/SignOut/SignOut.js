import { useStateValue } from 'src/services/context'

const SignOut = () => {
  const [{ user }, dispatch] = useStateValue()

  return (
    <Wrapper onClick={() => {
      user.leave()
      dispatch({type: 'AUTH_SET_USER', user: null})
    }}>
      <Icon className='fas fa-user-alt'/>
      Sign Out
    </Wrapper>
  )
}

const Wrapper = styled.button`
  background: black;
  border-radius: 1rem;
  margin: 2rem auto 0rem;
  padding: 0.5rem 1rem;
  width: fit-content;
`

const Icon = styled.i`
  margin-right: 0.5rem;
`

export default SignOut
