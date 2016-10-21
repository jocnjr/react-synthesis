// Comment.js
import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	postId: this.props.postData._id,
    	comments: [],
    	input: ''
    }
    this.getCommentsFromDB = this.getCommentsFromDB.bind(this);
  }

  componentDidMount() {
  	if(this.props.postData._id === undefined) {
  		let idString = window.location.pathname.split("/post/")[1];
  		this.state.postId = idString;
  	}
  	this.getCommentsFromDB();
  }

  getCommentsFromDB() {
  	let that = this;
  	let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        that.filterComments(JSON.parse(xhr.responseText));
      }     
    }
    xhr.open('GET', '/api/comments');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
  }

  filterComments(commentData) {
  	let postId = this.state.postId;
  	let filteredComments = commentData.filter(comment => {
  		if(comment.post_id === postId) {
  			return comment;
  		} 
  	})
  	this.setState({comments: filteredComments});
  }

  updateInput(e) {
  	let newInput = e.target.value;
  	this.setState({input: newInput});
  }

  addComment() {
  	let comment = this.state.input;
  	let postId = this.state.postId;

  	let commentObj = {};
  	commentObj.post_id = postId;
  	commentObj.body = comment;
  	// placeholder
  	commentObj.author = 'Mario';
  	commentObj.author_email = 'Mario@email.com';
  	// end placeholder

  	let commentList = this.state.comments.slice();
  	commentList.push(commentObj);
  	this.setState({comments: commentList});

  	this.saveCommentToDB(commentObj)
  	this.clearInput();
  }

  saveCommentToDB(commentObj) {
  	let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        console.log('saved')
      }     
    }
    xhr.open('POST', '/api/comment');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(commentObj));
  }

  clearInput() {
  	let input = '';
  	this.refs.commentInput.value = input;
  	this.setState({input: input});
  }

  render() {
  	let commentList = this.state.comments.map((comment, i) => {
  		return <div key={i}>{comment.body}</div>
  	})
  	
    return (
    	<div>
    		Comments
    		<input ref="commentInput" placeholder="leave a comment" onChange={(e) => {this.updateInput(e)}} />
    		<button onClick={(e) => {this.addComment(e)}}>Enter</button>
    		<div className="comment-list">
    			{commentList}
    		</div>
    	</div>
    )
  }
}

module.exports = Comment;
