// componentsReducer.js

function components(state = [], action) {
	switch(action.type) {
		case 'GET_COMPONENTS' :
			let newState = action.components;
			return newState;
		case 'ADD_COMPONENT' :
			let updatedState = state.slice();
			updatedState.push(action.component)
			return updatedState;
		default:
			return state;
	}	
}

export default components;