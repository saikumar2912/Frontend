

import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import WarningIcon from '@material-ui/icons/Warning';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {useSelector} from 'react-redux'

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
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height:200,
    borderRadius:'20px'
  },
  textfield:{
      width:"100%"
  }
}));

export default function SimpleModal({postid}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const user = useSelector(state => state.user.user._id)
console.log(user)

const[report,setReport]=useState('')
const submit=(user,postid,report)=>{
    const reported={
        user_id:user,
        post_id:postid,
        report:report

    }
    axios.post('http://localhost:8000/report/reported',reported)
    .then((res)=>console.log(res.data))
    
}
console.log(report)
  const body = (
    <div style={modalStyle} className={classes.paper}>
          <TextField id="standard-basic" className={classes.textfield} label="Reason" onChange={(e)=>setReport(e.target.value)} />
          <button onClick={()=>{submit(user,postid,report)}}> add</button>

    </div>
  );

  return (
    <div>
      <WarningIcon onClick={handleOpen}size={100}/>

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