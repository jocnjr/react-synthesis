// Content.js
import React from 'react';
import Post from '../components/Post';

export default class PostFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	posts: []
    }
    this.getAllPost = this.getAllPost.bind(this);
  }

  componentDidMount() {
  	this.getAllPost();
  }

	getAllPost() {
		const postList = document.getElementById('post-list');
		console.log('in get all post', this)
		let that = this;

		var req = new XMLHttpRequest();
		req.open('GET', '/api/posts', true);
		req.onload = function() {
			if (req.status >= 200 && req.status < 400) {
				// Success!
				var data = JSON.parse(req.responseText);
				that.setState({posts: data});
			} else {
				// We reached our target server, but it returned an error
				console.log('error dawg')
			}
		};

		req.onerror = function() {
			// There was a connection error of some sort
		};

		req.send();
	};

  render() {
  	let posts = this.state.posts.map(post => {
  		console.log(post)
  		return (
  			<Post key={post._id} postData={post} />
  		)
  	})
    return (
    	<div>
    		<br />
				{ posts }
    		<br />
    	</div>
    )
  }
}
