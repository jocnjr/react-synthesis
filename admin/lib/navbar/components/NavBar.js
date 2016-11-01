// NavBar.js

// App.js
import React from 'react';
import { Link } from 'react-router';

export default function NavBar(props) {
  let logStatus;
  let signedIn = localStorage.getItem('token');

  if(signedIn) {
    logStatus = <h5 onClick={props.logoutUser}><Link to="/">logout</Link></h5>
  } else {
    logStatus = <h5><Link to="/login">login</Link></h5>
  }
  return (
		<nav className="main-nav">
			<div className="main-nav-logo">
				<h1>synthesis</h1>
			</div>
			<div className="main-nav-links">
        {logStatus}
				<h5><Link to="/">home</Link></h5>
				<h5><Link to="/dashboard">dashboard</Link></h5>
			</div>
		</nav>
  )
}