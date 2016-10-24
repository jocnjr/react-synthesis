// Dashboard.js
import React from 'react';
// import ALL components from plugin/index.js
import * as Components from '../../plugins';
import DashboardNav from './components/DashboardNav';
import PluginManager from './components/PluginManager';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: 'pluginManager'
    }
    this.addComponent = this.addComponent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.saveComponentsToDB = this.saveComponentsToDB.bind(this);
  }

  componentDidMount() {}

  addComponent(e) {
    let pluginName = e.target.previousSibling.value;
    this.saveComponentsToDB(pluginName);
  }

  changeView(e) {
    let selected = e.target.getAttribute('data-name');
    this.setState({activeView: selected})
  }

  saveComponentsToDB(pluginName) {
    let that = this;
    let mount_point = Components[pluginName + 'Data'].mount_point;

    let componentObj = {
      name: pluginName,
      mount_point: mount_point
      // spoofed
      // get data from plugin component
      // plugin_properties: []
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        that.props.addComponent(componentObj);
      }     
    }
    xhr.open('POST', '/api/plugin');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(componentObj));
  }

  render() {
    let renderSynthComponent = ''
    // instantiate array of active components to pass to nav
    let dashboardPlugins = [];
    // map through component array from the redux store
    let injectedComponents = this.props.components.map((component, i) => {
      // lookup the component from plugin/index.js by referencing with 
      // the component title, that is stored in the component array
      let ComponentElem = Components[component.name];
      // create the element
      if (component.mount_point === 'dashboard') {
        dashboardPlugins.push(component);
        // if the component name is equal to the active state component, render it
        if (component.name === this.state.activeView) return <ComponentElem key={i} />
      }
    })

    // list of pre-installed components
    let synthComponents = {
        pluginManager: <PluginManager installedPlugins={this.props.components} addComponent={this.addComponent} />
    }
    // check if component is active
    if (synthComponents[this.state.activeView]) {
      renderSynthComponent = synthComponents[this.state.activeView]
    }

    // render all of our injected components onto the dashboard
    return (
    	<div>
        <DashboardNav changeView={this.changeView} installedPlugins={dashboardPlugins} />
        {renderSynthComponent}
        {injectedComponents}
    	</div>
    )
  }
}