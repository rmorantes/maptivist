import ICONS from '../../ICONS'

const getExpIconPosition = priority => {
  if (priority === 1) return 1
  // A given icon's position is one past the number of higher priority icons in
  // a given cluster, hence the 1.
  const exp = ['+', 1]
  // There is no need to check whether there are icons of lower priority than a
  // a given icon as their presence does not affect the given icon's position.
  const higherPriorityIcons = ICONS.slice(0, priority - 1)

  higherPriorityIcons.forEach(icon => {
    const sumType = ('sum_' + icon.faction + '_' + icon.type)
    exp.push(['case', ['>', ['get', sumType], 0], 1, 0])
  })

  return exp
}

export default getExpIconPosition
