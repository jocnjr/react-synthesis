import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './lib/store';

// containers and components
import Main from './lib/Main';
import ContentPage from './lib/content-page/Content';
import Dashboard from './lib/dashboard/Dashboard';
import Login from './lib/content-page/login/Login';
import PostView from './lib/post-view/components/PostView';

// attach point
const appRoot = document.getElementById('root');

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={ContentPage} />
				<Route path="/post/:id" component={PostView} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
			</Route>
		</Router>
	</Provider>
), appRoot);