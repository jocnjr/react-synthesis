// postFeedItem.js
import React from 'react';
import { Link } from 'react-router';

export default function PostFeedItem (props) {
  	let postUrl = '/post/' + props.postData._id;

  	let postPreview = props.postData.body.split(' ');
  	postPreview = postPreview.splice(0,30)
  	
  	let postString = postPreview.join(' ');
  	postString += '...';

    return (
  		<div className="content-page-post" key={props.postData._id}>
  			<h4><Link to={postUrl}>{ props.postData.title }</Link></h4>
  			<p>{ postString }</p>
  			<p><Link to={postUrl}>Read more</Link></p>
  		</div>
    )
}