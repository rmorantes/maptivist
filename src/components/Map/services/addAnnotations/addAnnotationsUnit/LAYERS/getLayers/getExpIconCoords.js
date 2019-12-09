// TODO: Compensate for unit count (larger unit counts need more space). ~ RM
// SOURCE: https://stackoverflow.com/a/13608420
const getExpIconCoords = (
  position,
  count,
  numUnitsThreshold,
  textSize = 1
) => {
  const iconSizeCorrection = (
    textSize !== 1 ? 1
    : numUnitsThreshold === 0 ? 2
    : numUnitsThreshold === 10 ? 1.5
    : numUnitsThreshold === 100 ? 1.2
    : 1
  )

  const radius = count * 10.5 + 10
  const math = 2 * Math.PI * position / count
  const offset1 = (radius * Math.sin(math)) / textSize * iconSizeCorrection
  const offset2 = (radius * Math.cos(math)) / textSize * iconSizeCorrection
  return ['literal', count % 2 ? [offset1, offset2] : [offset2, offset1]]
}

export default getExpIconCoords
