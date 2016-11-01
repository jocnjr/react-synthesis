// CommentForm.js
import React from 'react';

export default function CommentForm(props) {
    return(
    	<div className="form-group">
    		<input className="form-control comment-box" 
    			placeholder="leave your name" 
    			onChange={(e) => {props.updateInput(e, "author")}} 
    			value={props.author} />
        <input className="form-control comment-box" 
        	placeholder="leave a comment" 
        	onChange={(e) => {props.updateInput(e, "comment")}} 
        	value={props.comment} />          
    		<button className="btn btn-default" onClick={(e) => {props.addComment(e)}}>Enter</button>
    	</div>
    );
};
