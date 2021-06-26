import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { useContext } from "react";
import { GameStateContext } from "./Context";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios'
import { Final } from "../Redux/Auth/ADMIN/QuestionsAction";


function Quiz() {


  const {score,setScore,setSeconds, seconds, gameState, setGameState,state,user_id} = useContext(
    GameStateContext
  );
  const bit_id=state

  console.log(user_id)
  const [value, setValue] = useState();

console.log(state)  
    const ques = useSelector(state => state.questions.questions)
    // console.log(ques)


    const not=ques.filter(e=>e.bit_id._id===state)
console.log(not)
    const Questions = not
console.log(Questions)

const dispatch=useDispatch()


const handleChange = (event) => {
  setValue(event.target.value);
};

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");


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
 console.log(Questions[currentQuestion].answer)
  return (
    
    <div className="Quiz">
      <h1>{Questions[currentQuestion].question}</h1>
      <div className="questions">
      <RadioGroup aria-label="gender"  onChange={handleChange}>
      <FormControlLabel  value={Questions[currentQuestion].option1} control={<Radio onClick={() => { chooseOption(Questions[currentQuestion].option1)}}  />} label={Questions[currentQuestion].option1}  />
      <FormControlLabel  value={Questions[currentQuestion].option2} control={<Radio onClick={() => { chooseOption(Questions[currentQuestion].option2)}}  />} label={Questions[currentQuestion].option2}  />
      <FormControlLabel  value={Questions[currentQuestion].option3} control={<Radio onClick={() => { chooseOption(Questions[currentQuestion].option3)}}  />} label={Questions[currentQuestion].option3}  />
      <FormControlLabel  value={Questions[currentQuestion].option4} control={<Radio onClick={() => { chooseOption(Questions[currentQuestion].option4)}}  />} label={Questions[currentQuestion].option4}  />

     
      </RadioGroup>

      </div>
      <div class="d-flex align-items-center justify-content-end flex-fill">
      {currentQuestion === Questions.length - 1 ? (
        <button class= "btn btn-primary" onClick={()=>{finishQuiz()}} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button class="btn btn-primary" onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
      </div>
    </div>
  );
}

export default Quiz;