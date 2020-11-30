import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect , useState } from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Nav from "./components/Nav";
import { fetchPosts } from "./utils/posts-fetcher";

function App() {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function fetchEndPoints() {
      let getPosts = await fetchPosts('https://kennykrosky.com/wp-json/wp/v2/posts')
      setPosts(getPosts)
    }
    fetchEndPoints()
  }, [])


  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route 
            path="/" 
            exact 
            render = {(props) => <Home blogs={posts}/> }
          />
          <Route
            path="/:slug"
            render={(props) => <Article articles={posts} slug={props}/>}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
