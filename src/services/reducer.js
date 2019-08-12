const reducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_SET_USER':
      return {...state, user: {...action.user}}
    default:
      return state
  }
}

export default reducer
