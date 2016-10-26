// postFeedItem.js
import React from 'react';
import { Link } from 'react-router';

export default class PostFeedItem extends React.Component {
  render() {
  	let postUrl = '/post/' + this.props.postData._id;
    return (
  		<div className="content-page-post" key={this.props.postData._id}>
  			<h4><Link to={postUrl}>{ this.props.postData.title }</Link></h4>
  			<br />
  		</div>
    )
  }
}