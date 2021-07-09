import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Contact from './pages/Contact'
    
function App() {
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
          <Route
            path="/letstalk"
            render={(props) => <Contact/>}
          />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
