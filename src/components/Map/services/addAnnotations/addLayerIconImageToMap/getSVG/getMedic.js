// TODO: SVG is redrawn/replaced so as not to use transform attribute. ~ RM
const getMedic = props => (`
  <svg viewBox='0 0 844.9 844.9' xmlns='http://www.w3.org/2000/svg'>
    <circle
      cx='422.45'
      cy='422.45'
      fill='${props.colorBackground}'
      opacity='${props.opacityBackground}'
      r='422.45'
    />
    <path
      d='M16.439,563.801l79.8,138.699c8.3,14.4,26.6,19.301,41,11l175.2-100.801V814.9c0,16.6,13.4,30,30,30h160 c16.6,0,30-13.4,30-30V612.699l175.2,100.9c14.399,8.301,32.7,3.301,41-11l79.8-138.799c8.3-14.4,3.3-32.701-11-41L642.939,422.4 l174.5-100.5c14.4-8.3,19.3-26.6,11-41l-79.8-138.7c-8.3-14.4-26.601-19.3-41-11l-175.2,100.9V30c0-16.6-13.4-30-30-30h-160 c-16.6,0-30,13.4-30,30v202.2l-175.2-100.9c-14.4-8.3-32.7-3.3-41,11L16.439,281c-8.3,14.4-3.3,32.7,11,41l174.5,100.4 l-174.5,100.5C13.14,531.1,8.14,549.5,16.439,563.801z'
      fill='${props.colorFill}'
      transform='scale(0.8) translate(110, 110)'
    />
  </svg>
`)

export default getMedic
