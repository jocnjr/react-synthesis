// UserSettings.js
import React from 'react';

export default class UserSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	userId: '',
        	userName: '',
        	userEmail: '',
        	userCreated: ''
        }
        this.getUserData = this.getUserData.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
    	let user_id = localStorage.getItem('userId');
    	this.getUserData(user_id);
    }

    getUserData(id) {
    	const that = this;
	    const xhr = new XMLHttpRequest();
	    xhr.onreadystatechange = () => {
	      if(xhr.status === 200 && xhr.readyState === 4) {
	        that.setUserData(JSON.parse(xhr.responseText))
	      }     
	    }
	    xhr.open('GET', '/api/user/' + id);
	    xhr.send(); 
    }

    handleChange(e, input) {
    	if (input === 'name') {
    		this.setState({userName: e.target.value})
    	} else if (input === 'email') {
    		this.setState({userEmail: e.target.value})
    	}
    }

    setUserData(data) {
    	this.setState({userId: data._id, userName: data.name, userEmail: data.email, userCreated: data.created_at})
    }

    updateUser() {
    	const that = this;
	    const xhr = new XMLHttpRequest();
	    xhr.onreadystatechange = () => {
	      if(xhr.status === 200 && xhr.readyState === 4) {
	        that.getUserData(that.state.userId);
	      }     
	    }
	    xhr.open('PUT', '/api/user/' + that.state.userId);
			xhr.setRequestHeader('Content-Type', 'application/json');
	    xhr.send(JSON.stringify({name: that.state.userName, email: that.state.userEmail}));     	
    }

    render() {
    	console.log(this.state)
        return (
        	<div>
        		<input value={this.state.userName} onChange={(e) => this.handleChange(e, "name")} />
        		<input value={this.state.userEmail} onChange={(e) => this.handleChange(e, "email")} />
        		<button onClick={this.updateUser}>Update Settings</button>
        	</div>
        );
    }
}
