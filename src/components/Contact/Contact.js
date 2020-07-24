import React from 'react'; 
import Card from 'react-bootstrap/Card'
import './Contact.css'


function ContactCard (){
return (
    <div id="CardHolder">
    <Card id="ContactCard">
  <Card.Body>
      <h3>Contact Information</h3>
      <h6>Phone Number: 408-891-2183</h6>
      <h6>Email: doss.laurene@gmail.com</h6>
      <h6>GitHub: <a className="contactLink" href="https://github.com/laurendoss">github.com/laurendoss</a></h6>
    <h6>LinkedIn: <a className ="contactLink" href="https://linkedin.com/in/laurenelizabethpdx">linkedin.com/in/laurenelizabethpdx</a></h6>
  </Card.Body>
</Card>
</div>
)
}

export default ContactCard