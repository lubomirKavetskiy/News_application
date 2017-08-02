import React from 'react';
import Article from "./Article";

export default function ArticleList({art}) {
    const articleElement = art.map(ar => <li key={ar.id}><Article article={ar} /></li>);
    return(
        <ul>
            {articleElement}
        </ul>
    );
}