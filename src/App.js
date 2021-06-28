import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect  } from 'react';
import Home from './pages/Home';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Contact from './pages/Contact'
// import Purge from "./pages/Purge";

// const data = require('/.netlify/functions/localendpoint.json');
// console.log(data)
const fetch_some_data = () => fetch('/localendpoint.js')
  .then((res) => res.json())
  .then((data) => data)
// const fetch_some_data = () => axios('/.netlify/functions/endpoints?type=rebuild')
  // .then((res) => {
  //   return res
  // })
  .catch((error) => console.log(error))


  
  
  function App() {
    useEffect(() => {
      fetch_some_data().then((res) => console.log(res))
    }, [])



  return (
    <div className={`App`}>
      <Router>
        <Nav
        />
        <Switch>
          <Route 
            path="/" 
            exact 
            render = {(props) => <Home/> }
          />
          {/* <Route
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
          */
          <Route
            path="/letstalk"
            render={(props) => <Contact/>}
          /> /* 
          {/* <Route
            path="/:slug"
            render={(props) => <Article articles={posts} slug={props}/>}
          /> */}
          {/* <Route
            path="/purge"
            render={() => <Purge />}
          /> */}
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
