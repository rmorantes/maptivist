import App from 'next/app'
import Gun from 'gun/gun'
import initialState from 'src/services/initialState'
import reducer from 'src/services/reducer'
import { StateContextProvider } from 'src/services/context'
// NOTE: Otherwise, gun.user() will throw "TypeError: gun.user
// is not a function". ~ RM
import 'gun/sea'

class AppMod extends App {
  render () {
    const { Component, pageProps } = this.props
    const gun = Gun()
    return (
      <StateContextProvider
        initialState={{
          ...initialState,
          // gun: Gun('https://gunjs.herokuapp.com/gun')
          // NOTE: For development (uses local database, versus attempting to
          // sync with an external superpeer). ~ RM
          gun: gun,
          gunUser: gun.user()
        }}
        reducer={reducer}
      >
        <Component {...pageProps} />
      </StateContextProvider>
    )
  }
}

export default AppMod
