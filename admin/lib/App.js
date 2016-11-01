// App.js
import React from 'react';
import { browserHistory } from 'react-router';
// import components
import NavBar from './navbar/components/NavBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getComponentsXHR = this.getComponentsXHR.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.sendComponentsToStore = this.sendComponentsToStore.bind(this);
    this.getPostsXHR = this.getPostsXHR.bind(this);
    this.sendPostsToStore = this.sendPostsToStore.bind(this);
  }

  componentDidMount() {
    this.getComponentsXHR();
    this.getPostsXHR();

    let token = localStorage.getItem('token');
    if(!token) {
      this.checkUser();
    }
  }

  checkUser() {
    let that = this;
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        that.handleUserData(JSON.parse(xhr.responseText));
      }     
    }
    xhr.open('GET', '/api/users');
    xhr.send();    
  }

  handleUserData(userData) {
    if(userData.length === 0) {
      browserHistory.push('/signup')
    }
  }

  getComponentsXHR() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        this.sendComponentsToStore(JSON.parse(xhr.responseText));
      }     
    }
    xhr.open('GET', '/api/plugins');
    xhr.send();
  }

  sendComponentsToStore(pluginData) {
    let plugins = [];
    pluginData.forEach(plugin => {
      plugins.push(plugin);
    })
    this.props.getComponents(plugins);
  }

  getPostsXHR() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        this.sendPostsToStore(JSON.parse(xhr.responseText));
      }     
    }
    xhr.open('GET', '/api/posts');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
  }

  sendPostsToStore(postData) {
    let posts = {};
    postData.forEach(post => {
      posts[post._id] = post;
    })
    this.props.getPosts(posts);
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId')
  }

  render() {
    return (
    	<div>
    		<NavBar hasToken={this.props.user} logoutUser={this.logoutUser} />
    		<div className="container-fluid">
					{React.cloneElement(this.props.children, this.props)}
				</div>
    	</div>
    )
  }
}
