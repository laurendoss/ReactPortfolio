import React from 'react';  
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavFooter.css';



function NavBarFooter () {
    return (
      <Navbar id="navFoot" bg="light" expand="lg" >
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home" className="navLink">Home</Nav.Link>
      <Nav.Link href="/portfolio" className="navLink">Projects</Nav.Link>
      <Nav.Link href="/Resume" className="navLink">Resume</Nav.Link>
      <Nav.Link href="/contact" className="navLink">Contact</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
    ); 
}

export default NavBarFooter; 