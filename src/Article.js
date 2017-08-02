import React, {Component} from 'react';
import Comment from "./Comment";

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            // isShow: false
        }
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        // const body = isOpen ? <section>{article.text}</section> : null;

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
        if (!this.state.isOpen) {
            return null;
        } else {
            const {article} = this.props;
            // const {isShow} = this.state;
            // const com = this.state.isOpen ? null : article.comments.map(com => {
            //     return(
            //         <ul>
            //             <li key={com.id}>{com.ext}{com.user}</li>
            //         </ul>
            //     );
            // });
            const com = article.comments.map(com => {
                return(
                    <li key={com.id}>{com.text} {com.user} </li>
                );
            });

            // let getComment;

            // if (!isShow) {
            //     getComment = null;
            //
            // } else {
            //     getComment = ;
            // }

            return (
                <div>
                    <section>{article.text}</section>
                    {/*<button onClick={this.toggleShow}>{!isShow ? 'show comment' : 'hide comment'}</button>*/}
                    <Comment comment={com}/>
                    {/*{getComment}*/}
                </div>
            );
        }
    }




    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen,
            isShow: false
        });
    }

    // toggleShow = () => {
    //     this.setState({
    //         isShow: !this.state.isShow
    //     })
    // }
}
