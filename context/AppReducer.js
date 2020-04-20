export default (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      console.log(action.payload)
      return {...state, authenticated: true, authData: action.payload};
    default:
      return state;
  }
}