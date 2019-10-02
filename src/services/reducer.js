const reducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_SET_USER':
      return {...state, user: action.user}
    case 'SET_MAP':
      state.map = action.map
      state.draw = action.draw
      return state
    default:
      return state
  }
}

export default reducer
