import React, {Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';


class ArticleChart extends Component{

    static propTypes = {

    };

    componentDidMount() {
        $(this.refs.chart).css({'background': 'green'});
    };

    render() {
        return(
            <div  ref = "chart"/>
        );
    }

}

export default ArticleChart;

