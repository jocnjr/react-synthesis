// store.js
import React from 'react';
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/rootReducer';

// check local storage for token, save to userData
let userData = localStorage.getItem('token');

// list of components to be rendered to dashboard
let components = [];

let posts = {};
let post = {};

// define default state for store
const defaultState = {
	user: userData,
	components,
	posts,
	post
};

// instantiate store
const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
