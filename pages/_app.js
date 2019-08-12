import App, { Container } from 'next/app'
import Gun from 'gun/gun'
import initialState from 'src/services/initialState'
import reducer from 'src/services/reducer'
import { StateContextProvider } from 'src/services/context'
import 'gun/sea' // NOTE: Otherwise, gun.user() will throw "TypeError: gun.user
// is not a function". ~ RM

class AppMod extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <StateContextProvider
          initialState={{...initialState, gun: Gun()}}
          reducer={reducer}
        >
          <Component {...pageProps} />
        </StateContextProvider>
      </Container>
    )
  }
}

export default AppMod
