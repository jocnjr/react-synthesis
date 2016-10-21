// Content.js
import React from 'react';
import { Link } from 'react-router';
// import components
import PostFeed from '../post/components/postFeed'

export default class Content extends React.Component {
  render() {
    return (
    	<div>
    		<PostFeed postData={this.props.posts} />
    	</div>
    )
  }
}
