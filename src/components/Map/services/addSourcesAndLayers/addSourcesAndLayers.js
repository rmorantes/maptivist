import addHongKong from './addHongKong'
import addLayerImages from './addLayerImages'

const addSourcesAndLayers = async map => {
  await addLayerImages(map)
  addHongKong(map)
}

export default addSourcesAndLayers
