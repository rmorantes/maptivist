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
  background: black;
  clip-path: polygon(
    calc(100% - var(--dimension)) 0,
    100% 50%,
    calc(100% - var(--dimension)) 100%,
    var(--dimension) 100%,
    0 50%,
    var(--dimension) 0
  );
  font-size: 1.25rem;
  padding: 0.625rem var(--dimension) 0.25rem;
`

export default Button
