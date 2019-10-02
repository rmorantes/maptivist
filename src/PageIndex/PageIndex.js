import DrawMenu from './components/DrawMenu'
import Head from 'next/head'
import NavbarBottom from 'src/components/NavbarBottom'
import PageIndex_Map from './components/Map'
import PageIndex_PanelComms from './components/PanelComms'
import PageIndex_PanelFiles from './components/PanelFiles'
import PageIndex_PanelGroups from './components/PanelGroups'
import PageIndex_PanelOrganizations from './components/PanelOrganizations'
import PageIndex_PanelProfile from './components/PanelProfile'
import PageIndex_SignUpSignIn from './components/SignUpSignIn'
import { useStateValue } from 'src/services/context'

const PageIndex = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [hasPointerEvents, setHasPointerEvents] = useState(false)
  const [{ user }] = useStateValue()

  return (
    <main>
      <Head>
        <title> Maptivist </title>
        {/* TODO: Localize dependencies for security and offline-first. ~ RM */}
        {/* https://gun.eco/docs/Todo-Dapp#but-cdns-are-dangerous- */}
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet'/>
        <link href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Aldrich|Roboto+Condensed&display=swap' rel='stylesheet'/>
        <link href='/static/manifest.webmanifest' rel='manifest'/>
        <script src='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.js'/>
      </Head>

      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            border: none;
            background: none;
            outline: none;
            color: white;
            font-family: 'Aldrich', sans-serif;
            font-size: 1rem;
          }

          html {
            box-sizing: border-box;
            overflow: hidden;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          ::selection {
            background: none;
          }

          body {
            --themeOverlayBackgroundColor: rgba(0, 0, 0, 0.75);
          }
        `}
      </style>

      <PageIndex_Map user={user}/>

      {user ? (
        <Fragment>
          {/* TODO: Add placeholder panels for other tabs. ~ RM */}
          {activeTab === 'comms' ? (
            <PageIndex_PanelComms
              hasPointerEvents={hasPointerEvents}
              setHasPointerEvents={setHasPointerEvents}
            />
          ) : activeTab === 'groups' ? (
            <PageIndex_PanelGroups
              hasPointerEvents={hasPointerEvents}
              setHasPointerEvents={setHasPointerEvents}
            />
          ) : activeTab === 'profile' ? (
            <PageIndex_PanelProfile
              hasPointerEvents={hasPointerEvents}
              setHasPointerEvents={setHasPointerEvents}
            />
          ) : activeTab === 'files' ? (
            <PageIndex_PanelFiles
              hasPointerEvents={hasPointerEvents}
              setHasPointerEvents={setHasPointerEvents}
            />
          ) : activeTab === 'organizations' && (
            <PageIndex_PanelOrganizations
              hasPointerEvents={hasPointerEvents}
              setHasPointerEvents={setHasPointerEvents}
            />
          )}
          {true &&
            <DrawMenu/>
          }
          <NavbarBottom
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Fragment>
      ) : (
        <PageIndex_SignUpSignIn/>
      )}
    </main>
  )
}

export default PageIndex
