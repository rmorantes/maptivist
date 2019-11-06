const Prompt = props => (
  <Wrapper>
    <Pane>
      <ButtonClose
        className='fas fa-times'
        onClick={() => props.onClose()}
      />
      {props.children}
    </Pane>
  </Wrapper>
)

const Wrapper = styled.div`
  align-items: center;
  backdrop-filter: blur(2px);
  background: rgba(0,0,0, 0.65);
  border-bottom: 0.125rem solid black;
  border-left: 0.125rem solid black;
  border-right: 0.125rem solid black;
  box-shadow: 0 0 0.5rem black inset;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`

const Pane = styled.div`
  background: grey;
  border: solid 0.125rem black;
  max-width: 33rem;
  padding: 2rem;
  position: relative;
  width: 100%;
`

const ButtonClose = styled.button`
  color: black;
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
`

export default Prompt
