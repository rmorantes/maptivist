import { useStateValue } from 'src/services/context'

// TODO: Store and grab settings from Gun database. ~ RM
// TODO: Add reset default option to UI. ~ RM
const getDefaultPanelSettings = () => {
  const margin = 20 // So map attributions are not obscured by panels.
  const marginPanel = 20 // So panels have space between each other and boundary.
  const marginTop = 48 // Accounts for navbar portion of window height.
  const useableWindowHeight = window.innerHeight - marginTop - margin
  const useableWindowWidth = window.innerWidth - margin * 2

  return ([
    {
      heading: 'Groups',
      height: useableWindowHeight - margin,
      width: 350,
      x: marginPanel,
      y: marginPanel
    },
    {
      heading: 'Comms',
      height: useableWindowHeight - margin,
      width: 350,
      x: window.innerWidth - 350 - margin,
      y: marginPanel
    },
    {
      heading: 'Annotations',
      height: 300,
      width: useableWindowWidth - 700 - margin * 2,
      x: window.innerWidth / 2 - (useableWindowWidth - 700 - margin * 2) / 2,
      y: useableWindowHeight - 300
    }
  ])
}

const getPanelSettings = () => {
  const [{ user }] = useStateValue()
  // TODO: Solicit and store user panel preferences. ~ RM
  const panelSettingsUser = user && user.settings && user.settings.panels
  const panelSettings = panelSettingsUser || getDefaultPanelSettings()

  return panelSettings
}

export default getPanelSettings
