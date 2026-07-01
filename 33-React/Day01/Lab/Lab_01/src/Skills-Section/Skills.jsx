// import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  const skillData = [
    { name: "HTML", value: 95 },
    { name: "CSS", value: 95 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "Photoshop", value: 95 },
    { name: "Adobe XD", value: 85 },
    { name: "Node.js", value: 75 },
    { name: "WordPress", value: 65 },
  ];

  return (
    <div className="skills-section bg-dark text-white py-5">
      <Container className="py-4">
        {/* Top Header & Paragraph */}
        <Row className="justify-content-center text-center mb-5">
          <Col lg={9}>
            <h2 className="display-4 mb-4" style={{ fontFamily: "serif" }}>
              Skills
            </h2>
            <p className="text-light opacity-75 lh-base px-md-4">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </Col>
        </Row>

        {/* Bottom Core Content */}
        <Row className="align-items-start mt-4">
          {/* Left Column: My Focus List */}
          <Col md={6} className="text-center px-lg-5 mb-5 mb-md-0">
            <div
              className="focus-container mx-auto"
              style={{ maxWidth: "300px" }}
            >
              <h4 className="text-uppercase tracking-wider fw-semibold mb-2">
                My Focus
              </h4>
              <hr className="border-light border-2 opacity-100 my-3" />
              <ul className="list-unstyled lh-lg fs-5 opacity-90 mt-4">
                <li className="mb-2">UI/UX Design</li>
                <li className="mb-2">Responsive Design</li>
                <li className="mb-2">Web Design</li>
                <li className="mb-2">Mobile App Design</li>
              </ul>
            </div>
          </Col>

          {/* Right Column: Skill Progress Bars */}
          <Col md={6} className="px-lg-4">
            {skillData.map((skill, index) => (
              <div
                key={index}
                className="d-flex align-items-center mb-3 custom-progress-wrapper"
              >
                {/* Fixed width dark label block */}
                <div className="skill-label text-center text-white fw-medium py-1">
                  {skill.name}
                </div>
                {/* The actual progress bar filling the rest of the flex container */}
                <div className="flex-grow-1">
                  <ProgressBar
                    now={skill.value}
                    className="rounded-0 custom-bar"
                    variant="light"
                  />
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
