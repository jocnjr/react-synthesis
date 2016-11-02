// Content.js
import React from 'react';
import { Link } from 'react-router';
// import components
import * as Components from '../../../plugins';
import PostFeed from '../post/components/PostFeed';
import LeadHero from '../leadHero/components/LeadHero';

export default class Content extends React.Component {
  render() {
    return (
      	<div>
      		<LeadHero postData={this.props.posts} />
    		<PostFeed postData={this.props.posts} />
    	</div>
    )
  }
}