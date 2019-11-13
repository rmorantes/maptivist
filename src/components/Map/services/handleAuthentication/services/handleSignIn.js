import LAYERS_GROUP_MEMBERS from '../../LAYERS_GROUP_MEMBERS'

const handleSignIn = (
  draw,
  gun,
  map,
  setIntervalId,
  user
) => {
  const panMapToUserLocation = (map, user) => {
    const success = position => {
      user.get('longitude').put(position.coords.longitude)
      user.get('latitude').put(position.coords.latitude)
      map.jumpTo({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoom: 10
      })
    }

    const error = error => {
      console.warn('ERROR(' + error.code + '): ' + error.message)
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  const updateGroupMembers = (group, map) => {
    const features = []
    // TODO: If users are offline for < N minutes, their icons become grey.
    // If users are offline for > N minutes, their icons are not rendered.
    // ~ RM
    group.get('members').map(member => {
      features.push({
        geometry: {
          coordinates: [member.longitude, member.latitude],
          type: 'Point'
        },
        properties: {
          alias: member.alias
        },
        type: 'Feature'
      })
    })

    map.getSource('groupMembers').setData({
      features: features,
      type: 'FeatureCollection'
    })
  }

  const group = user.get('activeGroup')

  group.get('annotations').map(annotation => {
    // If annotation has not been deleted/"tombstoned".
    if (annotation) {
      // BUG: Somehow, annotations are appearing in both string and JS form.
      // Handling both cases for now. ~ RM
      if (typeof annotation.geojson === 'string') {
        draw.add(JSON.parse(annotation.geojson))
      } else {
        draw.add(annotation.geojson)
      }
    } else {
      // TODO: If gun.js annotation has been deleted but corresponding
      // MapboxDraw annotation has not, then delete the latter. ~ RM
    }
  })

  map.addSource('groupMembers', {
    cluster: true,
    clusterMaxZoom: 18,
    clusterRadius: 50,
    data: {
      features: [],
      type: 'FeatureCollection'
    },
    type: 'geojson'
  })

  for (let layer of LAYERS_GROUP_MEMBERS) {
    map.addLayer(layer)
  }

  const drawLogic = e => {
    if (e.features && e.features.length) {
      const geojson = JSON.stringify(e.features[0])
      const annotation = user.get('activeGroup').get('annotations').set({
        // // NOTE: Inline references not yet supported. ~ RM
        // // https://gun.eco/docs/API#unexpected-behavior
        // creator: gun.user(user2.current.is.pub),
        geojson: geojson
      })
      annotation.get('creator').put(gun.user(user.is.pub))
    }
  }

  map.on('draw.actionable', drawLogic)
  map.on('draw.modechange', drawLogic)
  // The `draw.selectionchange` event is necessary to access select + drag
  // movement as the other events do not.
  map.on('draw.selectionchange', drawLogic)
  map.on('draw.update', drawLogic)

  setIntervalId(setInterval(() => updateGroupMembers(group, map), 3000))
  panMapToUserLocation(map, user)
}

export default handleSignIn
