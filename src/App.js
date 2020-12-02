import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect , useState } from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Nav from "./components/Nav";
import { fetchPosts } from "./utils/posts-fetcher";
import Test from "./components/Test";

function App() {
  const [posts, setPosts] = useState({});
  const [theme, setTheme] = useState('false');

  useEffect(() => {
    async function fetchEndPoints() {
      let getPosts = await fetchPosts('https://kennykrosky.com/wp-json/wp/v2/posts')
      setPosts(getPosts)
    }
    fetchEndPoints()
  }, [])


  return (
    <div className={`App ${theme == 'true' ? 'dark' : 'light'}`}>
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
            path="/:slug"
            render={(props) => <Article articles={posts} slug={props}/>}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
