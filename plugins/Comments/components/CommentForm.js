// CommentForm.js
import React from 'react';

export default function CommentForm(props) {
    return(
    	<div className="form-group">
    		<input className="form-control comment-box" 
    			placeholder="Your name" 
    			onChange={(e) => {props.updateInput(e, "author")}} 
    			value={props.author} />
        <textarea className="form-control comment-box" 
        	placeholder="Say something" 
        	onChange={(e) => {props.updateInput(e, "comment")}} 
        	value={props.comment}  />          
    		<button className="btn btn-default comment-submit" onClick={(e) => {props.addComment(e)}}>Enter</button>
    	</div>
    );
};
