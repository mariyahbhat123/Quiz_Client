import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function QuizCardHor(props) {
  const quizName = props.quizName;
  const image = props.image;
  const text = props.text;
  const width = props.width;
  const height = props.height;
  const langName = props.langName;

  return (
    <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
      <Card className="text-center" style={{ width: "60%" }}>
        <Card.Header>
          <h4>{quizName} QUIZ</h4>
        </Card.Header>
        <Card.Body>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "40%" }}>
              <Card.Img src={image} style={{ width: width, height: height }} />
            </div>

            <div style={{ width: "60%" }}>
              <Card.Text>{text}</Card.Text>{" "}
            </div>
          </div>
        </Card.Body>
        <Card.Footer>
          <Link
            className="me-5"
            to="/Single"
            state={{
              langName: langName,
              quizType: "single",
            }}
          >
            Single Selection Quiz
          </Link>
          <Link
            to="/Multiple"
            state={{
              langName: langName,
              quizType: "multiple",
            }}
          >
            Multiple Selection Quiz
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
}
