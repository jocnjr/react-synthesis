// componentsReducer.js

function components(state = [], action) {
	switch(action.type) {
		case 'GET_COMPONENTS' :
			let initState = action.components;
			return initState;
		case 'ADD_COMPONENT' :
			let updatedState = state.slice();
			updatedState.push(action.component)
			return updatedState;
		case 'DELETE_COMPONENT' :
			let remainState = state.slice();
			remainState = remainState.filter(plugin => {
			    return plugin._id !== action.component._id;
			});
			return remainState;
		default:
			return state;
	}	
}

export default components;