// TODO: SVG is redrawn/replaced so as not to use transform attribute. ~ RM
const getCrowdControl = props => (`
  <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
    <circle
      cx='256'
      cy='256'
      fill='${props.colorBackground}'
      opacity='${props.opacityBackground}'
      r='256'
    />
    <path
      d='M507.734,364.807l-42.667-32c-2.354-1.771-5.396-2.51-8.188-1.979c-2.896,0.49-5.458,2.156-7.083,4.594l-15.081,22.62l-32.066-24.057c7.064-17.538,12.647-36.694,16.609-57.258c17.5-15.638,28.746-38.126,28.746-63.388c0-23.746-9.785-45.217-25.491-60.702C405.488,62.592,337.579,0.005,256.005,0.005S106.522,62.592,89.496,152.637c-15.706,15.484-25.491,36.956-25.491,60.702c0,25.262,11.246,47.75,28.746,63.388c3.962,20.564,9.546,39.72,16.609,57.258l-32.066,24.057l-15.081-22.62c-1.625-2.438-4.188-4.104-7.083-4.594c-2.813-0.521-5.854,0.208-8.188,1.979l-42.667,32c-4.542,3.396-5.625,9.74-2.479,14.448l85.333,128c1.625,2.438,4.188,4.104,7.083,4.594c0.583,0.104,1.188,0.156,1.792,0.156c2.292,0,4.542-0.74,6.396-2.135l42.667-32c4.542-3.396,5.625-9.74,2.479-14.448l-15.738-23.608l19.534-14.651c9.336,49.352,52.639,86.842,104.663,86.842s95.327-37.491,104.663-86.842l19.534,14.651l-15.738,23.608c-3.146,4.708-2.063,11.052,2.479,14.448l42.667,32c1.854,1.396,4.104,2.135,6.396,2.135c0.604,0,1.208-0.052,1.792-0.156c2.896-0.49,5.458-2.156,7.083-4.594l85.333-128C513.359,374.547,512.276,368.203,507.734,364.807z'
      fill='${props.colorFill}'
      transform='scale(0.75) translate(80, 80)'
    />
  </svg>
`)

export default getCrowdControl
