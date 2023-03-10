import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

function PortfolioCards(props) {
  return (
    <Card className="portfolio-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>{props.techstack}</Card.Text>
        <Button
          style={{ margin: "0.5rem" }}
          variant="primary"
          href={props.ghLink}
          target="_blank"
        >
          <BsGithub /> &nbsp; View on GitHub
        </Button>
        <Button
          style={{ margin: "0.5rem" }}
          variant="primary"
          href={props.link}
          target="_blank"
        >
          <FiExternalLink /> &nbsp; View Deployed App
        </Button>
      </Card.Body>
    </Card>
  );
}
export default PortfolioCards;
