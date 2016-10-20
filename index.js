import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './admin/lib/store';

// containers and components
import Main from './admin/lib/Main';
import ContentPage from './admin/lib/content-page/Content';
import Dashboard from './admin/lib/dashboard/Dashboard';
import Login from './admin/lib/content-page/login/Login';

// attach point
const appRoot = document.getElementById('root');

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={ContentPage} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
			</Route>
		</Router>
	</Provider>
), appRoot);