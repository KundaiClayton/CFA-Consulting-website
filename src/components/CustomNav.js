import React from 'react';
import { Link } from 'react-scroll';
import { Nav, Navbar ,Container} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color:#1a1a69;
    color:white;
    
  }
  .nav-links{
    margin: 0px 16px;
    color:white
  }
  
  a,h1, .navbar-brand, .navbar-nav, Link{
    color: white;
  
    &:hover {
      color: white;
    }
  }
`;

 const CustomNav = () => (

  <Styles >
    <Container>
    <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-2" expand="md" scrolling fixed="top">
      <Container>
      <Navbar.Brand href="/"> <h1 >CFA</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-responsive" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto my-2 my-lg-0 nav-links">
          <Nav.Item  className="nav-links">
            <Link
  
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
              >Home
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-links">
            <Link
              
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
            >About
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-links">
            <Link
             
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
            >Contact
            </Link>
          </Nav.Item>
          <Nav.Item className="nav-links">
            <Link
              
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
            >Services
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  </Styles >
)
export default CustomNav