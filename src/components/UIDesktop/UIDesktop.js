import AnnotationMenu from './components/AnnotationMenu'
import getPanelSettings from './services/getPanelSettings'
import Map from '../Map'
import Navbar from './components/Navbar'
import Panels from './components/Panels'
import { useStateValue } from 'src/services/context'

const UIDesktop = props => {
  const [{ draw, user }] = useStateValue()
  const [panels, setPanels] = useState(getPanelSettings())

  return (<>
    <Navbar setPanels={setPanels}/>
    <Map/>
    {user && <Panels panels={panels}/>}
    {user && draw && <AnnotationMenu/>}
  </>)
}

export default UIDesktop
