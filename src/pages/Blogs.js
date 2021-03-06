import React, {useState, useEffect} from 'react';
import BlogListing from '../components/BlogsListing';
import Inner from '../components/Grid';
import Hero from '../components/Hero';

const Blogs = (props) => {
  const [allBlogs, setAllBlogs] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
    if(props.blogs.length >= 1) {
      setAllBlogs(props.blogs);
    }
  }, [props]);

  const Posts = () => {
    if(allBlogs.length >= 1) {
      return <BlogListing posts={allBlogs}/>
    } else {
      return (
        <Inner>
          <div style={{minHeight: 500}}><h4>Fetching blogs...</h4></div>
        </Inner>
      )
    }
  }

  return (
    <div className="blogs">
      <Hero
        title="I try to write sometimes..."
        copy="<p>I write about tech, remote-working, and other randomness.</p>"
        showSocial={false}
      />
      <Posts/>
    </div>
  )
}

export default Blogs;