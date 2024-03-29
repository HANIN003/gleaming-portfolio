import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "./PortfolioCards";
// import Particle from "../Particle";
import daam from "../../assets/DAAM-Screenshot.png";
import curious from "../../assets/Curious-Appetite.png";
import google from "../../assets/Google-Book-Search.png";
import travel from "../../assets/Travel-Planning.png";

function Portfolio() {
  return (
    <Container fluid className="portfolio-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="portfolio-heading">
          My Recent <strong className="gold">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few applications I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="portfolio-card">
            <PortfolioCard
              imgPath={daam}
              title="DAAM"
              description="A group project created to help users decide on what to eat and what to watch. Users select their cuisine and genre and the app makes a randomized selection of both, so go ahead and Roll the Dice!"
              techstack="HTML | JS | CSS | API"
              ghLink="https://github.com/Sephadeus/DAAM-App"
              link="https://sephadeus.github.io/DAAM-App/homepage.html"
            />
          </Col>

          <Col md={4} className="portfolio-card">
            <PortfolioCard
              imgPath={curious}
              title="Curious Appetite"
              description="A group project created so user can share recipes or find a new one. Users can also comment on recipes they may have tried."
              techstack="JS | CSS | SCSS"
              ghLink="https://github.com/HANIN003/curious-appetite"
              link="https://obscure-shore-43973.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="portfolio-card">
            <PortfolioCard
              imgPath={google}
              title="Google-Book-Search"
              description="A project demonstrating an app using the MERN stack to search for books using a Google API. Technologies involved are React, MongoBD, Node.js and Express.js."
              techstack="JS | Apollo | Node | MongoDB"
              ghLink="https://github.com/HANIN003/dont-get-merned"
              link="https://mysterious-bastion-01744.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="portfolio-card">
            <PortfolioCard
              imgPath={travel}
              title="Travel-Planning-App"
              description="A group project demonstrating an app that allows users to search for a location for their vacation, set a budget and save their trip for later viewing. "
              techstack="JS | React | Node.js | MongoDB"
              ghLink="https://github.com/julianbenchimol/trip-budget-manager"
              link="https://packandgo.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Portfolio;
