const Corner = props => (
  <Wrapper viewBox='0 0 100 100' {...props}>
    <polygon
      points={
        props.topLeft ? '-5,-5 100,-5 20,20 -5,100' :
        props.topRight ? '100,-5 -5,-5 80,20 100,100' :
        props.bottomLeft ? '-5,100 -5,-5 20,80 100,100' :
        props.bottomRight && '100,100 -5,100 80,80 100,-5'
      }
      fill='#ccc'
      stroke='black'
      strokeWidth='5'
    />
  </Wrapper>
)

const topLeft = css`
  left: 0;
  top: 0;
`

const topRight = css`
  right: 0;
  top: 0;
`

const bottomLeft = css`
  bottom: 0;
  left: 0;
`

const bottomRight = css`
  bottom: 0;
  right: 0;
`

const Wrapper = styled.svg`
  height: 2rem;
  pointer-events: none;
  position: absolute;
  width: 2rem;
  ${props => (
    props.topLeft ? topLeft :
    props.topRight ? topRight :
    props.bottomLeft ? bottomLeft :
    props.bottomRight && bottomRight
  )}
`

export default Corner
