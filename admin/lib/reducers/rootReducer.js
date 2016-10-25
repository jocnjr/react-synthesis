// rootReducer.js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import components from './componentsReducer';
import posts from './posts';
import post from '../post';

const rootReducer = combineReducers({user, components, posts, [post.constants.NAME] : post,  routing: routerReducer});

export default rootReducer;

