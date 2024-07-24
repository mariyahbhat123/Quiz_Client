import React, { useEffect, useMemo, useRef, useState } from "react";
import QuizNavbar from "./QuizNavbar";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuiz0,
  addQuiz1,
  addQuiz2,
  addQuiz3,
} from "../redux/slices/singleQuizAnsSlice";
import { addAnswers } from "../redux/slices/quizAnswersSlice";
import { addCounter, eraseCounter } from "../redux/slices/counterSlice";
import { countAns, decreaseCount } from "../redux/slices/countAnsSlice";
import {
  addMultipleQuiz0,
  addMultipleQuiz1,
  addMultipleQuiz2,
  addMultipleQuiz3,
} from "../redux/slices/multipleQuizSlice";

import "../styles/QuizComponent.css";

export default function (props) {
  const title = props.title;

  const question = props.question;
  const options = props.options;
  const quizType = props.quizType;
  const radioName = props.radioName;
  const checkName = props.checkName;
  const answer = props.answer;

  const handleRadioInputs = (e) => {
    if (e.target.name === "quiz0") {
      dispatch(addQuiz0(e.target.value));
    } else if (e.target.name === "quiz1") {
      dispatch(addQuiz1(e.target.value));
    } else if (e.target.name === "quiz2") {
      dispatch(addQuiz2(e.target.value));
    } else if (e.target.name === "quiz3") {
      dispatch(addQuiz3(e.target.value));
    }
  };

  const dispatch = useDispatch();

  const quiz = useSelector((state) => state.singleQuiz.quiz0);
  const quiz1 = useSelector((state) => state.singleQuiz.quiz1);
  const quiz2 = useSelector((state) => state.singleQuiz.quiz2);
  const quiz3 = useSelector((state) => state.singleQuiz.quiz3);

  // console.log(quiz, quiz1, quiz2, quiz3);

  // const answers = useSelector((state) => state.quizAnswers);
  // console.log(answers);
  // const counter = useSelector((state) => state.countAnswer.count);
  // console.log(counter);
  // const handleCount = () => {
  //   if (ans1 === quiz) {
  //     console.log("answer1");
  //     dispatch(addCounter(1));
  //   }
  //   if (ans2 === quiz1) {
  //     console.log("answer2");
  //     dispatch(addCounter(1));
  //   }
  //   if (ans3 === quiz2) {
  //     console.log("answer3");
  //     dispatch(addCounter(1));
  //   }
  //   if (ans4 === quiz3) {
  //     console.log("answer4");
  //     dispatch(addCounter(1));
  //   }
  //   dispatch(eraseCounter());
  // };
  const selectedAnswers = useSelector((state) => state.singleQuiz);

  // const hand = (data) => {
  //   setCorrectAnswers([...correctAnswers, data]);
  // };

  // var a;

  // var b;
  // var c;
  // var d;
  // const [correctAnswers, setCorrectAnswers] = useState([a, b, c, d]);
  // console.log("correct", correctAnswers);
  // console.log("a,b,c,d", a, b, c, d);

  // const handleAnswerrr = (e) => {
  //   if (e.target.name === "quiz0") {
  //     if (e.target.value === answers.ans1) {
  //       console.log("QUIZ0");
  //       dispatch(countAns(1));
  //       a = 1;
  //     } else {
  //       dispatch(countAns(0));
  //     }
  //   } else if (e.target.name === "quiz1") {
  //     if (e.target.value === answers.ans2) {
  //       console.log("QUIZ1");
  //       dispatch(countAns(1));
  //       b = 1;
  //     } else {
  //       dispatch(countAns(0));
  //     }
  //   } else if (e.target.name === "quiz2") {
  //     if (e.target.value === answers.ans3) {
  //       console.log("QUIZ2");
  //       dispatch(countAns(1));
  //       c = 1;
  //     } else {
  //       dispatch(countAns(0));
  //     }
  //   } else if (e.target.name === "quiz3" && e.detail !== 2) {
  //     if (e.target.value === answers.ans4) {
  //       console.log("QUIZ3", quiz3);

  //       if (e.target.value === answers.ans4) {
  //         dispatch(decreaseCount(1));
  //       }
  //       dispatch(countAns(1));
  //       d = 1;
  //     } else {
  //       return dispatch(countAns(0));
  //     }
  //   } else if (
  //     selectedAnswers.quiz0 !== answers.ans1 ||
  //     selectedAnswers.quiz1 !== answers.ans2 ||
  //     selectedAnswers.quiz2 !== answers.ans3 ||
  //     selectedAnswers.quiz3 !== answers.ans4
  //   ) {
  //     // if (
  //     //   selectedAnswers.quiz0 === answers.ans1 &&
  //     //   selectedAnswers.quiz1 === answers.ans2 &&
  //     //   selectedAnswers.quiz2 === answers.ans3 &&
  //     //   selectedAnswers.quiz3 === answers.ans4
  //     // ) {
  //     //   console.log("INCREMENTING");

  //     //   dispatch(countAns(1));
  //     // } else {
  //     //   console.log("COUNNNNNNNt");
  //     //   dispatch(countAns(0));
  //     // }
  //     console.log("INSIDE !");
  //     return dispatch(countAns(0));
  //   } else {
  //     return dispatch(decreaseCount(1));
  //   }
  // };

  const [multiQuiz0, setMultiQuiz0] = useState("");
  console.log("MULTI0", multiQuiz0);
  const [multiQuiz1, setMultiQuiz1] = useState("");
  console.log("MULTI0=1", multiQuiz1);
  const [multiQuiz2, setMultiQuiz2] = useState("");
  const [multiQuiz3, setMultiQuiz3] = useState("");

  const handleMultipleQuizData = (e) => {
    if (e.target.name === "multiQuiz0") {
      setMultiQuiz0(e.target.value);
    } else if (e.target.name === "multiQuiz1") {
      setMultiQuiz1(e.target.value);
    } else if (e.target.name === "multiQuiz2") {
      setMultiQuiz2(e.target.value);
    } else if (e.target.name === "multiQuiz3") {
      setMultiQuiz3(e.target.value);
    }
  };

  const multipleRef = useRef("");
  console.log(multipleRef.current.name);

  // } else if (multipleRef.current.name === "quiz1") {
  //   dispatch(addQuiz1(e.target.value));
  // } else if (multipleRef.current.name === "quiz2") {
  //   dispatch(addQuiz2(e.target.value));
  // } else if (multipleRef.current.name === "quiz3") {
  //   dispatch(addQuiz3(e.target.value));
  // }

  const multi = useSelector((state) => state.multipleQuiz.quiz0);
  console.log(multi);
  const multi2 = useSelector((state) => state.multipleQuiz.quiz1);
  console.log(multi2);

  const count = useSelector((state) => state.answerCounter.count);
  console.log(count);
  const [checkBoolean, setCheckBoolean] = useState(false);
  console.log(checkBoolean);
  const [selectedBox, setSelectedBox] = useState([]);
  const [selectedBox1, setSelectedBox1] = useState([]);
  const [selectedBox2, setSelectedBox2] = useState([]);
  const [selectedBox3, setSelectedBox3] = useState([]);

  const minSelection = 2;
  const maxSelection = 3;

  const handleCheckBox = (e) => {
    const value = e.target.value;
    if (multipleRef.current.name === "quiz0") {
      if (e.target.checked) {
        if (selectedBox.length >= maxSelection) {
          alert(`only ${maxSelection} options allowed`);
          e.target.checked = false;
          return;
        }
        setSelectedBox([...selectedBox, value]);
      } else {
        setSelectedBox(selectedBox.filter((item) => item !== value));
      }
    } else if (multipleRef.current.name === "quiz1") {
      if (e.target.checked) {
        if (selectedBox1.length >= maxSelection) {
          alert(`only ${maxSelection} options allowed`);
          e.target.checked = false;
          return;
        }
        setSelectedBox1([...selectedBox1, value]);
      } else {
        setSelectedBox1(selectedBox1.filter((item) => item !== value));
      }
    } else if (multipleRef.current.name === "quiz2") {
      if (e.target.checked) {
        if (selectedBox2.length >= maxSelection) {
          alert(`only ${maxSelection} options allowed`);
          e.target.checked = false;
          return;
        }
        setSelectedBox2([...selectedBox2, value]);
      } else {
        setSelectedBox2(selectedBox2.filter((item) => item !== value));
      }
    } else if (multipleRef.current.name === "quiz3") {
      if (e.target.checked) {
        if (selectedBox3.length >= maxSelection) {
          alert(`only ${maxSelection} options allowed`);
          e.target.checked = false;
          return;
        }
        setSelectedBox3([...selectedBox3, value]);
      } else {
        setSelectedBox3(selectedBox3.filter((item) => item !== value));
      }
    }
  };

  if (multipleRef.current.name === "quiz0") {
    dispatch(
      addMultipleQuiz0({
        q1: selectedBox[0],
        q2: selectedBox[1],
        q3: selectedBox[2],
      })
    );
  } else if (multipleRef.current.name === "quiz1") {
    dispatch(
      addMultipleQuiz1({
        q1: selectedBox1[0],
        q2: selectedBox1[1],
        q3: selectedBox1[2],
      })
    );
  } else if (multipleRef.current.name === "quiz2") {
    dispatch(
      addMultipleQuiz2({
        q1: selectedBox2[0],
        q2: selectedBox2[1],
        q3: selectedBox2[2],
      })
    );
  } else if (multipleRef.current.name === "quiz3") {
    dispatch(
      addMultipleQuiz3({
        q1: selectedBox3[0],
        q2: selectedBox3[1],
        q3: selectedBox3[2],
      })
    );
  }

  return (
    <div>
      <div className="mt-5">
        <h4>Q. {question}</h4>
        <div
          className="mt-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "40%",
              // border: "2px solid #516365",
              fontSize: "20px",
              textAlign: "left",
            }}
          >
            {" "}
            {quizType === "single" ? (
              <form>
                <div
                  className="divBox"
                  style={{
                    border: "2px solid #7f9d9d",
                    padding: "8px",
                    marginBottom: "5%",
                  }}
                >
                  {" "}
                  <input
                    type="radio"
                    className="me-2 ms-2"
                    name={radioName}
                    value={options.A}
                    onChange={(e) => handleRadioInputs(e)}
                  />
                  <label>{options.A}</label>
                </div>
                <div
                  className="divBox"
                  style={{
                    border: "2px solid #7f9d9d",
                    padding: "8px",
                    marginBottom: "5%",
                  }}
                >
                  {" "}
                  <input
                    type="radio"
                    className="me-2 ms-2"
                    name={radioName}
                    value={options.B}
                    onChange={(e) => handleRadioInputs(e)}
                  />
                  <label>{options.B}</label>
                </div>
                <div
                  className="divBox"
                  style={{
                    border: "2px solid #7f9d9d",
                    padding: "8px",
                    marginBottom: "5%",
                  }}
                >
                  {" "}
                  <input
                    type="radio"
                    className="me-2 ms-2"
                    name={radioName}
                    value={options.C}
                    onChange={(e) => handleRadioInputs(e)}
                  />
                  <label>{options.C}</label>
                </div>
                <div
                  className="divBox"
                  style={{
                    border: "2px solid  #7f9d9d",
                    padding: "8px",
                  }}
                >
                  {" "}
                  <input
                    type="radio"
                    className="me-2 ms-2"
                    name={radioName}
                    value={options.D}
                    onChange={(e) => handleRadioInputs(e)}
                  />
                  <label>{options.D}</label>
                </div>
              </form>
            ) : (
              <form name={checkName} ref={multipleRef}>
                <div
                  className="divBox"
                  style={{
                    border: "2px solid  #7f9d9d",
                    padding: "8px",
                    marginBottom: "5%",
                  }}
                >
                  {" "}
                  <input
                    type="checkbox"
                    className="selected me-2 ms-2"
                    name="multiQuiz0"
                    value={options.A}
                    onChange={(e) => (
                      handleMultipleQuizData(e), handleCheckBox(e)
                    )}
                  />
                  <label>{options.A}</label>
                </div>
                <div
                  className="divBox"
                  style={{
                    border: "2px solid  #7f9d9d",
                    padding: "8px",
                    marginBottom: "5%",
                  }}
                >
                  {" "}
                  <input
                    type="checkbox"
                    className="me-2 ms-2"
                    name="multiQuiz1"
                    value={options.B}
                    onChange={(e) => (
                      handleMultipleQuizData(e), handleCheckBox(e)
                    )}
                  />{" "}
                  <label>{options.B}</label>
                </div>
                <div
                  className="divBox"
                  style={{
                    border: "2px solid  #7f9d9d",
                    padding: "8px",
                    marginBottom: "5%",
                  }}
                >
                  {" "}
                  <input
                    type="checkbox"
                    className="me-2 ms-2"
                    name="multiQuiz2"
                    value={options.C}
                    onChange={(e) => (
                      handleMultipleQuizData(e), handleCheckBox(e)
                    )}
                  />
                  <label>{options.C}</label>
                </div>
                <div
                  className="divBox"
                  style={{
                    border: "2px solid  #7f9d9d",
                    padding: "8px",
                  }}
                >
                  {" "}
                  <input
                    type="checkbox"
                    className="me-2 ms-2"
                    name="multiQuiz3"
                    value={options.D}
                    onChange={(e) => (
                      handleMultipleQuizData(e), handleCheckBox(e)
                    )}
                  />
                  <label>{options.D}</label>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
