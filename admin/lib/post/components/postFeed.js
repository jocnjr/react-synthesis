import React from 'react';
import Post from './Post';
import PostFeedItem from './PostFeedItem';

export default class PostFeed extends React.Component {
  render() {
    let postDataObj = this.props.postData;
    let postData = [];

    for(let post in postDataObj) {
      postData.push(postDataObj[post]);
    }

  	let posts = postData.map(post => {
  		return (
  			<PostFeedItem key={post._id} postData={post} />
  		)
  	})
    return (
    	<div className="post-feed">
        <div className="post-feed-header">Recent Articles</div>
    		{posts}
    	</div>
    )
  }
}