import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I'm <span className="purple">Nate Hanisch </span>
            from <span className="purple"> Connecticut.</span>
            <br />I am recent graduate from the UConn Full Stack Flex Program.
            I've always had an interest in coding and an opportunity presented
            itself with a Bootcamp program, so I jumped right in. I've spent my
            career in television but I am ready to expand my field of knowledge
            and I hope this is the next direction my career will move forward
            in.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outdoor Adventures
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games and Board Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Spending Time With Family
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
