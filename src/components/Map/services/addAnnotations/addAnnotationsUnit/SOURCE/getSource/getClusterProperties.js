import ICONS from '../../ICONS'

const getExpSumOfIcon = (faction, type) => {
  const expIsType = ['==', ['get', 'type'], type]
  const expIsFaction = ['==', ['get', 'faction'], faction]
  const expIsMatch = ['all', expIsType, expIsFaction]
  return ['+', ['case', expIsMatch, ['get', 'count'], 0]]
}

const getClusterProperties = () => {
  const clusterProperties = {}

  ICONS.forEach(ICON => {
    const key = `sum_${ICON.faction}_${ICON.type}`
    const value = getExpSumOfIcon(ICON.faction, ICON.type)
    clusterProperties[key] = value
  })
  return clusterProperties
}

export default getClusterProperties
