// LeadHero.js
import React from 'react';
import { Link } from 'react-router';

export default function Signup(props) {
	let featuredKey = Object.keys(props.postData)[0];
	let featured = props.postData[featuredKey];
	let featuredTitle = '';
	let postUrl;
  let ctaButton;
  let heroStyle = {};
  let isFeatured;

	if (featured) {
		featuredTitle = featured.title;
		postUrl = '/post/' + featured._id;
	}

  //check if home route
  if (window.location.pathname === '/') {
    isFeatured = <h5>Featured article</h5>
    ctaButton = <Link to={postUrl}><button className="LeadHero-cta">Read More</button></Link>;
  } else {
     heroStyle.height = '15em'
  }

  return(
  	<div className="LeadHero" style={heroStyle}>
  		<div className="LeadHeroContainer col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
        {isFeatured}
    		<h1 className="LeadHero-title">{featuredTitle}</h1>
        {ctaButton}
    	</div>
  	</div>
  )
}