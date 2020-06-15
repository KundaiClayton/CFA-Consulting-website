import React, { Component } from 'react'
//import {Link} from 'react-router-dom';
import {Jumbotron, Container,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.css'

import background from '../components/batch-books-document-education-357514.jpg'
import pic from '../components/BlackBusinessman.jpg';
import { Link } from 'react-scroll';
var sectionStyle = {
  width: "100%",
  height: "100%",
  opacity:"0.9",
  color:"white",
  backgroundImage: `url(${ background })`
};

class Home extends Component {
  render() {
    return (
     <div id="Home" style={{marginTop:"30px"}} >
       <Container  >
         <Row >
            <Col md={4} sm={4} sm>
              <Image style={{width:"100%"}} src={pic}/>
            </Col>
            <Col md={8} sm={8} >
                <Container  style={{marginBottom:"40px"}}>
                  <h1>CFA Consultancy</h1>
                
                  <h2>Specialists in Financial training when you succeed thats when we consider ourselves successful</h2>
                  <h2>Contact us and get a tutor</h2>
                </Container>
                <button>
                <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-88}
              duration= {500}
            >Here More about Us</Link></button>
            </Col>
            
         </Row>
       </Container>
     </div> 
     
    )
  }
}
export default Home