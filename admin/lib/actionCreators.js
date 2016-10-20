// actionCreators.js
export function getUserData(token) {
	return {
		type: 'GET_USER_DATA',
		token
	}
}

export function getComponents(componentsData) {
	return {
		type: 'GET_COMPONENTS',
		components: componentsData
	}
}

export function addComponent(componentObj) {
	return {
		type: 'ADD_COMPONENT',
		component: componentObj
	}
}