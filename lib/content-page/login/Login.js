// Login.js
import React from 'react';
import { Router, Link, browserHistory } from 'react-router';
// import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.loginUser = this.loginUser.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
  }

  loginUser(e) {

		e.preventDefault();
		const email = document.getElementById('login-email').value;
		const password = document.getElementById('login-password').value;
		
		let userData = {};
		userData.email = email;
		userData.password = password;

		this.verifyUser(userData);
  }
	
	verifyUser(userData) {
		let that = this;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 302 && xhr.readyState === 4) {
				localStorage.setItem('token', xhr.responseText)
				browserHistory.push('dashboard/posts');
				that.props.setUserData(xhr.responseText);
			}			
		}
		xhr.open('POST', '/login');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(userData));
	}



  render() {
  	console.log(this.props)
    return (
    	<div>
    		<h3>Login to Dashboard</h3>
			<form id="login-form" onSubmit={this.loginUser}>
				<input id="login-email" type="email" name="email" placeholder="email" />
				<input id="login-password" type="password" name="password" placeholder="password" />
				<button id="login-submit" type="submit">Login to dashboard</button>
			</form>
			<h5><Link to="/">home</Link></h5>
		</div>
    )
  }
}
