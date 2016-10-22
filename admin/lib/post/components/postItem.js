import React from 'react';

export default class PostItem extends React.Component {
	render() {
		return (
			<div id="post">
				<div class="row">
					<div class="post-content">
						<div id="title"></div>
						<div id="body"></div>
					</div>
					<div class="post-details">
						<div id="post-type"></div>
						<div id="post-status"></div>
					</div>
				</div>
			</div>
		)
	}
}