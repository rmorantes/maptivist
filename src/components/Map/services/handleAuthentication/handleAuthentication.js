import handleSignIn from './services/handleSignIn'
import handleSignOut from './services/handleSignOut'

const handleAuthentication = (
  draw,
  intervalId,
  isMapLoaded,
  gun,
  map,
  setIntervalId,
  user
) => {
  if (isMapLoaded) {
    if (user) {
      handleSignIn(
        draw,
        gun,
        map,
        setIntervalId,
        user
      )
    } else if (map.getSource('groupMembers')) {
      handleSignOut(draw, intervalId, map)
    }
  }
}

export default handleAuthentication
