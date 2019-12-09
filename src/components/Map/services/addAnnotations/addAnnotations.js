import addAnnotationsBuilding from './addAnnotationsBuilding'
import addAnnotationsUnit from './addAnnotationsUnit'

const addAnnotations = async map => {
  addAnnotationsBuilding(map)
  addAnnotationsUnit(map)
}

export default addAnnotations
