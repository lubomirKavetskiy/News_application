import React, {Component} from 'react';
import Comment from "./Comment";
import toggleOpen from '../decorators/toggleOpen';

function CommentList({comments = [], isOpen, toggleOpen}) {
    const text = !isOpen ? 'show comment' : 'hide comment';

    return (
        <div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </div>
    );
}


function getBody({comments, isOpen}) {
    if(!isOpen) return null;

    if(!comments.length) return <p>No comments yet</p>
    return (
        <ul>
            {comments.map(com => <li key={com.id}><Comment comment = {com} /></li>)}
        </ul>
    );
}


export default toggleOpen(CommentList);