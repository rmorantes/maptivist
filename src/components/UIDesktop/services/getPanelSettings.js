import { useStateValue } from 'src/services/context'

const getDefaultPanelSettings = () => {
  const marginBottom = 20 // So map attributions are not obscured by panels.
  const marginPanel = 20 // So panels have space between each other and boundary.
  const marginTop = 48 // Accounts for navbar portion of window height.
  const windowHeightUsable = window.innerHeight - marginTop - marginBottom
  const panelHeight = (windowHeightUsable - marginPanel * 2) / 2

  return ([{
    heading: 'Groups',
    height: panelHeight,
    x: marginPanel,
    y: marginPanel
  }, {
    heading: 'Chat',
    height: panelHeight,
    x: marginPanel,
    y: panelHeight + marginPanel * 2
  }])
}

const getPanelSettings = () => {
  const [{ user }] = useStateValue()
  // TODO: Solicit and store user panel preferences. ~ RM
  const panelSettingsUser = user && user.settings && user.settings.panels
  const panelSettings = panelSettingsUser || getDefaultPanelSettings()

  return panelSettings
}

export default getPanelSettings
