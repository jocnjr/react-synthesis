// Signup.js
import React from 'react';
import { Link, browserHistory } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	email: '',
    	password: '',
    	confirmPassword: ''
    }
    this.signupUser = this.signupUser.bind(this);
    this.getToken = this.getToken.bind(this)
  }

  signupUser(e) {
  	let that = this;

  	if(this.state.email === '' || this.state.password === '') {
  		return alert('Please use valid email and password');
  	} else if(this.state.password !== this.state.confirmPassword) {
  		return alert('Passwords do not match');
  	}

  	let userObj = {
  		email: this.state.email,
  		password: this.state.password
  	}

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
      	that.getToken(userObj);
      }     
    }
    xhr.open('POST', '/api/user');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(userObj));
  }

  getToken(userData) {
		let that = this;
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if(xhr.status === 302 && xhr.readyState === 4) {
				let userData = JSON.parse(xhr.responseText);
        localStorage.setItem('token', userData.token);
        localStorage.setItem('userId', userData.id);
				browserHistory.push('dashboard');
			}			
		}
		xhr.open('POST', '/login');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(userData));
  }

  updateInput(e) {
  	let email = this.refs.signupEmail.value;
  	let password = this.refs.signupPassword.value;
  	let confirmPassword = this.refs.signupConfirm.value;

  	this.setState({
  		email,
  		password,
  		confirmPassword
  	})
  }

  render() {
    return(
    	<div>
    		<h4>Sign up</h4>
    		<div className="form-group">
    			<input ref="signupEmail" placeholder="email" onChange={(e) => {this.updateInput(e)}} />
    			<input ref="signupPassword" type="password" placeholder="password" onChange={(e) => {this.updateInput(e)}} />
    			<input ref="signupConfirm" type="password" placeholder="confirm-password" onChange={(e) => {this.updateInput(e)}} />
    			<button className="btn btn-default" onClick={(e) => {this.signupUser(e)}}>Enter</button>
    		</div>
    	</div>
    )
  }
}