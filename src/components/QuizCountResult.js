import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, eraseCounter } from "../redux/slices/counterSlice";
import { useLocation } from "react-router-dom";

export default function QuizCountResult() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const counter = state.result;
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30%",
        }}
      >
        {" "}
        <div
          style={{ width: "60%", border: "1px solid black", padding: "25px" }}
        >
          <h5>Quiz Result</h5>
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
    </div>
  );
}
