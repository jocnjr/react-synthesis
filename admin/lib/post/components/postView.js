// PostView.js
import React from 'react';
import { Link } from 'react-router';
import * as Components from "../../../../plugins/index.js";
// import components
// import * as Components from "../../plugins";

export default class PostView extends React.Component {
  render() {
    let postData = this.props.posts[this.props.params.id];
    if(!postData) {
      postData = {title: 'post title', body: 'write something'}
    }

    // map through component array from the redux store
    let injectedComponents = this.props.components.map((component, i) => {
      // lookup the component from plugin/index.js by referencing with 
      // the component title, that is stored in the component array
      let ComponentElem = Components[component.name];
      // create the element
      if (component.mount_point === 'post-view') {
        return <ComponentElem key={i} postData={postData} />
      }
    })

    return (
      <div id="post" className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="post-content">
            <h3 id="title">{postData.title}</h3>
            <p id="body">{postData.body}</p>
          </div>
          <div className="post-details">
            <div id="post-type"></div>
            <div id="post-status"></div>
          </div>
        </div>
        <br />
        {injectedComponents}
      </div>
    )
  }
}