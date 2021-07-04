import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Question } from '../Redux/Auth/ADMIN/QuestionsAction';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(14),
        height: theme.spacing(14),
        marginLeft:'70px'   
      },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height:450
  },
  input: {
    display: 'none',
  },
  button:{
margintop:"200px"
  }
}));

export default function Simple({id}) {

  const dispatch=useDispatch();

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
const [question, setQuestion] = useState('')
const [option1, setOption1] = useState('')
const [option2,setOption2] = useState('')
const[option3,setOption3]=useState('');
const [option4,setOption4]=useState('');
const[answer,setAnswer]=useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const submit=(question,option1,option2,option3,option4,answer,id)=>{
    const add={
question:question,
option1:option1,
option2:option2,
option3:option3,
option4:option4,
answer:answer,
bit_id:id,

    }
axios.post('http://localhost:8000/quiz/addquiz',add)
.then((res)=>{console.log(res.data)
dispatch(Question())
})

}
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <label htmlFor="icon-button-file">



        
      </label>

      <div> 
        
      </div>
       <TextField id="standard-basic" label="Question" onChange={(e)=>setQuestion(e.target.value)} value={question} />
       <div>
        <TextField id="standard-basic" label="Option1" onChange={(e)=>setOption1(e.target.value)} value={option1} />
          </div>
          <div> 
          <TextField id="standard-basic" label="Option2" onChange={(e)=>setOption2(e.target.value)} value={option2}/>
        </div>
        <div> 
        <TextField id="standard-basic" label="Option3" onChange={(e)=>setOption3(e.target.value)} value={option3} />
       </div>
       <div>
       <TextField id="standard-basic" label="Option4" onChange={(e)=>setOption4(e.target.value)} value={option4} />

       </div>
       <div>
       <TextField id="standard-basic" label="Answer" onChange={(e)=>setAnswer(e.target.value)} value={answer} />

       </div>

       
      <div className="save__icon">
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={()=>{submit(question,option1,option2,option3,option4,answer,id);setOpen(false)}}
        
      >
        Save
      </Button> </div>

    </div>
  );

  return (
    <div>
<button className="btn btn-primary" onClick={handleOpen}>Add Quiz</button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
