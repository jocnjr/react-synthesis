// Content.js
import React from 'react';
import { Link } from 'react-router';
// import components
import * as Components from "../../plugins";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.components)
    // map through component array from the redux store
    let injectedComponents = this.props.components.map((component, i) => {
      // lookup the component from plugin/index.js by referencing with 
      // the component title, that is stored in the component array
      let ComponentElem = Components[component.name];
      // create the element
      if (component.mount_point === 'content') {
      	console.log(ComponentElem)
        return <ComponentElem key={i} />
      }
    })

    return (
    	<div>
    		{ injectedComponents }
    	</div>
    )
  }
}
