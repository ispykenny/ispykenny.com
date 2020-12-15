import React from 'react';
import { Link } from 'react-router-dom';
import Inner from './Grid';
import dateCleaner from '../utils/date-cleaner';

function BlogListing({posts}) {

  const Post = () => {
    return (
      posts.map((post, key) => (
        <div key={key} tabIndex="0">
          <small>Posted on {dateCleaner(post.date)}</small>
          <h4>{post.title.rendered}</h4>
          <div dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>
          <Link 
            to={`/${post.slug}`}
            className="cta">
              View
          </Link>
        </div>
      ))
    )
  }

  return (
    <Inner>
      <div className="blog-listing">
        <div>
          <h3 className="section-title">
            Recent articles
          </h3>
        </div>
      </div>
      <div className="blog-listing">
        <Post/>
      </div>
    </Inner>
  )
}

export default BlogListing;