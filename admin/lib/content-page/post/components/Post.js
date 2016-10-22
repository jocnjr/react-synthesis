// Post.js
import React from 'react';

export default class Post extends React.Component {
  render() {
  	let bodyPreview = this.props.postData.body;
  	bodyPreview = bodyPreview..substring(0,10);
    return (
  		<div className="content-page-post" key={this.props.postData._id}>
  			<h3>{ this.props.postData.title }</h3>
  			<p>{ bodyPreview }</p>
  			<br />
  		</div>
    )
  }
}
