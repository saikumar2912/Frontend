import { useState } from "react";
import {useSelector} from 'react-redux';
import { useContext } from "react";
import { GameStateContext } from "./Context";

function Quiz() {
    const Questions = useSelector(state => state.questions.questions)
console.log(Questions)

console.log(Questions.option1)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const {score,setScore, gameState, setGameState } = useContext(
    GameStateContext
  );

  const chooseOption = (option) => {
setOptionChosen(option)
  };
  const nextQuestion = () => {

    if (Questions[currentQuestion].answer === optionChosen) {
    setScore(score+1)
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
        setScore(score+1)
    }
    setGameState("finished");
  };
  
  console.log(Questions[currentQuestion].answer,'hello')
  console.log(optionChosen)
console.log(score,'hii')
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].question}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption(Questions[currentQuestion].option1);
          }}
        >
          {Questions[currentQuestion].option1}
        </button>

        <button
          onClick={() => {
            chooseOption(Questions[currentQuestion].option2);
          }}
        >
          {Questions[currentQuestion].option2}
        </button>

        <button
          onClick={() => {
            chooseOption(Questions[currentQuestion].option3);
          }}
        >
          {Questions[currentQuestion].option3}
        </button>

        <button
          onClick={() => {
            chooseOption(Questions[currentQuestion].option4);
          }}
        >
          {Questions[currentQuestion].option4}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;