import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import React,{ useState,useEffect } from "react";
import { GameStateContext } from "./Context";
import {useSelector,useDispatch} from 'react-redux';
import { Final } from "../Redux/Auth/ADMIN/QuestionsAction";

// ['menu', 'playing', 'finished']
function App(props) {

const user_id = useSelector(state => state.user.user._id)

console.log(user_id)
  const {location:{state}}=props;
  console.log(state)
const bit_id=state

  const [gameState, setGameState] = useState('playing');
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const dispatch=useDispatch()
// const[seconds,setSeconds]=useState(10)
//   const Timer=()=> {
  
//     useEffect(() => {
//       if (seconds > 0) {
//         setTimeout(() => setSeconds(seconds - 1),1000);
//       } else {
//         setSeconds(0);
//       }
//     });}
// console.log(seconds)
   
  return (
    <div className="app-container">
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
          // setSeconds,
          // seconds,
          state,
          user_id
        }}
      >
        {/* {Timer()}

        {seconds}
        {seconds === 0? <>  <EndScreen />
</>:<> 



 </>} */}
 {gameState === "playing" && <Quiz />}
{gameState === "finished" && <EndScreen/>} 

      </GameStateContext.Provider>
    </div>
  );
}

export default App;