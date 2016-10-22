// Content.js
import React from 'react';
import { Link } from 'react-router';
// import components
import * as Components from "../../../plugins";
import PostFeed from "../post/components/postFeed"

export default class Content extends React.Component {
  render() {
    return (
      <div>
        im in the content js  
    		<PostFeed postData={this.props.post} />
    	</div>
    )
  }
}
