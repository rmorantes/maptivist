import getExpIconCoords from './getExpIconCoords'
import getExpIconNumTypes from './getExpIconNumTypes'
import getExpIconPosition from './getExpIconPosition'
import ICONS from '../../ICONS'

const getExpIconOffset = (faction, type, priority, textSize = 1) => {
  const expIconOffset = [
    'let',
    'numIcons', getExpIconNumTypes(),
    'numUnits', [
      'coalesce',
      ['get', 'count'],
      ['get', `sum_${faction}_${type}`]
    ],
    'position', getExpIconPosition(priority)
  ]

  // Mapbox multiplies "icon-offset" values by "icon-size", so this must be
  // accounted for to ensure all icons are an equal and consistent distance from
  // the cluster center.
  const expHandleNumUnits = ['step', ['var', 'numUnits']]
  const numUnitsThresholds = [0, 10, 100, 1000]

  numUnitsThresholds.forEach(numUnitsThreshold => {
    // Checks number of icons in cluster for caculating offset such that icons
    // are equally spaced along cluster circumference.
    const expHandleNumIcons = [
      'match',
      ['var', 'numIcons'],
      1,
      ['literal', [0, 0]]
    ]

    for (let numIcons = 2; numIcons <= ICONS.length; numIcons++) {
      // Checks position of a given icon in a given sequence of icons to ensure
      // icons do not stack.
      const expHandlePosition = ['match', ['var', 'position']]

      for (let position = 1; position <= numIcons; position++) {
        expHandlePosition.push(
          position,
          getExpIconCoords(
            position,
            numIcons,
            numUnitsThreshold,
            textSize
          )
        )
      }
      expHandlePosition.push(['literal', [0, 0]])
      expHandleNumIcons.push(numIcons, expHandlePosition)
    }
    expHandleNumIcons.push(['literal', [100, 100]])
    numUnitsThreshold && expHandleNumUnits.push(numUnitsThreshold)
    expHandleNumUnits.push(expHandleNumIcons)
  })

  expIconOffset.push(expHandleNumUnits)
  return [
    'case',
    ['has', 'cluster'],
    expIconOffset,
    ['literal', [0, 0]]
  ]
}

export default getExpIconOffset
