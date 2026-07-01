// import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white py-5"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <Container>
        <Row className="align-items-center gy-4 text-center text-md-start">
          {/* Left Column: Contact Details */}
          <Col
            md={4}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <h5
              className="text-uppercase tracking-wide mb-3"
              style={{ fontSize: "1.1rem", letterSpacing: "1px" }}
            >
              Get In Touch
            </h5>
            <div className="d-flex align-items-center mb-2 text-white-50 small">
              <FontAwesomeIcon icon={faEnvelope} className="me-2 text-white" />
              <span>kr12@hotmail.com</span>
            </div>
            <div className="d-flex align-items-center text-white-50 small">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-2 text-white" />
              <span>717-555-1234</span>
            </div>
          </Col>

          {/* Middle Column: Central Action Button */}
          <Col md={4} className="d-flex justify-content-center">
            <Button
              variant="outline-light"
              className="rounded-0 px-4 py-2 text-uppercase fw-semibold"
              style={{
                letterSpacing: "1px",
                fontSize: "0.85rem",
                borderWidth: "1.5px",
              }}
            >
              Contact Me
            </Button>
          </Col>

          {/* Right Column: Socials & Copyright */}
          <Col
            md={4}
            className="d-flex flex-column align-items-center align-items-md-end text-md-end"
          >
            {/* Social Icons Layout */}
            <div className="d-flex gap-3 mb-3 fs-5">
              <a href="#linkedin" className="text-white hover-opacity">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#facebook" className="text-white hover-opacity">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#twitter" className="text-white hover-opacity">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            {/* Copyright */}
            <p className="small text-white-50 m-0">Copyright &copy; 2019 KR</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
