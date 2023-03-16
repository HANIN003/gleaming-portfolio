import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME INTRODUCE <span className="gold"> MYSELF </span>
            </h1>
            <p className="home-about-body">
              I've always had an interest in programming and after many years I
              have finally took the plunge into the world of computer languages.
              Now I am eager to learn more and develop my skillset to the
              fullest.
              <br />
              <br />
              I have study some of the programming languages like
              <i>
                <b className="gold"> Javascript. </b>
              </i>
              <br />
              <br />
              My interest now is building my&nbsp;
              <i>
                <b className="gold">knowledge and experience </b> to further my
                potential in this field.
              </i>
              <br />
              <br />I also apply my passion for developing products with{" "}
              <b className="gold">Node.js</b>,{" "}
              <b className="gold">Express.js</b>, <b className="gold">Apollo</b>{" "}
              and
              <i>
                <b className="gold">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="gold"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="gold">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HANIN003"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nathan-hanisch-1598491a1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/natehanisch"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
