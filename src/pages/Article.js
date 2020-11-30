import React, {useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';


function Article(props) {
  const [currentPost, setCurrentPost ] = useState({});

  useEffect(() => {
    if(props.articles.length >= 1) {

      props.articles.forEach((article) => {
        if(article.slug === props.slug.match.params.slug) {
          setCurrentPost(article)
        }
      })
    }

  }, [props]);

  const RenderPost = () => {
    if(currentPost.id) {
      return (
        <div>
          <h1>{currentPost.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{__html: currentPost.content.rendered}}></div>
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
      <LazyLoad>
        <RenderPost/>
      </LazyLoad>
    </div>
  )
}

export default Article;