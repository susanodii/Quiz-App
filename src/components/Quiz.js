import React, { useRef, useState } from "react";
import "./Quiz.css";
import data from "../assets/Data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  const a = useRef(null);
  const b = useRef(null);
  const c = useRef(null);
  const d = useRef(null);

  const option_array = [a, b, c, d];

  const checkAns = (e, answer) => {
    if (lock === false) {
      if (question.answer === answer) {
        e.target.classList.add("Correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("Wrong");
        setLock(true);
        option_array[question.answer - 1].current.classList.add("Correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("Wrong");
        option.current.classList.remove("Correct");
        return null;
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={a}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.a}
            </li>
            <li
              ref={b}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.b}
            </li>
            <li
              ref={c}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.c}
            </li>
            <li
              ref={d}
              onClick={(e) => {
                checkAns(e, 4);
              }}
            >
              {" "}
              {question.d}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className='index'>
            {" "}
            {index + 1} 0f {data.length}
          </div>
        </>
      )}

      {result ? (
        <>
          <h2>
            You Scored {score} out of{data.length}{" "}
          </h2>
          <button onClick={reset}> Reset</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
