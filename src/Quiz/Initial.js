import Quiz from "./Quiz";
import React,{ useState} from "react";
import { GameStateContext } from "./Context";
import {useSelector} from 'react-redux';
import TransitionsModal from './Popup';
import {useHistory} from 'react-router-dom'

// ['menu', 'playing', 'finished']
function App(props) {

const user_id = useSelector(state => state.user.user._id)
console.log(user_id)
  const {location:{state}}=props;
  console.log(state)
const history=useHistory()
  const [gameState, setGameState] = useState('playing');
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
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
 {gameState === "finished" && <TransitionsModal/> }
 {gameState==='finsihed'&& history.push('/Quizs')}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;