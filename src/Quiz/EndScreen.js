import React from "react";
import { useContext } from "react";
import { GameStateContext } from "./Context";
import {useSelector } from 'react-redux'

const EndScreen = () => {
  const Questions = useSelector(state => state.questions.questions)
  console.log(Questions)
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );
console.log(score)
  const restartQuiz = () => {
    setScore(0);
    setGameState("playing");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;