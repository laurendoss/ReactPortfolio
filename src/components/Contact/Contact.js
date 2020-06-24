import React from 'react'; 
import Card from 'react-bootstrap/Card'
import './Contact.css'


function ContactCard (){
return (
    <div id="CardHolder">
    <Card id="ContactCard">
  <Card.Body>
      <h1>Contact Information</h1>
      <h5>Phone Number: 408-891-2183</h5>
      <h5>Email: doss.laurene@gmail.com</h5>
      <h5>GitHub: <a className="contactLink" href="https://github.com/laurendoss">github.com/laurendoss</a></h5>
    <h5>LinkedIn: <a className ="contactLink" href="https://www.linkedin.com/in/laurendoss/">linkedin.com/in/laurendoss</a></h5>
  </Card.Body>
</Card>
</div>
)
}

export default ContactCard