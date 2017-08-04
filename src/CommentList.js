import React, {Component} from 'react';
import Comment from "./Comment";

export default class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    state = {
        isShow: false,
    };


    render() {
        const text = !this.state.isShow ? 'show comment' : 'hide comment';

        return(
            <div>
                <button onClick={this.toggleShow}>{text}</button>
                {this.getComment()}
            </div>
        );
    }

    getComment() {
        if(!this.state.isShow) return null;

        const {comments} = this.props;

        if(!comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(com => <li key={com.id}><Comment comment = {com} /></li>)}
            </ul>
        );
    }

    toggleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        });
    }
}