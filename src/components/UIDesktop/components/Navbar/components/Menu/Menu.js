import { useStateValue } from 'src/services/context'

// TODO: Mouseover of profile avatar renders profile preview like gmail. ~ RM
const Menu = props => {
  const [{ user }, dispatch] = useStateValue()
  const [userAlias, setUserAlias] = useState(null)

  useEffect(() => {
    user && user.once(current => {
      setUserAlias(current.alias)
    })
  }, [user])

  return (
    <Wrapper>
      <Link
        className='fab fa-github'
        href='https://github.com/rmorantes/maptivist'
      />
      <Button className='fas fa-globe' onClick={() => alert('Feature pending!')} />
      <Button className='fas fa-phone' onClick={() => alert('Feature pending!')} />

      {user ? (
        <ButtonSignInSignOut onClick={() => {
          user.leave()
          dispatch({ type: 'AUTH_SET_USER', user: null })
        }}>
          <IconProfile className='fas fa-user-alt' />
          Sign Out
        </ButtonSignInSignOut>
      ) : (
        <ButtonSignInSignOut onClick={() => props.setIsSigningIn(true)}>
          <IconProfile className='fas fa-user-alt' />
          Sign In
        </ButtonSignInSignOut>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
`

const Link = styled.a`
  margin-left: 1rem;
`

const Button = styled.button`
  cursor: pointer;
  margin-left: 1rem;
`

const ButtonSignInSignOut = styled.div`
  cursor: pointer;
  margin-left: 3rem;
`

const IconProfile = styled.i`
  cursor: pointer;
  margin-right: 0.5rem;
`

export default Menu
