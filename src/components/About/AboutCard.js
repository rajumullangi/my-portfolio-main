import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mullangi Raju </span>
            from <span className="purple"> Vijayawada, Andhra Pradesh, India.</span>
            <br />
            A passionate and driven final-year B.Tech student in Computer Science and Engineering at Lakireddy Bali Reddy College of Engineering.
            <br />
            I have consistently honed my skills in programming, problem-solving, and full-stack development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to songs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dream, build, innovate—repeat."{" "}
          </p>
          <footer className="blockquote-footer">Raju</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
