const convertSvgToImage = (path, width, height) => (
  new Promise(resolve => {
    const image = new window.Image(width, height)
    image.addEventListener('load', () => resolve(image))
    image.src = path
  })
)

const addLayers = async (map, layers) => {
  await layers.forEach(async layer => {
    const iconImage = layer.layout && layer.layout['icon-image']

    if (iconImage) {
      const pathSVG = `/icons/${iconImage}.svg`
      const image = await convertSvgToImage(pathSVG, 70, 70)
      map.addImage(iconImage, image)
    }
    map.addLayer(layer)
  })
}

export default addLayers
