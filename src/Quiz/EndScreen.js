import React,{useEffect} from "react";
import { useContext } from "react";
import { GameStateContext } from "./Context";
import {useSelector,useDispatch } from 'react-redux'
import { Final } from "../Redux/Auth/ADMIN/QuestionsAction";

const EndScreen = () => {
 
  
  const dispatch=useDispatch()

  const { score, setScore, setGameState,state,user_id } = useContext(
    GameStateContext
  );
  const bit_id=state
  const ques = useSelector(state => state.questions.questions)
  // console.log(ques)
console.log(score)

  const not=ques.filter(e=>e.bit_id._id===state)
  const Questions = not

console.log(Questions)

  console.log(bit_id)
  const result=  Math.round((score/Questions.length)*100)
// const scores=()=>{
//    const scored={
//      score:result,
//      bit_id,
//      user_id:user_id
//    }
//    axios.post('http://localhost:8000/result/addresult',scored)
//    .then((res)=>console.log(res.data))
//    .catch(err=>console.log(err.message))

// }
  const restartQuiz = () => {
    setScore(0);
    setGameState("playing");

  };
useEffect(() => {
  dispatch(Final(result,bit_id,user_id))
  console.log(Final)

 },[] )
    

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
{/* {scores()} */}
{result}%      
      <div class="quiz-button">
      <button class="btn btn-primary" onClick={restartQuiz}>Restart Quiz</button>
      </div>
    </div>
  );
};

export default EndScreen;