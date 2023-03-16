import React from "react";
import Card from "react-bootstrap/Card";
import { FaHiking, FaGamepad, FaPlane, FaCriticalRole } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I'm <span className="purple">Nate Hanisch </span>
            from <span className="purple"> Connecticut.</span>
            <br />I am a recent graduate from the UConn Full Stack Flex Program.
            I've always had an interest in coding and when the opportunity
            presented itself with a Bootcamp program, I jumped right in. I've
            spent my entire career in television but I am ready to expand my
            field of knowledge and I hope this is the next direction my career
            will move forward in.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <FaHiking /> Outdoor Adventures
            </li>
            <li className="about-activity">
              <FaGamepad /> Playing Video Games and Board Games
            </li>
            <li className="about-activity">
              <FaPlane /> Traveling
            </li>
            <li className="about-activity">
              <MdFamilyRestroom /> Spending Time With Family
            </li>
            <li className="about-activity">
              <FaCriticalRole /> And A Huge Fan of Critical Role
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
