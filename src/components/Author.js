import React from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/me.jpg'

const Author = ({articles, currentPost}) => {
  const AdditionalArticles = () => {
    return (
      <ul>
        { articles.map((article, index) => (
          <li key={index}>
            <Link to={`/${article.slug}`}>{article.title.rendered}</Link>
          </li>
        )) }
      </ul>
    )
  }

  return (
    
    <div className="article__item">
      <div className="author__inner">
        <strong>Other articles ({ articles.length })</strong>
        <AdditionalArticles/>
      </div>
    </div>
  )
}

export default Author;