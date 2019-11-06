import AnnotationMenu from './components/AnnotationMenu'
import Map from '../Map'
import Navbar from './components/Navbar'
import Panels from './components/Panels'
import { useStateValue } from 'src/services/context'

const UIMobile = () => {
  const [{ draw, user }] = useStateValue()
  const [activePanel, setActivePanel] = useState(null)

  return (<>
    <Map isMobile/>
    <Panels activePanel={activePanel}/>
    {user && draw && <AnnotationMenu/>}
    <Navbar activePanel={activePanel} setActivePanel={setActivePanel}/>
  </>)
}

export default UIMobile
