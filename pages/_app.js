import App from 'next/app'
import Gun from 'gun/gun'
import initialState from 'src/services/initialState'
import reducer from 'src/services/reducer'
import { StateContextProvider } from 'src/services/context'
// NOTE: Otherwise, gun.user() will throw "TypeError: gun.user
// is not a function". ~ RM
import 'gun/sea'

// TODO: Implement own server. ~ RM

// // TEMP: Pending group creation UI and/or better seed method. ~ RM
// const gun = Gun('https://gunjs.herokuapp.com/gun')
// const group = gun.put({
//   // NOTE: Gun.js doesn't seem to support empty objects, and setting the
//   // annotations field when the first user adds their first annotation results
//   // in every other user encountering a 'Mismatched owner on 'fieldName' error
//   // when they attempt to modify the annotations field. Thus for now, for
//   // seeding, and BEFORE a user has signed in, an empty object is initialized
//   // with a useless field. ~ RM
//   annotations: {thisFieldforInitializingPurposesOnly: null},
//   description: 'This group is tasked with nonviolent conflict mitigation and de-escalation. Members are marked by orange reflective vests.',
//   // NOTE: For some reason, I haven't encountered mismatched owner issues with
//   // the members field, possibly because members are user/gun references vs
//   // objects. ~ RM
//   members: null,
//   name: 'Peacekeepers'
// })
// // NOTE: In the future, users will likely need to iterate through a list of
// // all groups. ~ RM
// gun.get('groups').set(group)

class AppMod extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <StateContextProvider
        initialState={{
          ...initialState,
          gun: Gun('https://gunjs.herokuapp.com/gun')
        }}
        reducer={reducer}
      >
        <Component {...pageProps} />
      </StateContextProvider>
    )
  }
}

export default AppMod
