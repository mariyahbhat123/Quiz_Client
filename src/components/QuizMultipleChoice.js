import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import QuizComponent from "./QuizComponent";
import QuizNavbar from "./QuizNavbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { countAns, decreaseCount } from "../redux/slices/countAnsSlice";

export default function QuizMultipleChoice() {
  const { state } = useLocation();
  const langName = state.langName;
  const quizType = state.quizType;
  console.log(langName);
  console.log(quizType);

  const dispatch = useDispatch();

  const [multipleData, setMultipleData] = useState([]);
  console.log("MULTIPLE", multipleData);
  const handleResponseMultiple = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/multiple/${langName}`,
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
        setMultipleData([json.data]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleResponseMultiple();
  }, []);

  const multipleQuizSelected = useSelector((state) => state.multipleQuiz);
  console.log(multipleQuizSelected);

  const [counting, setCounting] = useState();
  console.log("COUNTT", counting);

  const validateMultipleResult = async () => {
    if (
      multipleQuizSelected.quiz0 !== "" &&
      multipleQuizSelected.quiz1 !== "" &&
      multipleQuizSelected.quiz2 !== "" &&
      multipleQuizSelected.quiz3 !== ""
    ) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/checkMultiAnswers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quiz0: {
                ans1: multipleQuizSelected.quiz0.multiQuiz0,
                ans2: multipleQuizSelected.quiz0.multiQuiz1,
                ans3: multipleQuizSelected.quiz0.multiQuiz2,
              },
              quiz1: {
                ans1: multipleQuizSelected.quiz1.multiQuiz0,
                ans2: multipleQuizSelected.quiz1.multiQuiz1,
                ans3: multipleQuizSelected.quiz1.multiQuiz2,
              },
              quiz2: {
                ans1: multipleQuizSelected.quiz2.multiQuiz0,
                ans2: multipleQuizSelected.quiz2.multiQuiz1,
                ans3: multipleQuizSelected.quiz2.multiQuiz2,
              },
              quiz3: {
                ans1: multipleQuizSelected.quiz3.multiQuiz0,
                ans2: multipleQuizSelected.quiz3.multiQuiz1,
                ans3: multipleQuizSelected.quiz3.multiQuiz2,
              },
            }),
          }
        );
        const res = await response.json();
        if (!res) {
          console.log("err");
        } else {
          return setCounting(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    validateMultipleResult();
  }, [multipleQuizSelected]);

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
    <div>
      <div>
        <QuizNavbar />
      </div>
      <div className="mt-5">
        <h2>
          {langName} {quizType} selection MCQ
        </h2>
      </div>
      <div>
        {multipleData.map((item) => {
          return item.map((data, id) => {
            return (
              <div>
                {" "}
                {id === idx && id < 5 ? (
                  <div>
                    <QuizComponent
                      title="HTML"
                      question={data.question}
                      options={data.options}
                      answer={data.answer}
                      quizType={quizType}
                      checkName={
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
                              Previous
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
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
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                    {id === 3 ? (
                      <div div>
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
      </div>
    </div>
  );
}
