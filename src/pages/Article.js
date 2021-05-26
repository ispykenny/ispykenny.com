import React, {useEffect, useState } from 'react';
import Author from '../components/Author';
import dateCleaner from '../utils/date-cleaner';
import LazyLoad from 'react-lazyload'
import Inner from '../components/Grid'

const Article = (props) => {
  const [currentPost, setCurrentPost ] = useState({});

  useEffect(() => {
    console.log(props)
    window.scrollTo(0, 0)
    if(props.articles.length >= 1) {
      props.articles.forEach((article) => {
        if(article.slug === props.slug.match.params.slug) {
          setCurrentPost(article)
        }
      })
    }
  }, [props]);

  const CurrentPost = (props) => {
    return (
      <div className="article__item">
       <Inner>
       <div className="article__inner">
          <small>Posted on {dateCleaner(currentPost.date)}</small>
          <h1>{currentPost.title.rendered}</h1>
          <LazyLoad offset={100} height={5000}>
            <div dangerouslySetInnerHTML={{__html: currentPost.content.rendered}}></div>
          </LazyLoad>
        </div>
       </Inner>
      </div>
    )
  }


  const RenderPost = () => {
    if(currentPost.id) {
      return (
        <div className="article">
          <Author 
            articles={props.articles}
            currentPost={currentPost}
          />
          <CurrentPost/>
        </div>
      )
    } else {
      return (
        <h1>
          Loading..
        </h1>
      )
    }
  }


  return (
    <div className="inner content-area">
      
        <RenderPost/>
      
    </div>
  )
}

export default Article;