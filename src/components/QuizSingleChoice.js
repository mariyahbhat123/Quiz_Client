import React, { useEffect, useMemo, useRef, useState } from "react";
import QuizComponent from "./QuizComponent";
import { useLocation } from "react-router-dom";
import QuizNavbar from "./QuizNavbar";
import QuizFooter from "./QuizFooter";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAns1,
  addAns2,
  addAns3,
  addAns4,
  addAnswers,
} from "../redux/slices/quizAnswersSlice";
import { addCounter, eraseCounter } from "../redux/slices/counterSlice";
import {
  countAns,
  decreaseCount,
  resetCount,
} from "../redux/slices/countAnsSlice";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

export default function QuizSingleChoice(props) {
  const { state } = useLocation();
  const langName = state.langName;
  const quizType = state.quizType;
  console.log(langName);
  console.log(quizType);

  const dispatch = useDispatch();

  // const stateRef = useRef("");
  // const [s, setS] = useState(stateRef);
  // console.log("sssssss", s);

  const [singleData, setSingleData] = useState([]);
  console.log(singleData);

  // const ans = useSelector((state) => state.quizAnswers.ans1);
  // console.log("anssss", ans);
  // const ans1 = useSelector((state) => state.quizAnswers.ans2);
  // console.log("ansss5s", ans1);
  const handleResponse = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/single/${langName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (!json) {
        console.log("error");
      } else {
        console.log(json);
        setSingleData([json.data]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [radioName, setRadioName] = useState({
    name1: "",
    name2: "",
    name3: "",
    name4: "",
  });
  console.log(radioName);

  const handleAnswers = () => {
    singleData.map((item) => {
      return item.map((data, id) => {
        if (id === 0) {
          dispatch(addAns1(data.answer));
        } else if (id === 1) {
          console.log(id);
          dispatch(addAns2(data.answer));
        } else if (id === 2) {
          dispatch(addAns3(data.answer));
        } else if (id === 3) {
          dispatch(addAns4(data.answer));
        }
      });
    });
  };

  const selectedAnswers = useSelector((state) => state.singleQuiz);

  const [ans, setAns] = useState({
    ans1: selectedAnswers.quiz0,
    ans2: selectedAnswers.quiz1,
    ans3: selectedAnswers.quiz2,
    ans4: selectedAnswers.quiz3,
  });

  console.log("selectdanswers", selectedAnswers.quiz0);
  console.log("answersss", ans);

  // const handleCount = () => {
  //   dispatch(countAns())
  // };

  // const [correctAnswers, setCorrectAnswers] = useState([]);
  // console.log("correct", correctAnswers);

  // const hand = (data) => {
  //   setCorrectAnswers([...correctAnswers, data]);
  // };
  // const handleCorrectAns = async () => {
  //   console.log("OUTSIDE");
  //   if (selectedAnswers) {
  //     console.log("INSIDE");
  //     if (quiz0 == ans1) {
  //       console.log("MDSNJ");
  //       return hand(quiz0);
  //     }
  //     else if (quiz1 == ans2) {
  //       console.log(quiz1, "jksjxsb");
  //       return hand(quiz1);
  //     }
  //     else if (quiz2 == ans3) {
  //       return hand(quiz2);
  //     }
  //     else if (quiz3 == ans4) {
  //       return hand(quiz3);
  //     } else {
  //       return correctAnswers;
  //     }
  //   } else {
  //     return correctAnswers;
  //   }
  // };

  // useEffect(() => {
  //   handleCorrectAns();
  // }, [selectedAnswers]);

  useEffect(() => {
    handleResponse();
    handleAnswers();
  }, []);

  const [counting, setCounting] = useState();
  console.log("COUNTT", counting);

  const validateSelectedAnswers = async () => {
    if (
      selectedAnswers.quiz0 !== "" &&
      selectedAnswers.quiz1 !== "" &&
      selectedAnswers.quiz2 !== "" &&
      selectedAnswers.quiz3 !== ""
    ) {
      try {
        const response = await fetch(`http://localhost:5000/api/checkAnswers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ans1: selectedAnswers.quiz0,
            ans2: selectedAnswers.quiz1,
            ans3: selectedAnswers.quiz2,
            ans4: selectedAnswers.quiz3,
          }),
        });
        const res = await response.json();
        if (!res) {
          console.log("ERRR");
        } else {
          return setCounting(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    validateSelectedAnswers();
  }, [selectedAnswers]);

  if (counting) {
    var val = counting.reduce((prev, curr) => prev + curr);
    console.log("VALUEE", val);
  } else {
    console.log("no count");
  }

  const counter = useSelector((state) => state.countAnswer.count);

  const [idx, setIdx] = useState(0);

  console.log(counter);
  useEffect(() => {
    setIdx(counter);
  }, [counter]);
  return (
    <div style={{ fontFamily: "serif" }}>
      <div>
        <QuizNavbar />
      </div>
      <div className="mt-5">
        <h2>
          {langName} {quizType} selection MCQ
        </h2>
      </div>
      <div>
        {singleData.map((item) => {
          return item.map((data, id) => {
            return (
              <div>
                {id === idx && id < 5 ? (
                  <div>
                    <QuizComponent
                      title="HTML"
                      question={data.question}
                      options={data.options}
                      answer={data.answer}
                      quizType={quizType}
                      radioName={
                        id === 0
                          ? "quiz0"
                          : id === 1
                          ? "quiz1"
                          : id === 2
                          ? "quiz2"
                          : id === 3
                          ? "quiz3"
                          : "quiz0"
                      }
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "40%",
                          padding: "2%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {idx > 0 ? (
                          <div style={{ width: "20%" }}>
                            <button
                              onClick={() => dispatch(decreaseCount(1))}
                              style={{
                                width: "100%",
                                padding: "6%",
                                borderRadius: "50px",
                                backgroundColor: "#7f9d9d",
                                border: "2px solid #516365",
                              }}
                            >
                              {" "}
                              <NavigateBeforeIcon />
                              Previous
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                        {idx < 3 ? (
                          <div
                            style={
                              idx < 1
                                ? {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                  }
                                : { width: "20%" }
                            }
                          >
                            <button
                              onClick={() => dispatch(countAns(1))}
                              style={
                                idx >= 1
                                  ? {
                                      width: "100%",
                                      padding: "6%",
                                      borderRadius: "50px",
                                      backgroundColor: "#7f9d9d",
                                      border: "2px solid #516365",
                                    }
                                  : {
                                      width: "20%",
                                      padding: "1%",
                                      borderRadius: "50px",
                                      backgroundColor: "#7f9d9d",
                                      border: "2px solid #516365",
                                    }
                              }
                            >
                              Next <NavigateNextIcon />
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    {id === 3 ? (
                      <div className="">
                        <div>
                          <p>Submit to see results..</p>
                        </div>
                        <div
                          className=""
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div
                            style={{
                              border: "2px solid #516365",
                              width: "10%",
                              padding: "8px",
                              backgroundColor: "#7f9d9d",
                              color: "black",
                              borderRadius: "50px",
                            }}
                          >
                            <Link
                              to="/CountResult"
                              state={{ result: val }}
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              SUBMIT
                            </Link>{" "}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          });
        })}
      </div>{" "}
      <div className="mt-5" style={{ backgroundColor: "#7f9d9d" }}>
        <QuizFooter />
      </div>
    </div>
  );
}
