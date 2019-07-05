import styled from 'styled-components'

const NavbarBottom = props => {
  const buttons = [
    {icon: 'fas fa-users', label: 'team' },
    {icon: 'fas fa-microphone', label: 'audio'},
    {icon: 'fas fa-comment', label: 'message'},
    {icon: 'fas fa-camera', label: 'camera'},
    {icon: 'fas fa-pen', label: 'notes'}
  ]

  return (
    <Wrapper>
      <BorderTop/>

      {buttons.map((button, i) => (
        <Button
          className={button.icon}
          isActive={button.label === props.activeTab}
          key={i}
          onClick={() => props.setActiveTab(
            button.label === props.activeTab ? null : button.label
          )}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  align-items: center;
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
    rgba(0, 0, 0, 0 .65),
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
  border: none;
  border-radius: 50%;
  font-size: 1.25rem;
  height: 2.5rem;
  width: 2.5rem;
  z-index: 1;
  ${props => props.isActive ? css`
    background: white;
    box-shadow: 0 0 0.5rem 0 white;
    color: black;
  ` : css`
    background: black;
    color: white;
  `};
`

export default NavbarBottom
