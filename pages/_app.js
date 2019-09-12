import App, { Container } from 'next/app'
import Gun from 'gun/gun'
import initialState from 'src/services/initialState'
import reducer from 'src/services/reducer'
import { StateContextProvider } from 'src/services/context'
// NOTE: Otherwise, gun.user() will throw "TypeError: gun.user
// is not a function". ~ RM
import 'gun/sea'

const gun = Gun('https://maptivist.randymorantes.now.sh')

const group_1 = gun.get('group_1').put({
  createdAt: Date.now(),
  description: 'This group is tasked with nonviolent conflict mitigation and de-escalation. Members are marked by orange reflective vests.',
  members: null,
  name: 'Peacekeepers',
  organization: 'Veterans for Peace',
  size: null
})

// TEMP: Pending group creation UI and/or better seed method. ~ RM
gun.get('groups').set(group_1)

class AppMod extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <StateContextProvider
          initialState={{...initialState, gun: gun}}
          reducer={reducer}
        >
          <Component {...pageProps} />
        </StateContextProvider>
      </Container>
    )
  }
}

export default AppMod
