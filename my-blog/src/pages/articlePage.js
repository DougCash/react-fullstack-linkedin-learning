import React, { useState, useEffect } from 'react';
import articleContent from './articleContent'
import ArticlesList from '../components/articlesList'
import NotFoundPage from './notFoundPage';


const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

    useEffect(() => {
        setArticleInfo({upvotes: 3});
    })

    if (!article) return <NotFoundPage />

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <React.Fragment>
            <h1>{article.title}</h1>
            <p>This article has been upvoted {articleInfo.upvotes} times</p>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h2>Related Articles:</h2>
            <ArticlesList articles={otherArticles} />
        </React.Fragment>
    );
}

export default ArticlePage;