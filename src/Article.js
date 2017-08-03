import React, {Component} from 'react';
import CommentList from "./CommentList";
import Comment from "./Comment";

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    render() {
        const {isOpen} = this.state;

        return(
          <div>
              <h3>{article.title}</h3>
              <button onClick={this.toggleOpen}>
                  {isOpen ? 'close' : 'open'}
              </button>
              {this.getBody()}
          </div>
        );
    }

    getBody() {
        if (!this.state.isOpen)return null;

        const {article} = this.props;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        );
    }



    toggleOpen = () => {;
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
