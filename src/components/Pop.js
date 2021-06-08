

import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import WarningIcon from '@material-ui/icons/Warning';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import { report } from '../Redux/Auth/Login/DisplayAction';

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

export default function SimpleModal({postid,count}) {
  const dispatch=useDispatch()
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


const[reports,setReport]=useState('')


console.log(reports)


  const body = (
    <div style={modalStyle} className={classes.paper}>
          <TextField id="standard-basic" className={classes.textfield} label="Reason" onChange={(e)=>setReport(e.target.value)} />
          <button onClick={()=>{dispatch(report(user,postid,reports))}}> add</button>

    </div>
  );

  return (
    <div>
  <WarningIcon onClick={handleOpen}size={100}/>{count}


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