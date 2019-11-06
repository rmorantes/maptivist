const Header = props => (
  <Wrapper isVisible={props.isVisible}>
    <Button
      className='fas fa-bars'
      onClick={() => alert('Feature pending!')}
      type='options'
    />

    <Heading> {props.heading} </Heading>

    <Buttons>
      <Button
        className='fa fa-minus'
        onClick={() => alert('Feature pending!')}
        type='minimize'
      />
      <Button
        className='far fa-square'
        onClick={() => alert('Feature pending!')}
        type='maximize'
      />
      <Button
        className='fas fa-times'
        onClick={() => alert('Feature pending!')}
        type='close'
      />
    </Buttons>
  </Wrapper>
)

const Wrapper = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.5s;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
  width: 5rem;
`

const Button = styled.button`
  border-radius: 50%;
  color: white;
  height: 1.5rem;
  width: 1.5rem;
  ${props => props.type === 'options' && css`
    left: 0;
    position: absolute;
  `}
`

const Heading = styled.p`
  font-size: 1rem;
  font-weight: bold;
`

export default Header
