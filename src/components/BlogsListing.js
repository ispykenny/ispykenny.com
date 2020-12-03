import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Article from '../pages/Article';

function BlogListing(props) {

  const TimeStamp = (data) => {
    let postedDate = moment(data.time).format('MMMM Do YYYY')
    return (
      <small>
        Posted on: {postedDate}
      </small>
    )
  }

  return (
    <div className="inner">
      <h3 className="section-title">
        Recent articles
      </h3>
      <div className="blog-listing">
        { props.posts.map((post, key) => (
          <div key={key}>
            <h4>{post.title.rendered}</h4>
            <TimeStamp time={post.date}/>
            <div dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>
            <Link 
              to={`/${post.slug}`}>
                View
            </Link>

            <hr/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogListing;