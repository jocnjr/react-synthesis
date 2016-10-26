// NavBar.js

// App.js
import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
  		<nav className="main-nav">
  			<div className="main-nav-logo">
  				<h1>synthesis</h1>
  			</div>
  			<div className="main-nav-links">
  				<h5><Link to="/login">login</Link></h5>
  				<h5><Link to="/">home</Link></h5>
  				<h5><Link to="/dashboard">dashboard</Link></h5>
  			</div>
  		</nav>
    )
  }
}