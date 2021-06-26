import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect , useState } from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Nav from "./components/Nav";
import { fetchPosts } from "./utils/posts-fetcher";
import Footer from './components/Footer';
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import axios from 'axios'

// const data = require('/.netlify/functions/localendpoint.json');
// console.log(data)
const fetch_some_data = () => axios('/localendpoint.js')
// const fetch_some_data = () => axios('/.netlify/functions/endpoints?type=rebuild')
  .then((res) => {
    return res
  })
  .catch((error) => console.log(error))


  
  
  function App() {
    const [posts, setPosts] = useState({});
    const [theme, setTheme] = useState('false');
    
    useEffect(() => {
      fetch_some_data().then((res) => console.log(res))
      // fetch_some_data();

    async function fetchEndPoints() {
      let getPosts = await fetchPosts('https://kennykrosky.com/wp-json/wp/v2/posts')
      setPosts(getPosts)
    }
    fetchEndPoints()

  }, [])


  return (
    <div className={`App ${theme === 'true' ? 'dark' : 'light'}`}>
      <Router>
        <Nav
          setTheme={setTheme}
          theme={theme}
        />
        <Switch>
          <Route 
            path="/" 
            exact 
            render = {(props) => <Home blogs={posts}/> }
          />
          <Route
            path="/blogs"
            exact
            render={(props) => <Blogs blogs={posts}/> }
          />
          <Route
            path="/about"
            exact
            component={About}
          />
          <Route
            path="/work"
            exact
            component={Work}
          />
          <Route
            path="/letstalk"
            component={Contact}
          />
          <Route
            path="/:slug"
            render={(props) => <Article articles={posts} slug={props}/>}
          />
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
