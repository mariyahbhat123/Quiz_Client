import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, eraseCounter } from "../redux/slices/counterSlice";
import { useLocation } from "react-router-dom";
import QuizNavbar from "./QuizNavbar";
import QuizFooter from "./QuizFooter";

export default function QuizCountResult() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const counter = state.result;
  return (
    <div>
      <div>
        <QuizNavbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
          marginBottom: "10%",
        }}
      >
        {" "}
        <div
          style={{
            width: "50%",
            border: "2px solid #7f9d9d",
            padding: "30px",
            backgroundColor: "#bdd7d6",
            fontFamily: "serif",
          }}
        >
          <div>
            <h5 style={{ fontWeight: "bold" }}>Quiz Result</h5>
          </div>
          <div
            className="d-flex"
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <h4>Total Score</h4>
            <h4 className="ms-5">{counter}/4</h4>
          </div>
          <div
            className="d-flex"
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <h4>Total Questions</h4>
            <h4 className="ms-5">4</h4>
          </div>
          <div
            className="d-flex"
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <h4>Attempted Answers</h4>
            <h4 className="ms-5">4</h4>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#7f9d9d", padding: "15px" }}>
        <QuizFooter />
      </div>
    </div>
  );
}
