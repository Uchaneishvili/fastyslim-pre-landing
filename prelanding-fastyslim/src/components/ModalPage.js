import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Axios from "axios";
import "./ModalPage.css";

function ModalPage(props) {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [questions, setQuestions] = useState([{}]);
  const [isOpen, setIsOpen] = useState(true);
  let options = [{}];

  const loadData = async () => {
    let url = `http://localhost:3001/read`;

    await Axios.get(url).then((response) => {
      setQuestions(response.data.data);
    });
  };

  const generateOptions = (currentQuestion) => {
    for (let x = 1; x <= 4; x++) {
      switch (x) {
        case 1:
          options.push({
            key: x,
            value: questions[currentQuestion].optionOne,
          });
          break;

        case 2:
          options.push({
            key: x,
            value: questions[currentQuestion].optionTwo,
          });
          break;

        case 3:
          options.push({
            key: x,
            value: questions[currentQuestion].optionThree,
          });
          break;

        case 4:
          options.push({
            key: x,
            value: questions[currentQuestion].optionFour,
          });
          break;

        default:
          break;
      }
    }

    return (
      <>
        {options.splice(1, 4).map((answerOption) => (
          <>
            {answerOption.value && (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.value}
              </button>
            )}
          </>
        ))}
      </>
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAnswerOptionClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="app">
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions && questions[currentQuestion].question}
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
