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
  	this.clearInput();
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
