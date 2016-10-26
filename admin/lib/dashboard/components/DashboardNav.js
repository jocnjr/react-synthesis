// DashboardNav.js
import React from 'react';

export default class DashboardNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  	let activePlugins = this.props.installedPlugins.map((plugin, i) => {
  		return <li key={i} data-name={plugin.name} className="dashboard-nav-link">{plugin.name}</li>;
  	});

    return (
    	<div className="dashboard-nav-container">
    		<nav>
    			<h4>Dashboard</h4>
    			<ul className="dashboard-nav" onClick={(e) => this.props.changeView(e)}>
		    		<li className="dashboard-nav-link" data-name="settings">Settings</li>
		    		<li className="dashboard-nav-link" data-name="pluginManager">Plugin Manager</li>
		    		{activePlugins}
		    	</ul>
	    	</nav>
   		</div>
   	)
  }
}
