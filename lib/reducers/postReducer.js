// postReducer.js

function posts(state = {}, action) {
	switch(action.type) {
		case 'GET_POSTS' :
			let newState = action.posts;
			return newState;
		default:
			return state;
	}	
}

export default posts;