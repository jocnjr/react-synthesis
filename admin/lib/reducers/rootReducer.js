// rootReducer.js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import components from './componentsReducer';
import posts from './posts';

const rootReducer = combineReducers({user, components, posts, routing: routerReducer});

export default rootReducer;

