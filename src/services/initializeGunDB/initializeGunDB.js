import getSeed from './getSeed'
import sleep from 'src/services/sleep'

// TODO: Move database initialization logic moved server/super peer. ~ RM
const initializeGunDB = async (gun, gunUser) => {
  const seed = getSeed()
  const createResourceInstance = (resourceKey, resourceValue, parent) => {
    let gunRef
    if (parent === 'users') {
      const onCreate = response => {
        gunRef = gun.user(response.pub)
        gun.get(parent).set(gunRef)
        resourceValue.gunRef = gunRef
        countUsersCreated++
      }
      gunUser.create(resourceValue.alias, resourceValue.password, onCreate)
    } else {
      const resourceInstance = {}
      Object.entries(resourceValue).forEach(([key, value]) => {
        const isAssociation = key.slice(-3).match(/id|Id|Ids/)
        if (!isAssociation) resourceInstance[key] = value
      })
      if (Object.entries(resourceInstance).length === 0) {
        throw new Error('gun.set() input object cannot be empty!')
      }
      gunRef = gun.get(parent).set(resourceInstance)
      resourceValue.gunRef = gunRef
    }
  }

  const createResourceCategory = (resourcesKey, resourcesValue) => {
    Object.entries(resourcesValue).forEach(([key, value]) => {
      createResourceInstance(key, value, resourcesKey)
    })
  }

  const createResourceAssociation = (currentInstance, category, seedId) => {
    let hasMultiple = true
    if (category[category.length - 1] !== 's') {
      category += 's'
      hasMultiple = false
    }
    const isUser = category === 'admins' || category === 'members'
    const seedCategory = isUser ? 'users' : category
    const otherGunRef = seed[seedCategory][seedId].gunRef
    if (!hasMultiple) {
      category = category.slice(0, -1)
    }
    if (hasMultiple) {
      currentInstance.get(category).set(otherGunRef)
    } else {
      currentInstance.get(category).put(otherGunRef)
    }
  }

  const createResourceAssocations = (key, value) => {
    Object.entries(value).forEach(([key2, value2]) => {
      Object.entries(value2).forEach(([key3, value3]) => {
        const matchResults = key3.slice(-3).match(/Ids|Id/g)
        if (key3 !== 'gunRef' && matchResults) {
          const resourceCategory = key3.replace(/Id/, '')
          if (matchResults[0] === 'Ids') {
            value3.forEach(id => {
              createResourceAssociation(value2.gunRef, resourceCategory, id)
            })
          } else if (matchResults[0] === 'Id') {
            createResourceAssociation(value2.gunRef, resourceCategory, value3)
          }
        }
      })
    })
  }

  const seedEntries = Object.entries(seed)
  let countUsersCreated = 0
  seedEntries.forEach(([key, value]) => createResourceCategory(key, value))
  // TODO: Figure out how to correctly use `asnyc`/`await` so `onCreate` can
  // create the gun user reference before `createResourceAssocations`
  // executes. ~ RM
  while (countUsersCreated < Object.keys(seed.users).length) {
    await sleep(100)
  }
  seedEntries.forEach(([key, value]) => createResourceAssocations(key, value))
  const group = seed.groups[1].gunRef
  gun.get('defaultSettings').get('group').put(group)
  seed.users[1].gunRef.get('activeGroup').put(group)
}

export default initializeGunDB
