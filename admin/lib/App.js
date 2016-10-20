// App.js
import React from 'react';

// import components
import NavBar from './navbar/components/Navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.getComponents = this.getComponents.bind(this);
  }

  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if(xhr.status === 200 && xhr.readyState === 4) {
        this.getComponents(JSON.parse(xhr.responseText));
      }     
    }
    xhr.open('GET', '/api/plugins');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
  }

  getComponents(pluginData) {
    let plugins = [];
    pluginData.forEach(plugin => {
      plugins.push(plugin);
    })
    this.props.getComponents(plugins);
  }

  render() {
    return (
    	<div>
    		<NavBar hasToken={this.props.user} />
    		<div className="main-container">
					{React.cloneElement(this.props.children, this.props)}
				</div>
    	</div>
    )
  }
}
