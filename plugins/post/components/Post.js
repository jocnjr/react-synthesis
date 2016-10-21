// Post.js
import React from 'react';
import { Link } from 'react-router';

export default class Post extends React.Component {
  render() {
    return (
  		<div className="content-page-post" key={this.props.postData._id}>
  			<h4><Link to='/post'>{ this.props.postData.title }</Link></h4>
  			<p>{ this.props.postData.body }</p>
  			<br />
  		</div>
    )
  }
}
