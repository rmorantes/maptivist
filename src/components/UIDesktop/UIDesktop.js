import AnnotationMenu from './components/AnnotationMenu'
import getPanelSettings from './services/getPanelSettings'
import Map from '../Map'
import Navbar from './components/Navbar'
import Panels from './components/Panels'
import { useStateValue } from 'src/services/context'

const UIDesktop = props => {
  const [{ draw, user }] = useStateValue()
  const [panels, setPanels] = useState(getPanelSettings())
  const [drawIsLoaded, setDrawIsLoaded] = useState(false)

  // TEMP: `draw` should trigger change in state, correct? ~ RM
  useEffect(() => {
    setDrawIsLoaded(true)
  }, [])

  return (
    <>
      <Navbar setPanels={setPanels} />
      <Map />
      {/* QUESTION: Should some panels be contingent on user sign in? */}
      {/* {user && <Panels panels={panels}/>}
      {user && draw && <AnnotationMenu/>} */}
      <Panels panels={panels} />
      {drawIsLoaded && <AnnotationMenu />}
    </>
  )
}

export default UIDesktop
