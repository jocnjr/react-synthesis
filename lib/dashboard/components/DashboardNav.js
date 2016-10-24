// DashboardNav.js
import React from 'react';

export default class DashboardNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	let activePlugins = this.props.installedPlugins.map((plugin, i) => {
  		return <li key={i} data-name={plugin.name}>{plugin.name}</li>;
  	});

    return (
    	<div>
    		<nav>
    			<h2>Synthesis Dashboard</h2>
    			<ul onClick={(e) => this.props.changeView(e)}>
		    		<li data-name="settings">Settings</li>
		    		<li data-name="pluginManager">Plugin Manager</li>
		    		{activePlugins}
		    	</ul>
	    	</nav>
   		</div>
   	)
  }
}
