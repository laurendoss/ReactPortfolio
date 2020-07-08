import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import expressJS from '../../images/express.png'
import html5 from '../../images/html5.png'
import cssPng from '../../images/css.png'
import jsPng from '../../images/javascript.png'
import mongoDB from '../../images/mongo.jpg'
import sqlPng from '../../images/mySQL.png'
import nodeJS from '../../images/nodeJS.png'
import reactJS from '../../images/reactJS.png'
import './style.css'

function TechCard(){

    return(
        <Container fluid>
            <Row>
        <div id="cardHolder">
        <Card id="techImgHolder">
  <Card.Body>
      <h3 id="header">Languages/Technologies</h3>
  <img className="techImages" src ={expressJS} alt="expressJS" />
  <img className="techImages" src ={mongoDB} alt="mongoDB" />
  <img className="techImages" src ={reactJS} alt="reactJS" />
  <img className="techImages" src ={nodeJS} alt="nodeJS" />
  <img className="techImages" src ={jsPng} alt="javascript" />
  <img className="techImages" src ={sqlPng} alt="mySQL" />
  <img className="techImages" src ={html5} alt="html5" />
  <img className="techImages" src ={cssPng} alt="css3" />
 
  </Card.Body>
</Card>
</div>
</Row>
</Container>

    )

}

export default TechCard; 