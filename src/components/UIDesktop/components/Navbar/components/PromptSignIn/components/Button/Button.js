const Button = props => (
  <Wrapper
    className={props.className}
    onClick={props.onClick}
    type={props.type}
  >
    {props.children}
  </Wrapper>
)

const Wrapper = styled.button`
  --dimension: 2.25rem;
  background-color: black;
  clip-path: polygon(
    calc(100% - var(--dimension)) 0,
    100% 50%,
    calc(100% - var(--dimension)) 100%,
    var(--dimension) 100%,
    0 50%,
    var(--dimension) 0
  );
  padding: 0.625rem var(--dimension) 0.25rem;
`

export default Button
