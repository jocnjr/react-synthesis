import React from 'react';
import {render} from 'react-dom';
// react router and dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './admin/lib/store';

// containers and components
import Main from './admin/lib/Main';
import ContentPage from './admin/lib/content-page/Content';
import Dashboard from './admin/lib/dashboard/Dashboard';
import Login from './admin/lib/content-page/login/Login';
import PostView from './admin/lib/post/components/PostView';
import PostForm from './admin/lib/post/components/PostForm';

// attach point
const appRoot = document.getElementById('root');

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={ContentPage} />
				<Route path="/login" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/test" component={PostForm} />
				<Route path="/post/:id" component={PostView} />
			</Route>
		</Router>
	</Provider>
), appRoot);