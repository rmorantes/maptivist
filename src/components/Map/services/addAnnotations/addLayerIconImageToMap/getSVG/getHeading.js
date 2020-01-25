const getHeading = props => (`
  <svg viewBox='0 0 490 490' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M 455,367.5 A 249,249 0 0,0 32,367.5 L 245,30 z'
      fill='${props.colorFill}'
      opacity='${props.opacityFill}'
    />
  </svg>
`)

export default getHeading
