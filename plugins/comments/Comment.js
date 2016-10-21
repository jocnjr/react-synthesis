// Comment.js
import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	comments: []
    }
  }

  componentDidMount() {}

  render() {


  	
    return (
    	<div>
    		Comments
    		<input placeholder="leave a comment" />
    		<div className="comment-list">

    		</div>
    	</div>
    )
  }
}

module.exports = Comment;
