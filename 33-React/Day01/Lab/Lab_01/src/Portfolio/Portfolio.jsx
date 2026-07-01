// import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Portfolio.css"; // For custom backgrounds, shadows, and underlines

const Portfolio = () => {
  const projects = [
    { title: "WEB DESIGN", hasUnderline: true, isDark: false },
    { title: "MOBILE DESIGN", hasUnderline: true, isDark: true },
    { title: "LOGO DESIGN", hasUnderline: true, isDark: false },
    { title: "WEB APPLICATION DEVELOPMENT", hasUnderline: false, isDark: true },
    {
      title: "MOBILE APPLICATION DEVELOPMENT",
      hasUnderline: false,
      isDark: false,
    },
    { title: "PWA DEVELOPMENT", hasUnderline: false, isDark: true },
  ];

  return (
    <Container className="my-5 py-5">
      {/* Title */}
      <h2
        className="display-4 mb-5 ps-3 ps-md-0"
        style={{ fontFamily: "serif" }}
      >
        Portfolio
      </h2>

      {/* Grid of Cards */}
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <Card
              className={`portfolio-card border-0 rounded-0 shadow-sm text-center d-flex align-items-center justify-content-center p-4 ${
                project.isDark ? "card-dark" : "card-light"
              }`}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <Card.Title
                  className={`text-uppercase fw-semibold m-0 tracking-wide ${
                    project.hasUnderline ? "underlined-title" : ""
                  }`}
                  style={{ fontSize: "0.95rem", letterSpacing: "1px" }}
                >
                  {project.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
