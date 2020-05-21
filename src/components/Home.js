import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Container,Row,Col,Image,Button} from 'react-bootstrap';
import './Home.css'

class Home extends Component {
  render() {
    return (
     <Container>
      
       <Jumbotron>
         <h2>Welcome to CFA Consultancy</h2>
         <p>This is how you build a site with React and React-Bootstrap balllllllll</p>
         <Link to="/about">
          <Button className="primary">About</Button>
       </Link>
       </Jumbotron>
       <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="logo.svg" roundedCircle className="profile-pic"/>
            <h3>Charlton</h3>
            <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="../../public/assets/logo192.png" roundedCircle className="profile-pic"/>
            <h3>Charlton</h3>
            <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="../public/assets/person1" roundedCircle className="profile-pic"/>
            <h3>Charlton</h3>
            <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
          </Col>
       </Row>
     </Container>
    )
  }
}
export default Home