// import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col md={6} className="text-white ps-md-5">
            <h1 className="display-4 fw-bold mb-3">Katie Reed</h1>
            <p className="lead fs-3 mb-4">Web Developer & Designer</p>
            <Button
              variant="outline-light"
              className="rounded-0 px-4 py-2 text-uppercase fw-semibold"
              style={{ letterSpacing: "1px", fontSize: "0.85rem" }}
            >
              Contact Me
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
