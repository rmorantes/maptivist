import ICONS from '../../ICONS'

const getExpIconNumUnits = () => {
  const exp = ['+']

  ICONS.forEach(icon => exp.push([
    'get', 'sum_' + icon.faction + '_' + icon.type
  ]))
  return exp
}

export default getExpIconNumUnits
