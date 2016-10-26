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
import PostAdd from './admin/lib/post/components/PostAdd';
import Edit from './admin/lib/post/components/Edit';
import Signup from './admin/lib/signup/components/Signup'

// attach point
const appRoot = document.getElementById('root');

render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={ContentPage} />
				<Route path="/post/:id" component={PostView} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/test" component={PostAdd} />
				<Route path="/add" component={PostAdd} />
				<Route path="/edit" component={Edit} />
				<Route path="/post/:id" component={PostView} />

			</Route>
		</Router>
	</Provider>
), appRoot);