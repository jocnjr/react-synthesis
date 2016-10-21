// PostView.js
import React from 'react';
import { Link } from 'react-router';
import * as Components from "../../../plugins/index.js";
// import components
// import * as Components from "../../plugins";

export default class PostView extends React.Component {
  render() {
    let postData = this.props.posts[this.props.params.id];
    if(!postData) {
      postData = {title: 'post title', body: 'write something'}
    }

    console.log(this.props)

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
        {injectedComponents}
      </div>
    )
  }
}

