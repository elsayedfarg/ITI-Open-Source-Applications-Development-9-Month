// import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container className="my-5 py-5">
      <Row className="align-items-start">
        {/* Left Column: Heading */}
        <Col md={4} className="mb-4 mb-md-0">
          <h2
            className="display-4 fw-normal text-secondary"
            style={{ fontFamily: "serif" }}
          >
            About me
          </h2>
        </Col>

        {/* Right Column: Paragraph Text & Button */}
        <Col md={8}>
          <p
            className="text-muted lh-base mb-4"
            style={{ fontSize: "1.05rem", textAlign: "justify" }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo.
          </p>

          <Button
            variant="dark"
            className="rounded-0 px-4 py-2 text-capitalize"
            style={{ backgroundColor: "#333333", border: "none" }}
          >
            Download Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
