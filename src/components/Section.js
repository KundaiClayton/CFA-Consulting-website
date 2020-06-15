import React,{Fragment} from 'react'
import {Container,Row,Col,Card,Image,Media} from 'react-bootstrap'
import './Section.css'
import person from '../components/graduate.svg'
import person1 from '../components/teacher.svg'
import person2 from '../components/study.svg'
import person3 from '../components/certificate.svg'

var personStyle={
  width:"20%"
}
const Section=()=>{
  
  return (
   <Fragment id="section">
      <Container style={{marginTop:"3rem"}}>
        <h3><strong>Our Services</strong></h3>
        <br/>
      <Row style={{marginBottom:"1rem"}}>
      <Col xl >
          <Container>
          <Image src={person} roundedCircle style={personStyle} className="profile-pic"/>
          <Container>
            <h5>Academic Research</h5>
          </Container>
          <Container style={{width:"18rem"}}>
            <p>We offer quality and excellent academic research help that is relevant
              for the disciplines they are studying.
            </p>
            <hr></hr>
          </Container>
          </Container>
        </Col>
       
        <br/>
        <Col xl >
          <Container >
          <Image src={person1} roundedCircle style={personStyle} className="profile-pic"/>
          <Container>
           <h5>Tutoring Services</h5>
          </Container>
          <Container style={{width:"18rem"}}>
            <p >We offer unique and innovative approaches to teaching
              that helps students connect with the subject matter they need 
              to master through a personalised and focused teaching process.
            </p>
            <hr></hr>
          </Container>
          </Container>
        </Col>
        <Col xl>
          <Container>
          <Image src={person2} roundedCircle style={personStyle} className="profile-pic"/>
          <h5>Tutoring Services</h5>
          <Container style={{width:"18rem"}}>
            <p >We offer unique and innovative approaches to teaching
              that helps students connect with the subject matter they need 
              to master through a personalised and focused teaching process.
            </p>
            <hr></hr>
          </Container>
          </Container>
        </Col>
      
      </Row>
      <Row>
        <Col xl>
          <Container> 
          <Image src={person} roundedCircle style={personStyle} className="profile-pic"/>
          <h5>Academic Research</h5>
          <br/>
          <Container style={{width:"18rem"}}>
            <p>We offer quality and excellent academic research help that is relevant
              for the disciplines they are studying.
            </p>
            <hr></hr>
          </Container>
          </Container>
        </Col>
        <Col xl>
          <Container >
          <Image src={person1} roundedCircle style={personStyle} className="profile-pic"/>
          <Container>
           <h5>Tutoring Services</h5>
          </Container>
          <br/>
          <Container style={{width:"18rem"}}>
            <p >We offer unique and innovative approaches to teaching
              that helps students connect with the subject matter they need 
              to master through a personalised and focused teaching process.
            </p>
            <hr></hr>
          </Container>
          </Container>
        </Col>
        <Col xl>
          <Container>
          <Image src={person2} roundedCircle style={personStyle} className="profile-pic"/>
          <h5>Tutoring Services</h5>
          <br/>
          <Container style={{width:"18rem"}}>
            <p >We offer unique and innovative approaches to teaching
              that helps students connect with the subject matter they need 
              to master through a personalised and focused teaching process.
            </p>
            <hr></hr>
          </Container>
          </Container>
        </Col>
        
        
      </Row>
      <br/>
    </Container>
  </Fragment>)
}
export default Section
