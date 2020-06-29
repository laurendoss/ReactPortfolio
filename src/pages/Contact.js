import React from 'react'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Photo from '../components/Image/Image'
import ContactCard from '../components/Contact/Contact'




function HomePage () {


    return (
      <div className="App">
      <Container>
        <Row>
        <Col md={{ span: 6, offset: 3}}>
        <ContactCard/>
        </Col>
        </Row>
        </Container>
       

      </div>
    );
  }


export default HomePage; 