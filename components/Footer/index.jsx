import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className="pt-3 text-white bg-dark" background="blue">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" className="text-center align-self-center">
            <h5 className="title">
              Tuluminati X  <MDBIcon far icon="building" />
            </h5>
            <p>Find the property of your dreams...</p>
          </MDBCol>
          <MDBCol md="6" className="text-center">
            <h6 className="title">MR. Jean Paul</h6>
            <ul className="px-0">
              <li className="d-inline m-2">
                <a
                  className="text-white"
                  // href="https://github.com/"
                  target="_blank"
                >
                  <MDBIcon
                    fab
                    icon="github"
                    className="mt-2"
                    style={{ fontSize: "1em" }}
                  />
                </a>
              </li>
              <li className="d-inline m-1">
                <a
                  className="text-white"
                  href="https://www.linkedin.com/in/alain-raimond-kedilhac-ruiz-54711920a/"
                  target="_blank"
                >
                  <MDBIcon
                    fab
                    icon="linkedin"
                    className="mt-2"
                    style={{ fontSize: "1em" }}
                  />
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Develop{" "}
          {/* <span className="text-danger">&#10084;&#65039;</span> par{" "}
          <a href="" className="text-white"> </a> */}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
