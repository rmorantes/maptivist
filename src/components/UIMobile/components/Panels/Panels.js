import PanelComms from './components/PanelComms'
import PanelFiles from './components/PanelFiles'
import PanelGroups from './components/PanelGroups'
import PanelOrganizations from './components/PanelOrganizations'
import PanelProfile from './components/PanelProfile'

const Panels = props => (
  props.activePanel === 'comms' ? (
    <PanelComms/>
  ) : props.activePanel === 'groups' ? (
    <PanelGroups/>
  ) : props.activePanel === 'profile' ? (
    <PanelProfile/>
  ) : props.activePanel === 'files' ? (
    <PanelFiles/>
  ) : props.activePanel === 'organizations' && (
    <PanelOrganizations/>
  )
)

export default Panels
