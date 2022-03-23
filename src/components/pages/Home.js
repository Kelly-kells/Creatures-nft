import React from 'react'
import {Col, Row, Container,Button} from "react-bootstrap"
export const Home = () => {
  return (

 <div>
   <Container className='container'>
<Row >
  <Col className="page-one-text animate__animated animate__delay-2s animate__fadeInLeft" >
     <h1>First P2E Tower Defense <br/>game
on Blockchain.</h1>
<Button className='btn-play'>Play</Button>
</Col >
  <Col  className="page-one-creature">
  <img className='animate__animated animate__delay-2s animate__fadeInRight' src=" https://media.discordapp.net/attachments/954712064054669372/955145689325776916/Wei.png?width=369&height=369" alt="" />
  <img className='creature2 animate__animated animate__delay-1s animate__fadeInRight' src="https://media.discordapp.net/attachments/954712064054669372/955145689531289671/WitchWei.png?width=369&height=369" alt="" />
  </Col>

</Row>
 </Container>
 </div>
      
    
  )
}
