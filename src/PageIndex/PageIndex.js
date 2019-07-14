import Head from 'next/head'
import NavbarBottom from 'src/components/NavbarBottom'
import PageIndex_Map from './components/Map'
import PageIndex_PanelTeam from './components/PanelTeam'
import PageIndex_SignUpSignIn from './components/SignUpSignIn'

const PageIndex = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [hasPointerEvents, setHasPointerEvents] = useState(false)
  const [user, setUser] = useState(false)

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
        <script src='faker.js' type='text/javascript'/>
        <script src='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.js'/>
      </Head>

      <style jsx global> {`
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

        .mapboxgl-ctrl-bottom-left {
          top: 0.5rem !important;
          display: none;
        }
        .mapboxgl-ctrl-bottom-right {
          top: 0 !important;
          display: none;
        }
        `}
      </style>

      <PageIndex_Map isPanning={!Boolean(user)}/>

      {user ? (
        <Fragment>
          {activeTab === 'team' &&
            <PageIndex_PanelTeam
              hasPointerEvents={hasPointerEvents}
              setHasPointerEvents={setHasPointerEvents}
            />
          }

          <NavbarBottom
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Fragment>
      ) : (
        <PageIndex_SignUpSignIn/>
      )}


      {/* TODO: Add placeholder panels for other tabs. ~ RM */}


    </main>
  )
}

export default PageIndex
