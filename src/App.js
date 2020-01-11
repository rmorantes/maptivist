import 'gun/lib/not.js'
import 'mapbox-gl/dist/mapbox-gl.css'
import GlobalStyles from './components/GlobalStyles'
import NextHead from './components/NextHead'
import UIDesktop from './components/UIDesktop'
import UIMobile from './components/UIMobile'
import { useStateValue } from 'src/services/context'
import initializeGunDB from './services/initializeGunDB'

// TODO: Look into SPR: https://zeit.co/blog/serverless-pre-rendering. ~ RM
// TODO: Can this app benefit more from passing components as props? ~ RM
// * https://twitter.com/dan_abramov/status/1021850499618955272
const App = () => {
  const isMobileRegex = /Android|BlackBerry|iPhone|iPod|Opera Mini|webOS/i
  const isMobile = isMobileRegex.test(navigator.userAgent)
  const [{ gun, gunUser }, dispatch] = useStateValue()

  useEffect(() => {
    // TODO: Implement super peer/server. ~ RM
    // NOTE: Until a super peer/server is implemented, it is necessary for a
    // peer/client to initialize the Gun database. Use `localStorage.clear()`
    // to reset. ~ RM
    gun.get('defaultSettings').not(() => initializeGunDB(gun, gunUser))
    // Retrieves previous session if such exists. Works only after
    // authenticating and then refreshing current browser tab (other tabs will
    // not have access to the session).
    gunUser.recall({ sessionStorage: true }, response => {
      // NOTE: For development. ~ RM
      // gunUser.once(userData => console.log('userData = ', userData))
      if (response && response.sea) {
        dispatch({ type: 'AUTH_SET_USER', user: gunUser })
      }
    })
  }, [])

  return (
    <>
      <NextHead />
      <GlobalStyles />
      {isMobile ? <UIMobile /> : <UIDesktop />}
    </>
  )
}

export default App
