import React from 'react'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cocktailImg from '../images/cocktail.png'
import dunderImg from "../images/dunder.png"
import noteImg from "../images/note.png"
import budgetImg from "../images/budget.png"
import cascadiaImg from "../images/cascadia.png"
import Project from '../components/Project/Project'



function Portfolio () {


    return (
      <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2}}>
        <Project
        name="Explore Cocktails"
        link="https://team-project-02.herokuapp.com/"
        src={cocktailImg}
        description="Full Stack Application where the user can search through a Mongo Database of Cocktails based off of a drink name or type of alcohol, the user can add their own drinks to the database, and can also see the recently added drinks."
        />
        </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2}}>
        <Project
        name="Dunder Mifflin Employee Directory"
        link="https://employee-directory-scranton.herokuapp.com/"
        src={dunderImg}
        description="React Application where the user can sort columns and search for a particular Employee within the Dunder Mifflin Scranton Employee Directory"
        />
        </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2}}>
        <Project
        name="Note Taker"
        link="https://new-note-taker.herokuapp.com/"
        src={noteImg}
        description="A Full Stack that allows the user to take notes, view past notes, and delete desired notes. "
        />
        </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2}}>
        <Project
        name="Budget Tracker"
        link="https://immense-journey-14942.herokuapp.com/"
        src={budgetImg}
        description="Full Stack Application where the user can enter deposits and expenses offline. Once the application is brought back online, the offline entries are added back into the tracker. This application utilized IndexedDB and MongoDB as its database."
        />
        </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2}}>
        <Project
        name="Explore Cascadia"
        link="https://dylanhulbert.github.io/project-01/"
        src={cascadiaImg}
        description="A responsive webpage utilizing data from the NPS (National Park Service) API and the Weather API. Using the data collected from the response, the user can see the park hours, directions, five day forecast, and two images of each of the parks upon selection from the dropdown."
        />
        </Col>
        </Row>
    
    </Container>
      </div>
    );
  }


export default Portfolio; 