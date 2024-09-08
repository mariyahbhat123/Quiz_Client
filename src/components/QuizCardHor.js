import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/QuizCarHor.css";

export default function QuizCardHor(props) {
  const quizName = props.quizName;
  const image = props.image;
  const text = props.text;
  const width = props.width;
  const height = props.height;
  const langName = props.langName;

  return (
    <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
      <Card className="cardParentContainer text-center">
        <Card.Header style={{ backgroundColor: "#bdd7d6" }}>
          <h4>{quizName} QUIZ</h4>
        </Card.Header>
        <Card.Body className="cardBodyContainer">
          <div className="cardBody">
            <div className="cardImageContainer">
              <Card.Img
                className="cardImage"
                src={image}
                style={{ width: width, height: height }}
              />
            </div>

            <div className="cardTextContainer" style={{ width: "60%" }}>
              <Card.Text>{text}</Card.Text>{" "}
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="cardFooterContainer">
          <Link
            className="cardLink"
            to="/Single"
            state={{
              langName: langName,
              quizType: "single",
            }}
          >
            <ArrowForwardIcon className="cardArrowIcon" /> Single Selection Quiz
          </Link>

          <Link
            className="cardLink"
            to="/Multiple"
            state={{
              langName: langName,
              quizType: "multiple",
            }}
          >
            <ArrowForwardIcon className="cardArrowIcon" /> Multiple Selection
            Quiz
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
}
