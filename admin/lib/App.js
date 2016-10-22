// App.js
import React from 'react';

// import components
import NavBar from './navbar/components/Navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getComponentsXHR = this.getComponentsXHR.bind(this);
    this.sendComponentsToStore = this.sendComponentsToStore.bind(this);
    this.getPostsXHR = this.getPostsXHR.bind(this);
    this.sendPostsToStore = this.sendPostsToStore.bind(this);
  }

  componentDidMount() {
    this.getComponentsXHR();
    this.getPostsXHR();
  }

  getComponentsXHR() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        this.sendComponentsToStore(JSON.parse(xhr.responseText));
      }     
    }
    xhr.open('GET', '/api/plugins');
    xhr.setRequestHeader('Content-Type', 'application/json');
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

  render() {
    return (
    	<div>
    		<NavBar hasToken={this.props.user} />
    		<div className="container-fluid">
					{React.cloneElement(this.props.children, this.props)}
				</div>
    	</div>
    )
  }
}
