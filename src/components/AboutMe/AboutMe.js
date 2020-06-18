import React from 'react'; 
import Card from 'react-bootstrap/Card'
import './style.css'

function AboutMe () {

    return(
        <div id="cardHolder">
        <Card id="cardText">
  <Card.Body>
      <h3 id="header">About Me</h3>
      <p id="textBody">
      Full Stack Developer with a background in Biology and a life-long commitment 
      to the pursuit of opportunities to learn, develop new skills and provide value to others. 
      Utilizes problem-solving, time management, and critical thinking skills developed throughout 
      career in Quality Control to create user-friendly applications. Consistently work hard to 
      leverage as many training and educational opportunities I can, develop exceptional business and 
      analytical skills, be perceived as a highly valued employee and be recognized as a leader in my field. 
      </p>
      </Card.Body>
      
</Card>
</div>
    )
}

export default AboutMe; 