// Content.js
import React from 'react';
import { Link } from 'react-router';
// import components
import * as Components from "../../../plugins";

export default class Content extends React.Component {
  render() {
    return (
    	<div>
    		<PostFeed postData={this.props.posts} />
    	</div>
    )
  }
}
