// Comment.js
import React from 'react';
import CommentForm from './CommentForm';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	postId: this.props.postData._id,
    	comments: [],
    	commentInput: '',
      authorInput: ''
    }
    this.getCommentsFromDB = this.getCommentsFromDB.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
  	// if directed straight to view, get post id from window location
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
  	// loop through comments, returning ones for current post
  	let postId = this.state.postId;
  	let filteredComments = commentData.filter(comment => {
  		if(comment.post_id === postId) {
  			return comment;
  		} 
  	})
  	this.setState({comments: filteredComments});
  }

  updateInput(e, input) {
  	// update state with changing input from comment box
    if (input === 'author') {
      let authorInput = e.target.value;
      this.setState({authorInput});
    } else if (input === 'comment') {
      let commentInput = e.target.value;
      this.setState({commentInput});
    }
  }

  addComment() {
    let comment = this.state.commentInput;
    let author = this.state.authorInput;
    let postId = this.state.postId;
  	// build comment object
    let commentObj = {};
  	commentObj.post_id = postId;
  	commentObj.body = comment;
  	commentObj.author = author;

  	// push comments to comment list in state
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
  	this.setState({commentInput: input, authorInput: input});
  }

  render() {
  	let commentList = this.state.comments.map((comment, i) => {
  		return <div key={i} className="comment"><span>{comment.author}</span>{comment.body}</div>
  	})
  	
    return (
    	<div className="col-md-6 col-md-offset-3 comment-section">
    		<h4>Leave a comment</h4>
        <CommentForm author={this.state.authorInput} 
          comment={this.state.commentInput} 
          updateInput={this.updateInput} 
          addComment={this.addComment} />
    		<div className="comment-list">
          <h4>Comments</h4>
    			{commentList}
    		</div>
    	</div>
    )
  }
}

module.exports = Comment;
