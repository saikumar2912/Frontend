import Menu from "./Menu";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import { useState } from "react";
import { GameStateContext } from "./Context";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState('playing');
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;