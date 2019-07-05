import Head from 'next/head'
import Map from './components/Map/Map'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom'
import PanelTeam from './components/PanelTeam/PanelTeam'

const Index = () => {
  const [activeTab, setActiveTab] = useState(null)
  const [hasPointerEvents, setHasPointerEvents] = useState(false)

  return (
    <main>
      <Head>
        <title> Maptivist </title>
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet'/>
        <link href='https://use.fontawesome.com/releases/v5.8.2/css/all.css' rel='stylesheet'/>
        <link href='https://fonts.googleapis.com/css?family=Aldrich' rel='stylesheet'/>
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
        }
        .mapboxgl-ctrl-bottom-right {
          top: 0 !important;
        }
        `}
      </style>

      <Map/>

      {/* TODO: Add placeholder panels for other tabs. ~ RM */}
      {activeTab === 'team' &&
        <PanelTeam
          hasPointerEvents={hasPointerEvents}
          setHasPointerEvents={setHasPointerEvents}
        />
      }

      <NavbarBottom
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </main>
  )
}

export default Index
