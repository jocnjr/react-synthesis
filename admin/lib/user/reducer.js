// userReducer.js
export const user = (state, action) => {
  switch(action.type) {
    case 'ADD_USER':
      let newUser = Object.assign({}, action.data, {
        loginTime: +new Date;
      })
      // need to check on what I returning
      return state.user = newUser;
    default:
      return state || false;
  }
}