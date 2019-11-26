import SVG_PATHS from './SVG_PATHS'

// IDEA: Secondary icons in or around a primary icon. ~ RM
// * https://ux.stackexchange.com/questions/76402/how-to-cluster-map-markers-with-different-statuses
// IDEA: Interlocking hexagon icons bordering primary icon? ~ RM
const addLayerImages = async map => {
  // SOURCE: https://stackoverflow.com/a/6661012/11845746
  const convertSvgPathToCamelCaseName = path => (
    path.slice(7, -4).replace(/\/([a-z])/g, g => g[1].toUpperCase())
  )

  // SOURCE: https://github.com/mapbox/mapbox-gl-js/issues/5529#issuecomment-435979741
  const convertSvgToImage = (path, width, height) => (
    new Promise(resolve => {
      const image = new Image(width, height)
      image.addEventListener('load', () => resolve(image))
      image.src = path
    })
  )

  for (let svgPath of SVG_PATHS) {
    // Icons must scale in size with number of digits contained within.
    const digits = svgPath.match(/\d+/g)[0] || '1'
    const dimension = (
      digits === '1' ? 35 :
      digits === '2' ? 45 :
      digits === '3' ? 55 : 65
    )
    const image = await convertSvgToImage(svgPath, dimension, dimension)
    const imageName = convertSvgPathToCamelCaseName(svgPath)
    map.addImage(imageName, image)
  }
}

export default addLayerImages
