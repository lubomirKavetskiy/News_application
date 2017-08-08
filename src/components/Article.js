import React, {Component} from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';
import CommentList from "./CommentList";


class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
                                    id: PropTypes.string.isRequired,
                                    title: PropTypes.string.isRequired,
                                    text: PropTypes.string
                                }).isRequired
    };


    render() {
        // const {isOpen} = this.state; *using decorator state => it will be props
        const {article, isOpen, toggleOpen} = this.props;

        return(
          <div ref={this.setContainerRef}>
              <h3>{article.title}</h3>
              <button onClick={toggleOpen}>
                  {isOpen ? 'close' : 'open'}
              </button>
              {this.getBody()}
          </div>
        );
    }

    setContainerRef = ref => {
        this.container = ref;
        console.log(ref);
    };

    getBody() {
        // if (!this.state.isOpen)return null;   *using decorator state => it will be props

        const {article, isOpen} = this.props;

        if (!isOpen)return null;
        return (
            <section>
                {article.text}
                <CommentList comments={article.comments}/>
            </section>
        );
    }
}

export default toggleOpen(Article);
