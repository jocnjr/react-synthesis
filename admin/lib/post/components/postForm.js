// Dashboard.js
import React from 'react';
// import ALL components from plugin/index.js


export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {}

  // addComponent(e) {
  //   let pluginName = e.target.previousSibling.value;
  //   this.saveComponentsToDB(pluginName);
  // }

  // saveComponentsToDB(pluginName) {
  //   let that = this;
  //   let mount_point = Components[pluginName + 'Data'].mount_point;

  //   let componentObj = {
  //     name: pluginName,
  //     mount_point: mount_point
  //     // spoofed
  //     // get data from plugin component
  //     // plugin_properties: []
  //   }

  //   let xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = () => {
  //     if(xhr.status === 200 && xhr.readyState === 4) {
  //       that.props.addComponent(componentObj);
  //     }     
  //   }
  //   xhr.open('POST', '/api/plugin');
  //   xhr.setRequestHeader('Content-Type', 'application/json');
  //   xhr.send(JSON.stringify(componentObj));
  // }

  render() {
    // render all of our injected components onto the dashboard
    return (
    	<div>
	    	<h1>Synthesis Post Form</h1>
    	</div>
    )
  }
}