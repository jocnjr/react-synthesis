// rootReducer.js
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// core plugins that we store
import user from './userReducer';
import components from './componentsReducer';
// all post that are in the store
// we might want to only store the title and id's in the store
import posts from './posts';
// // current single post  being view or s
// import post from './post/reducer';

const rootReducer = combineReducers({user, components, posts, routing: routerReducer});

export default rootReducer;