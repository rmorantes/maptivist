import { useStateValue } from 'src/services/context'

const Navbar = props => {
  const [{ user }] = useStateValue()
  const buttons = [
    {icon: 'fas fa-comment', label: 'comms'},
    {icon: 'fas fa-users', label: 'groups' },
    {icon: 'fas fa-user', label: 'profile'},
    {icon: 'fas fa-file', label: 'files'},
    {icon: 'fas fa-flag', label: 'organizations'}
  ]

  return (
    <Wrapper>
      <BorderTop/>

      {buttons.map((button, i) => {
        const isDisabled = !user && button.label !== 'profile'

        return (
          <Button
            className={button.icon}
            isActive={button.label === props.activePanel}
            isDisabled={isDisabled}
            key={i}
            onClick={isDisabled ? undefined : (
              () => props.setActivePanel(
                button.label === props.activePanel ? null : button.label
              )
            )}
          />
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: var(--themeOverlayBackgroundColor);
  bottom: 0;
  display: flex;
  height: 3.5rem;
  justify-content: space-around;
  padding-top: 0.5rem;
  position: fixed;
  width: 100vw;
`

const BorderTop = styled.div`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, .35),
    rgba(0, 0, 0, 0)
  );
  border-top: 0.125rem black solid;
  height: 0.5rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const Button = styled.button`
  border-radius: 50%;
  font-size: 1.25rem;
  height: 2.5rem;
  width: 2.5rem;
  z-index: 1;
  ${props => props.isActive ? css`
    background-color: white;
    box-shadow: 0 0 0.5rem 0 white;
    color: black;
  ` : css`
    background-color: black;
    color: ${props => props.isDisabled ? 'grey': 'white'};
  `};
`

export default Navbar
