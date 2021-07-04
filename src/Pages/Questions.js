import { useState } from "react";
import {useSelector} from 'react-redux';
import EndScreen from '../Quiz/EndScreen';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [gameState, setGameState] = useState();
  const [score, setScore] = useState(0);

const Questions = useSelector(state => state.questions.questions)
console.log(Questions)
  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };


  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };
console.log(gameState)
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].question}</h1>
      <div className="questions">
        <button
          onClick={() => {
            chooseOption("option1");
          }}
        >
          {Questions[currentQuestion].option1}
        </button>
        <button
          onClick={() => {
            chooseOption("option2");
          }}
        >
          {Questions[currentQuestion].option2}
        </button>
        <button
          onClick={() => {
            chooseOption("option3");
          }}
        >
          {Questions[currentQuestion].option3}
        </button>
        <button
          onClick={() => {
            chooseOption("option4");
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
      <EndScreen/>
    </div>
  );
}

export default Quiz;