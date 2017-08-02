import React from 'react'
import {render} from 'react-dom'
import Article from './Article'
import {articles} from "./fixture"

render(<Article article={articles[0]} onClick=""/>, document.getElementById('container'));