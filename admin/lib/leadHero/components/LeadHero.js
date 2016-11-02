// LeadHero.js
import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {
  	let featuredKey = Object.keys(this.props.postData)[0];
  	let featured = this.props.postData[featuredKey];
  	let featuredTitle = '';
  	let postUrl;

  	if (featured) {
  		featuredTitle = featured.title;
  		postUrl = '/post/' + featured._id;
  	}

    return(
    	<div className="LeadHero">
    		<div className="LeadHeroContainer col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
	    		Featured:
	    		<h1 className="LeadHero-title">{featuredTitle}</h1>
	    		<Link to={postUrl}><button className="LeadHero-cta">Read More</button></Link>
	    	</div>
    	</div>
    )
  }
}