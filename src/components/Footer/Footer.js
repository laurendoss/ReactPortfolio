import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import"./Footer.css"

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer id="footerElement"  fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
              <MDBCol md="4">
                  <ul>
                  <li className="list-unstyled">
                      <a href="/">Home</a>
                      </li>
                  <li className="list-unstyled">
                      <a href="/portfolio">Portfolio</a>
                      </li>
                  <li className="list-unstyled">
                      <a href="/contact">Contact</a>
                      </li>
                  </ul>
              </MDBCol>
            </p>
          </MDBCol>
      
        </MDBRow>
      </MDBContainer>
     
    </MDBFooter>
  );
}

export default FooterPage;