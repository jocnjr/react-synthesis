// post reducer
export const post = (state = {}, action) => {
	console.log(state, action);
	switch(action.type) {
		case 'ADD_POST':
			console.log('Adding a post');  
			let newPost = Object.assign({}, action.data, {
				test_id: +new Date
			});
			// newPost.push(action.data)
			return newPost;
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
