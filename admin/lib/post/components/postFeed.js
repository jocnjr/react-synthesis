import React from 'react';
import Post from './Post';

export default class PostFeed extends React.Component {
  render() {
    let postDataObj = this.props.postData;
    let postData = [];

    for(let post in postDataObj) {
      postData.push(postDataObj[post]);
    }

  	let posts = postData.map(post => {
  		return (
  			<Post key={post._id} postData={post} />
  		)
  	})
    return (
    	<div>
    		{posts}
    	</div>
    )
  }
}