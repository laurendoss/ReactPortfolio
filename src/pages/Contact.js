import React from 'react'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactCard from '../components/Contact/Contact'




function HomePage () {


    return (
      <div className="App">
      <Container fluid>
        <Row>
        <Col md={{ offset: 4 }}>
        <ContactCard/>
        </Col>
        </Row>
        </Container>
       

      </div>
    );
  }


export default HomePage; 