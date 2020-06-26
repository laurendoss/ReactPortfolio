import React from 'react'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Photo from '../components/Image/Image'
import AboutMe from '../components/AboutMe/AboutMe'
import TechCard from '../components/TechCard/TechCard'



function HomePage () {


    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 2}}>
        <Photo/>
        </Col>
        <Col md={{ span: 4, offset: 2}}>
        <AboutMe/>
        </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2}}>
        <TechCard/>
        </Col>
        </Row>
        </Container>

      </div>
    );
  }


export default HomePage; 