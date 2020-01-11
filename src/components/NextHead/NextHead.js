import Head from 'next/head'

const NextHead = () => (
  <Head>
    <title> Maptivist </title>
    {/* TODO: Localize dependencies for security and offline-first. ~ RM */}
    {/* https://gun.eco/docs/Todo-Dapp#but-cdns-are-dangerous- */}
    <link
      href='https://use.fontawesome.com/releases/v5.8.2/css/all.css'
      rel='stylesheet'
    />
    <link
      href='/static/manifest.webmanifest'
      rel='manifest'
    />
    <link
      href='/static/favicon.ico'
      rel='shortcut icon'
    />
  </Head>
)

export default NextHead
