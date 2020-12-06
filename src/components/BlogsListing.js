import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Inner from './Grid';
import dateCleaner from '../utils/date-cleaner';

function BlogListing({posts}) {

  const TimeStamp = ({time}) => {
    console.log('time->', time)
    return (
      <small>
        Posted on: {dateCleaner(time)}
      </small>
    )
  }

  const Post = () => {
    return (
      posts.map((post, key) => (
        <div key={key}>
          <TimeStamp time={post.date}/>
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