// PluginManager.js
import React from 'react';

export default class PluginManager extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'PluginManager';
  }
  render() {
    return (
    	<div>
    		<h3>Plug-in Manager</h3>
        <select>
	        <option value="PostFeed">Post Feed</option>
	        <option value="PostManager">Post Manager</option>
	        <option value="Collection">Data Manager</option> 
	        <option value="Comments">Comments</option> 
        </select>
        <button className="btn btn-default" onClick={(e) => {this.props.addComponent(e)}}>Add Plugin</button>
      </div>
    )
  }
}


