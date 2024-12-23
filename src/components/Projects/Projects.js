import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gasLeak from "../../Assets/Projects/gas_leak.png";
import amazonClone from "../../Assets/Projects/amazon_clone.png"
import virtualMouse from "../../Assets/Projects/virtual_mouse.jpg"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gasLeak}
              isBlog={false}
              title="Gas Leak Detection"
              description="Engineered an IoT-based alert system, delivering results within fractions of a second. Seamlessly integrated OpenWeather API to enhance functionality. Identified threat zones within a 20 km radius of the Leakage Area. Achieved 98% accuracy in identifying threat zones and detecting gas leaks using IoT solutions."
              ghLink="https://github.com/rajumullangi/Threat-zone-identification-system"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonClone}
              isBlog={false}
              title="Amazon Clone"
              description="Developed a user-centric e-commerce platform with scalable architecture. Implemented features, including Login/Signup, Add to Cart, and Checkout, along with 10+ additional functionalities. Optimized data retrieval and storage by utilizing MongoDB for efficient database operations. Designed and implemented the back-end architecture using Node.js, Express.js, and MongoDB."
              ghLink="https://github.com/rajumullangi/Amazon-clone-main-mern"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualMouse}
              isBlog={false}
              title="Gesture Driven Virtual Mouse"
              description="Developing a virtual mouse system for seamless human-computer interaction. Utilizing OpenCV and MediaPipe for accurate hand gesture detection with a response time under 700 milliseconds. Achieved an error rate of less than 2% in video capture from the webcam."
              // ghLink=""
              // demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
