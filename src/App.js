import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CustomNav from './components/CustomNav';

function App() {
  return (
    <div className="text-center">
      <Router>
        <CustomNav/>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/About" component={About}/>
            <Route  path="/services" component={Services}/>
            <Route  path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
