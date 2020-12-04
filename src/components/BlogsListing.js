import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Inner from './Grid';

function BlogListing({posts}) {

  const TimeStamp = (data) => {
    let postedDate = moment(data.time).format('MMMM Do YYYY')
    return (
      <small>
        Posted on: {postedDate}
      </small>
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
        {console.log(posts)}
        {posts.map((post, key) => (
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
        ))}
      </div>
    </Inner>
  )
}

export default BlogListing;