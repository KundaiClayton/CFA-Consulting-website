import React, { Component } from 'react'
import {Container,Col,Image} from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <div>
       <div>
         <Image src="../../public/logo192.png" className="header-image"/>
         <Container>
           <Col xs={12} sm={{span:8,offset:2}}>
            <img src="../../public/assets/person1.jpg" />
           </Col>
         </Container>
       </div>

      </div>
    )
  }
}
