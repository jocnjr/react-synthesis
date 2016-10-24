// Dashboard.js
import React from 'react';
// import ALL components from plugin/index.js

	const postData = document.getElementById('post-data');
	// need to sanitize user input
	
// postData.onsubmit = (e) => {
//   e.preventDefault();
//   const title = document.getElementById('post-title').value;
//   const body = document.getElementById('post-body').value;
//   const status = document.getElementById('post-status-display').textContent;
//   const type = document.getElementById('post_type').value;
//   const user = 'Mario';

//   const imgUrl = [];
//   const videoEmbed = [];
//   // const publishDate = document.getElementById().value;
//   console.log('we executed')
//   if (title !== '' && body !== '') {
//     let data = {};
//     data.title = title;
//     data.body = body;
//     data.status = status;
//     data.post_type = type;
//     data.user_id = user; 
//     data.uri = createUri(title);
//       console.log(data)
//     createPost(data);
//   } else {
//     alert('title and post required');
//   }
// }
function createUrl(props) {
	let postUrl = $(props.title).val()
	postUrl = postUrl.toLowerCase();
	postUrl = postUrl.replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"");   //this one
	postUrl = postUrl.replace(/\s+/g, "-");
	return postUrl;
};

const createPost = (data) => {
		const req = new XMLHttpRequest();
		req.onreadystatechange = () => {
			if (req.status === 200 && req.readyState === 4) {
				console.log(req.responseText);
				// redirect with user data
			}
		}
		req.open('POST', '/api/post', true);
		req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		req.send(JSON.stringify(data));
	}
const TitleInput = () => {
	return (
		<div className="form-group">
			<input type="text" name="title" id="post-title" placeholder="Add Title Here" />
		</div>
	);
}
const BodyInput = () => {
	return (
		<div className="form-group">
			<textarea className="form-control" id="post-body" rows="10"></textarea>
		</div>
	);
}

// class PostContent extends React.Component {
// 	render() {
// 		return (
// 			<TitleInput />
// 			<BodyInput />
// 		);
// 	}
// }
const PostDetails = () => {
	return (
		<div className="form-group">
			<textarea className="form-control" id="post-body" rows="10"></textarea>
		</div>
	);
}



export default class PostAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {}

	render() {
		// render all of our injected components onto the dashboard
		return (
			<div>
				<h1>Add New Post</h1>
				<form id="post-data">
					<TitleInput />
					<BodyInput />
				</form>
			</div>
		)
	}
}