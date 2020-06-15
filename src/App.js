import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Image,Jumbotron,Row} from 'react-bootstrap'
//import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CustomNav from './components/CustomNav';

function App() {
  return (
    <div className="text-center">
    <CustomNav/>
       <Home/>
      <About/>
      <Services/>
     
    
    </div>
  );
}

export default App;
