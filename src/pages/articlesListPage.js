import React from 'react';

import ArticlesList from '../components/articlesList'
import articleContent from './articleContent'

const ArticlesListPage = () => (
    <React.Fragment>
    <h1>Articles</h1>
    <ArticlesList articles={articleContent} />
    </React.Fragment>
)

export default ArticlesListPage;