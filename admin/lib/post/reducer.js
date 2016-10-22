// post reducer
function posts(state = [], action) {
  console.log(state, action);
  switch(action.type) {
    case 'ADD_POST':
      console.log('Adding a post');  
      let newPostState = [];
      newPostState.push(action.data)
			return newPostState;
		case 'DELETE_POST' :
      console.log('Deleting a post');  
			updatedState = state.slice();
			updatedState.push(action.data)
      return updatedState;
    case 'UPDATE_POST' :
			let updatedState = state.slice();
			updatedState.push(action.data)
			return updatedState;
		default:
			return state;
	}	
}

export default posts;