import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props){
        super(props);

        this.state = {
            isShow: false
        }
    }

    render() {
        const {comment} = this.props;
        const {isShow} = this.state;


        return(
            <div>
                <button onClick={this.toggleShow}>
                    {!isShow ? 'show comments' : 'hide comments'}
                </button>
                {!isShow? null : <ul>{comment}</ul>}

            </div>
        );
    }

    toggleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}