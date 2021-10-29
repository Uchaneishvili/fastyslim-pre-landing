import React, { useState, useEffect } from "react";
import "./ModalPage.css";

function ModalPage(props) {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let options = [{}];

  const generateOptions = (currentQuestion) => {
    for (let x = 1; x <= 4; x++) {
      switch (x) {
        case 1:
          options.push({
            key: x,
            value: props.questions[currentQuestion].optionOne,
          });
          break;

        case 2:
          options.push({
            key: x,
            value: props.questions[currentQuestion].optionTwo,
          });
          break;

        case 3:
          options.push({
            key: x,
            value: props.questions[currentQuestion].optionThree,
          });
          break;

        case 4:
          options.push({
            key: x,
            value: props.questions[currentQuestion].optionFour,
          });
          break;

        default:
          break;
      }
    }

    return (
      <>
        {options.splice(1, 4).map((answerOption) => (
          <div key={answerOption.key}>
            {answerOption.value && (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.value}
              </button>
            )}
          </div>
        ))}
      </>
    );
  };

  useEffect(() => {
    props.loadData();
  }, [props]);

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      props.setIsOpen(false);
    }
  };

  return (
    <>
      {props.isOpen && (
        <div className="app">
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/
                {props.questions.length}
              </div>
              <div className="question-text">
                {props.questions && props.questions[currentQuestion].question}
              </div>
            </div>
          </>

          <div className="answer-section">
            {generateOptions(currentQuestion)}
          </div>
        </div>
      )}
    </>
  );
}

export default ModalPage;
