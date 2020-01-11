// TODO: SVG uses just one element to draw image outline. ~ RM
// TODO: SVG is redrawn/replaced so as not to use transform attribute. ~ RM
const getBus = props => (`
  <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
    <circle
      cx='256'
      cy='256'
      fill='${props.colorBackground}'
      opacity='${props.opacityBackground}'
      r='256'
    />
    <g transform='scale(0.65) translate(140, 170)'>
      <rect
        fill='${props.colorFill}'
        height='250'
        width='505'
        x='0'
        y='135'
      />
      <circle
        fill='${props.colorFill}'
        cx='121'
        cy='391'
        r='45'
      />
      <circle
        fill='${props.colorFill}'
        cx='392'
        cy='391'
        r='45'
      />
      <path
        fill='${props.colorFill}'
        d='m407 76h-407v60h501.468c-16.921-35.345-52.742-60-94.468-60z'
      />
      <path
        fill='${props.colorFill}'
        d='m0 256v120h47.518c6.969-34.191 37.266-60 73.482-60s66.513 25.809 73.482 60h124.036c6.969-34.191 37.266-60 73.482-60s66.513 25.809 73.482 60h46.518v-50.722l-138.545-69.278z'
      />
      <path
        fill='${props.colorFill}'
        d='m136 166h105v60h-105z'
      />
      <path
        fill='${props.colorFill}'
        d='m0 166h106v60h-106z'
      />
      <path
        fill='${props.colorFill}'
        d='m271 166h106v60h-106z'
      />
      <path
        fill='${props.colorFill}'
        d='m407 166v73.228l105 52.505v-110.733c0-5.136-.8-10.058-1.516-15z'
      />
    </g>
  </svg>
`)

export default getBus
