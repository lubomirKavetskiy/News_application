import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'
import {articles} from "./fixture"

render(<ArticleList art={articles} />, document.getElementById('container'));