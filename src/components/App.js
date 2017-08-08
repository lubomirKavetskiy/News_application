import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from "./ArticleList";
import ArticleChart from './ArticleChart';


class App extends Component {

    static propTypes = {

    };

    render() {
        return(
            <div>
                <ArticleList art={this.props.artic}/>
                <ArticleChart art={this.props.artic}/>
            </div>

        );
    }

}

export default App;