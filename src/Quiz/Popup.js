import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useContext } from "react";
import { GameStateContext } from "./Context";
import {useSelector,useDispatch } from 'react-redux'
import { Final } from "../Redux/Auth/ADMIN/QuestionsAction";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch=useDispatch()
  
  const { score, setScore, setGameState,state,user_id } = useContext(
    GameStateContext
  );
  const bit_id=state.bit_id
  const ques = useSelector(state => state.questions.questions)
  // console.log(ques)
console.log(score)
const skill_id=state.skill_id
console.log(skill_id)
  const not=ques.filter(e=>e.bit_id._id===state.bit_id)
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
  dispatch(Final(result,bit_id,user_id,skill_id))
  console.log(Final)

 },[] )
 
  
    
  return (
    <div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          
          <h1>Quiz Finished</h1>
{/* {scores()} */}
{result}%      
      <div class="quiz-button">
      <button class="btn btn-primary" onClick={restartQuiz}>Restart Quiz</button>
      </div>
        


          </div>
        </Fade>
      </Modal>
    </div>
  );
}
