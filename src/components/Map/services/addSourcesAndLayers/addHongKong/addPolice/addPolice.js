import addBuildings from './addBuildings'
import addRiot from './addRiot'

const addPolice = map => {
  addBuildings(map)
  addRiot(map)
}

export default addPolice
