const Header = props => (
  <Wrapper
    isHovered={props.isHovered}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
  >
    {props.isHovered && (
      <Button
        className='fas fa-bars'
        onClick={() => alert('Feature pending!')}
        type='options'
      />
    )}

    <Heading> {props.heading} </Heading>

    {props.isHovered && (
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
    )}
  </Wrapper>
)

const Wrapper = styled.div`
  align-items: center;
  background-color: ${props => (
    props.isHovered ? 'black' : 'rgba(0, 0, 0, 0.5)'
  )};
  color: white;
  display: flex;
  height: 2rem;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  right: 0.25rem;
  width: 5rem;
`

const Button = styled.button`
  border-radius: 50%;
  color: white;
  cursor: pointer;
  height: 1.5rem;
  line-height: 1.5rem;
  width: 1.5rem;
  ${props => props.type === 'options' && css`
    left: 0.25rem;
    position: absolute;
  `}
`

const Heading = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`

export default Header
