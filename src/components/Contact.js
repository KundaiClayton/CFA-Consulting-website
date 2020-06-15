import React ,{Component} from 'react';
import {Jumbotron, Container,Row,Col,Image,Button} from 'react-bootstrap';
 class Contact extends Component {
  render() {
    return (
      <Container style={{background:"#111",height:"100%",color:"red"}} id="contact">
      <h1>Contacts</h1>
      <Jumbotron >
        <h2>Welcome to CFA Consultancy</h2>
        <p>This is how you build a site with React and React-Bootstrap balllllllll</p>
        
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
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="../public/assets/person1" roundedCircle className="profile-pic"/>
           <h3>Charlton</h3>
           <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="../public/assets/person1" roundedCircle className="profile-pic"/>
           <h3>Charlton</h3>
           <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="../public/assets/person1" roundedCircle className="profile-pic"/>
           <h3>Charlton</h3>
           <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="../public/assets/person1" roundedCircle className="profile-pic"/>
           <h3>Charlton</h3>
           <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="../public/assets/person1" roundedCircle className="profile-pic"/>
           <h3>Charlton</h3>
           <p>Chibabababbab chiDiesel engine, chi chi chimdara chacho ,inzwa inini</p>
         </Col>
         <Col xs={12} sm={4} className="person-wrapper">
           <Image src="../public/assets/person1" roundedCircle className="profile-pic"/>
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
export default Contact;
