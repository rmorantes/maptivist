import 'mapbox-gl/dist/mapbox-gl.css'
import GlobalStyles from './components/GlobalStyles'
import NextHead from './components/NextHead'
import UIDesktop from './components/UIDesktop'
import UIMobile from './components/UIMobile'
import { useStateValue } from 'src/services/context'

// TODO: Look into SPR: https://zeit.co/blog/serverless-pre-rendering. ~ RM
// TODO: Can this app benefit more from passing components as props? ~ RM
// * https://twitter.com/dan_abramov/status/1021850499618955272
const App = () => {
  const isMobileRegex = /Android|BlackBerry|iPhone|iPod|Opera Mini|webOS/i
  const isMobile = isMobileRegex.test(navigator.userAgent)
  const [{ gun }, dispatch] = useStateValue()
  const user = gun.user()

  useEffect(() => {
    // Retrieves previous session if such exists. Works only after
    // authenticating and then refreshing current browser tab (other tabs will
    // not have access to the session).
    user.recall({sessionStorage: true}, response => {
      if (response && response.sea) {
        dispatch({type: 'AUTH_SET_USER', user: user})
      }
    })
  }, [])

  return (<>
    <NextHead/>
    <GlobalStyles/>
    {isMobile ? <UIMobile/> : <UIDesktop/>}
  </>)
}

export default App
