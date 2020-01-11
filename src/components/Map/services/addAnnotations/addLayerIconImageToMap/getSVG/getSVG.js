import getBus from './getBus'
import getCar from './getCar'
import getCrowd from './getCrowd'
import getCrowdControl from './getCrowdControl'
import getFacility from './getFacility'
import getHeading from './getHeading'
import getMedic from './getMedic'

const getSVG = props => ({
  buses: getBus,
  cars: getCar,
  crowds: getCrowd,
  'crowd control': getCrowdControl,
  facility: getFacility,
  heading: getHeading,
  medics: getMedic
}[props.type](props))

export default getSVG
