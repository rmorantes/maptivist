import ICONS from '../../ICONS'

const getExpIconNumTypes = () => {
  const exp = ['+']

  ICONS.forEach(icon => {
    const sumType = ('sum_' + icon.faction + '_' + icon.type)
    exp.push(['case', ['to-boolean', ['get', sumType]], 1, 0])
  })
  return exp
}

export default getExpIconNumTypes
