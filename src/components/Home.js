import React, { Fragment } from 'react'
import {Jumbotron, Container,Row,Col,Image,Button,Media} from 'react-bootstrap';
import './Home.css'
import Section from './Section'
import background from '../components/batch-books-document-education-357514.jpg'
import pic from '../components/BlackBusinessman.jpg';
import { Link } from 'react-scroll';
import {useSpring,animated} from 'react-spring'

var sectionStyle = {
  width: "100%",
  height: "9600px",
  opacity:"0.9",
  color:"blue",
  /*backgroundImage: `url(${ background })`*/
};

const Home =()=> {
  const props =  useSpring({
    vector: [0, 10, 30],
    display: 'block',
   // background: 'linear-gradient(to bottom, #E4EFE9, #93A5CF)',
    //background: 'linear-gradient(to bottom, #80D0C7, #93A5CF)',
    borderBottom: '10px solid #2D3747',
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
    textShadow: '0px 5px 15px rgba(255,255,255,0.3)'

  })
  const fade=useSpring({
    opacity:1, from :{opacity:0},delay:700
  })
  const svg = useSpring({ x: 100, from: { x: 0 } })
    return (
      <animated.div style={props}>
        <div id="Home"  style={{height:"660px",backgroundColor: "#1a1a69",width:"100%"}} >
          <Container  >
            <Row >
                <Col style={{marginTop:"10%",color:"white"}} md={6}>
                <Container style={{textAlign:"left",padding:"15%"}} >
                  <Media as="li">
                    <Media.Body  >
                  
                    <animated.h3 style={fade}>Specialists in Financial training when you succeed thats when we consider ourselves successful</animated.h3>
                    <br/>
                    <animated.p style={fade}>The core of oyr business is rooted in you succeeding academically.We believe everyone can contribute to the body of knowledge in this world and our role is to enable such excellence</animated.p>
                    <br/>
                    <Button style={{backgroundColor:"green"}}>
                        <Link
                          activeClass="active"
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-88}
                          duration= {500}
                        >Hear More about Us
                        </Link>
                      </Button>
                     
                    </Media.Body>
                    </Media>
                  </Container>
                </Col>
                <Col className="disappear" md={6} style={{marginTop:"15%",color:"white"}}>
                  <Container>
                    <div strokeDashoffset={props.x}>
                      <h1>:::::::::::::::::::::::::::::::::::::::::::::</h1>
                      <h2>:::::::::::::::::::::::::::::::::::::::::::::::</h2>
                      <h1>:::::::::::::::::::::::::::::::::::::::::::::</h1>
                      <h2>:::::::::::::::::::::::::::::::::::::::::::::::</h2>
                      <h1>:::::::::::::::::::::::::::::::::::::::::::::</h1>
                    </div>
                  </Container>
                
                </Col>
                
            </Row>
          </Container>
        </div> 
        <Section/>
     </animated.div>
     
    )
  }

export default Home