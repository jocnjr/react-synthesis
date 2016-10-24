// PluginManager.js
import React from 'react';

export default class PluginManager extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'PluginManager';
  }
  render() {
  	let installedPlugins = this.props.installedPlugins;
  	let installedList = installedPlugins.map((plugin, i) => {
  		return(
  			<div key={i}>
  				{plugin.name}
  				<button className="btn-default btn" onClick={() => {this.props.deleteComponent(plugin)}}>Uninstall</button>
  			</div>
  		)
  	})

    return (
    	<div>
    		<h3>Plug-in Manager</h3>
    		<br />
    		<div className="plugin-installer">
    			<h4>Add Plugins</h4>
	        <select>
		        <option value="PostFeed">Post Feed</option>
		        <option value="PostManager">Post Manager</option>
		        <option value="Collection">Data Manager</option> 
		        <option value="Comments">Comments</option> 
	        </select>
	        <button className="btn btn-default" onClick={(e) => {this.props.addComponent(e)}}>Add Plugin</button>
        </div>
        <br />
        <div className="installed-plugin-list">
        	<h4>Installed Plugins</h4>
        	{installedList}
        </div>
      </div>
    )
  }
}


