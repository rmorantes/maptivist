// TODO: SVG uses just one element to draw image outline. ~ RM
// TODO: SVG is redrawn/replaced so as not to use transform attribute. ~ RM
const getCrowd = props => (`
  <svg viewBox='0 0 460 460' xmlns='http://www.w3.org/2000/svg'>
     <circle
       cx='230'
       cy='230'
       fill='${props.colorBackground}'
       opacity='${props.opacityBackground}'
       r='230'
     />
     <g transform='scale(0.6) translate(150, 150)'>
       <polygon fill='${props.colorFill}' points='131.67,129.69 141.67,264.69 86.67,264.69 101.667,129.69'/>
       <polygon fill='${props.colorFill}' points='71.667,129.69 86.67,264.69 31.67,264.69 41.67,129.69'/>
       <rect fill='${props.colorFill}' height='134.997' width='30' x='71.667' y='129.693'/>
       <polygon fill='${props.colorFill}' points='0,129.693 0,314.865 30,314.865 40,460 86.667,460 96.667,357.345 86.667,254.69 41.67,254.69 41.67,129.69'/>
       <polygon fill='${props.colorFill}' points='275,129.69 285,264.69 230,264.69 245,129.69'/>
       <polygon fill='${props.colorFill}' points='215,129.69 230,264.69 175,264.69 185,129.69'/>
       <rect fill='${props.colorFill}' height='134.997' width='30' x='215' y='129.693' />
       <polygon fill='${props.colorFill}' points='131.67,129.69 131.67,254.69 86.667,254.69 86.667,460 133.333,460 143.333,314.865 173.333,314.865 183.333,460 230,460 240,357.345 230,254.69 185,254.69 185,129.69'/>
       <polygon fill='${props.colorFill}' points='418.333,129.69 428.333,264.69 373.333,264.69 388.333,129.69'/>
       <polygon fill='${props.colorFill}' points='358.333,129.69 373.333,264.69 318.333,264.69 328.333,129.69'/>
       <rect fill='${props.colorFill}' height='134.997' width='30' x='358.333' y='129.693' />
       <polygon fill='${props.colorFill}' points='275,129.69 275,254.69 230,254.69 230,460 276.667,460 286.667,314.865 316.667,314.865 326.667,460 373.333,460 383.333,357.345 373.333,254.69 328.333,254.69 328.333,129.69'/>
       <path fill='${props.colorFill}' d='M230,110.102l10-55.051L230,0c-30.327,0-55,24.696-55,55.051 S199.673,110.102,230,110.102z'/>
       <path fill='${props.colorFill}' d='M285,55.051C285,24.696,260.327,0,230,0v110.102 C260.327,110.102,285,85.406,285,55.051z'/>
       <path fill='${props.colorFill}' d='M86.667,110.102l10-55.051L86.667,0c-30.327,0-55,24.696-55,55.051 S56.34,110.102,86.667,110.102z'/>
       <path fill='${props.colorFill}' d='M141.667,55.051c0-30.355-24.673-55.051-55-55.051v110.102 C116.994,110.102,141.667,85.406,141.667,55.051z'/>
       <polygon fill='${props.colorFill}' points='460,129.693 460,314.865 430,314.865 420,460 373.333,460 373.333,254.69 418.333,254.69 418.333,129.69'/>
       <path fill='${props.colorFill}' d='M373.333,110.102l10-55.051L373.333,0c-30.327,0-55,24.696-55,55.051 S343.006,110.102,373.333,110.102z'/>
       <path fill='${props.colorFill}' d='M428.333,55.051c0-30.355-24.673-55.051-55-55.051v110.102 C403.66,110.102,428.333,85.406,428.333,55.051z'/>
       <rect fill='${props.colorFill}' height='200' width='300' x='90' y='165'/>
       <rect fill='${props.colorFill}' height='100' width='460' x='0' y='85'/>
     </g>
  </svg>
`)

export default getCrowd
