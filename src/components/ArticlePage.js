import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
    const { articleId } = useParams();

    return (
        <div>
            <h1>Статья {articleId}</h1>
            <p>Содержимое статьи {articleId}.</p>
        </div>
    );
};

export default ArticlePage;
