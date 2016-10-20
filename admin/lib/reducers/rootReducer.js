// rootReducer.js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import components from './componentsReducer'

const rootReducer = combineReducers({user, components, routing: routerReducer});

export default rootReducer;

