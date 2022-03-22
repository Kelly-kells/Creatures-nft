import React from 'react'
import {Col, Row, Container,Button} from "react-bootstrap"
export const Home = () => {
  return (

 <div>
   <Container className='container'>
<Row>
  <Col lg={6} sm={12} className="page-one-text animate__animated animate__delay-2s animate__fadeInLeft" >
     <h1>First P2E Tower Defense <br/>game
on Blockchain.</h1>
<Button className='btn-play'>Play</Button>
  </Col>
  
</Row>
 </Container>
 </div>
      
    
  )
}
