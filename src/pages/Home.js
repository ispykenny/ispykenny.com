import React, {useEffect, useState} from 'react';
import BlogListing from '../components/BlogsListing';
import Hero from '../components/Homehero';
function Home(props) {
  const [allBlogs, setAllBlogs ] = useState({})

  useEffect(() => {
    if(props.blogs.length >= 1) {
      setAllBlogs(props.blogs);
    }
  }, [props]);

  const Posts = () => {
    if(allBlogs.length >= 1) {
      return <BlogListing posts={allBlogs}/>
    } else {
      return (<div>loading Posts...</div>)
    }
  }

  return (
    <div className="home">
      <Hero title={`Hello 👋, I'm Kenny Krosky. I'm a front end developer enthusiastic about all things <span id="css-text">CSS</span> and <span id="js-text">JavaScript</span>.`}/>
      <Posts/>
    </div>
  )
}

export default Home;