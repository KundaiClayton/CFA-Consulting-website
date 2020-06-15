import React, { useState } from 'react'
import {Jumbotron, Container,Row,Col,Image,Button} from 'react-bootstrap';
import person from '../components/graduate.svg'
import background from '../components/graduate.svg'
import {useSpring,animated} from 'react-spring'

var personStyle={
  width:"60%"
}
var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${ background })`
};

const  Services=()=>{
 
  const props =  useSpring({
    vector: [0, 10, 30],
    display: 'block',
    padding: 20,
    background: 'linear-gradient(to bottom, #E4EFE9, #93A5CF)',
    transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
    borderBottom: '10px solid #2D3747',
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
    textShadow: '0px 5px 15px rgba(255,255,255,0.5)'
  })
    return (
      
      <animated.div id="services" style={sectionStyle,props}>
      <Jumbotron>
         <h2>Welcome to CFA Consultancy</h2>
         <p>This is how you build a site with React and React-Bootstrap balllllllll</p>
         
       </Jumbotron>
       <Container >
      
       
      <Row className="show-grid text-center">
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src={person} roundedCircle style={personStyle} className="profile-pic"/>
           <h3>Charlton</h3>
           <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src={person} roundedCircle style={personStyle} className="profile-pic"/>
           <h3>Charlton</h3>
           <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src={person} roundedCircle style={personStyle} className="profile-pic"/>
           <h3>Charlton</h3>
           <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
         </Col>
      </Row>
    </Container>
    </animated.div>
    )
  }
export default Services
