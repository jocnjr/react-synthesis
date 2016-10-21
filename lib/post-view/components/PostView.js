// PostView.js
import React from 'react';
import { Link } from 'react-router';
// import components
// import * as Components from "../../plugins";

export default class PostView extends React.Component {
  render() {
    let postData = this.props.posts[this.props.params.id];
    if(!postData) {
      postData = {title: 'post title', body: 'write something'}
    }
    return (
      <div id="post">
        <div>
          <div className="post-content">
            <div id="title">{postData.title}</div>
            <div id="body">{postData.body}</div>
          </div>
          <div className="post-details">
            <div id="post-type"></div>
            <div id="post-status"></div>
          </div>
        </div>
      </div>
    )
  }
}

