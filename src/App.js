import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect , useState } from 'react';
import Home from './pages/Home';
import Nav from "./components/Nav";
import { fetchPosts } from "./utils/posts-fetcher";

function App() {
  const [posts, setPosts] = useState({});
  const [mounted, setMount ] = useState(false);

  useEffect(() => {
    async function fetchEndPoints() {
      let getPosts = await fetchPosts('https://kennykrosky.com/wp-json/wp/v2/posts')

      setPosts(getPosts)
    }

    fetchEndPoints()
  }, [])


  return (
    <div className="App">
      {console.log(posts)}
      <Router>
        <Nav/>

        <Switch>
          <Route 
            path="/" exact component={Home}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
