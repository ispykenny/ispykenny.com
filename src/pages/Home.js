import React, {useEffect, useState} from 'react';
import BlogListing from '../components/BlogsListing';
import Inner from '../components/Grid';
import Hero from '../components/Hero';

const Home = (props) => {
  const [allBlogs, setAllBlogs] = useState({})

  useEffect(() => {
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
          <h4>Fetching blogs...</h4>
        </Inner>
      )
    }
  }

  return (
    <div className="home">
      <Hero 
        title={`Hello 👋, I'm Kenny Krosky. I'm a front end developer enthusiastic about all things <span id="css-text">CSS</span> and <span id="js-text">JavaScript</span>.`} 
        copy={`I'm a family man with two little girls and a rad wife. When I'm not coding or designing things for the web or software then I could usually be found sipping on a cup of coffee while playing some board games with my girls.`}/>
      <Posts/>
    </div>
  )
}

export default Home;