import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {articles} from "./fixture";
// import ArticleList from "./components/ArticleList";

render(<App artic={articles} />, document.getElementById('container'));