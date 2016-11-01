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

    let availPlugins = this.props.localPlugins.map((plugin, i) => {
      if (plugin !== 'PostFeed') {
        return <option key={i} value={plugin}>{plugin}</option>
      }
    })

    return (
    	<div>
    		<h3>Plug-in Manager</h3>
    		<br />
    		<div className="plugin-installer">
    			<h4>Add Plugins</h4>
          <h4 id="installConfirm">{this.props.installConfirm}</h4>
	        <select>
            {availPlugins}
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


