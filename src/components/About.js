import React, { Component } from 'react'
import {Container,Col,Image,Jumbotron,Row,Card} from 'react-bootstrap'
import person from '../components/graduate.svg'
import styled from 'styled-components';
var sectionStyle = {
  width: "100%",
  height: "100%",
  opacity:"0.9",
  color:"#333",
  fontFamily:"Inconsolata",
backgroundColor:"white"
};

var personStyle={
  width:"40%"
}
const Styles = styled.div`
  .showGrid {
    background-color: #4444;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #ccc;
    &:hover {
      color: white;
    }
  }
`;
export default class About extends Component {
  render() {
    return (
      <Styles id="about" style={sectionStyle}>
      
       <Row style={{backgroundColor:"#d4e4e6"}}>
        <Container>
          <h1 style={{color:"black",marginTop:"3rem",textAlign:"center"}}>We cultivate young leaders that will drive the future of Tech innovation</h1>
          <br/>
          <Container>
          <h5 style={{color:"#4ac66",marginBottom:"3rem"}}>Founded in 2017, we are a Cape Town based technology 
            company aiming to bridge the skills gap 
            between education and the industry.
            </h5>
            </Container>
        </Container>
       </Row>
       <br/>
       <Row>
         <Container>
           <h3 style={{color:"black"}}><strong>Meet Our Awesome Team</strong></h3>
           <br/>
           <Row>
            <Col xl>
              <Image src={person} roundedCircle style={personStyle} className="profile-pic"/>
              <h4>Charlton Chatambudza</h4>
              <hr style={{width:"60%"}}></hr>
              <h6>CEO</h6>
              <hr style={{width:"30%"}}></hr>
            </Col>
            <hr></hr>
            <Col md>
               <Image src={person} roundedCircle style={personStyle} className="profile-pic"/>
               <h4>Kundai Clayton</h4>
               <hr style={{width:"60%"}}></hr>
              <h6>Upskilling Lead</h6>
              <hr style={{width:"30%"}}></hr>
            </Col>
            <Col md>
               <Image src={person} roundedCircle style={personStyle} className="profile-pic"/>
               <h4>Diana Roberts</h4>
               <hr style={{width:"60%"}}></hr>
              <h6>Upskilling Lead</h6>
              <hr style={{width:"30%"}}></hr>
            </Col>
            <br/>
           </Row>
         </Container>
         <br/>
       </Row>
      { /**
       <Row>
       <Col >
               <Image src={person} roundedCircle style={{width:"15%"}} className="profile-pic"/>
               <h4>Diana Roberts</h4>
               <hr style={{width:"60%"}}></hr>
              <h6>Operations</h6>
              <hr style={{width:"30%"}}></hr>
            </Col>
       </Row>
       */}
       <br/>
     </Styles>
     
    )
  }
}
