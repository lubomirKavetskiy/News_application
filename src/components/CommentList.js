import React, {Component} from 'react';
import Comment from "./Comment";
import toggleOpen from '../decorators/toggleOpen';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    render() {
        const text = !this.props.isOpen ? 'show comment' : 'hide comment';

        return(
            <div>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getComment()}
            </div>
        );
    }

    getComment() {
        // if(!this.state.isOpen) return null;

        const {comments, isOpen} = this.props;

        if(!isOpen) return null;

        if(!comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(com => <li key={com.id}><Comment comment = {com} /></li>)}
            </ul>
        );
    }
}

export default toggleOpen(CommentList);