// Comment.js
import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	comments: [],
    	input: ''
    }
  }

  componentDidMount() {}

  updateInput(e) {
  	let newInput = e.target.value;
  	this.setState({input: newInput});
  }

  addComment() {
  	let comment = this.state.input;
  	let commentList = this.state.comments.slice();
  	commentList.push(comment);
  	this.setState({comments: commentList})
  	this.saveCommentToDB(comment)
  	this.clearInput();
  }

  saveCommentToDB(comment) {
  	let commentObj = {}
  	let postId = this.props.postData._id;
  	commentObj.post_id = postId;
  	commentObj.body = comment;

  	// placeholder
  	commentObj.author = 'Mario';
  	commentObj.author_email = 'Mario@email.com';
  	// end placeholder

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
  		return <div key={i}>{comment}</div>
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
