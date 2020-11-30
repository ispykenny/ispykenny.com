import React, {useEffect, useState } from 'react';


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
        <div>
          Loading..
        </div>
      )
    }
  }


  return (
    <div className="inner">
      <RenderPost/>
    </div>
  )
}

export default Article;