import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Avatar, TextField } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import { Update } from '../Redux/Auth/Login/Action';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import {HiPhone} from 'react-icons/hi'
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import PersonIcon from '@material-ui/icons/Person';



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

export default function SimpleModal() {
const user = useSelector(state => state.user.user._id)

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
const [Name, setName] = useState(user.user_name)
const [Profile, setProfile] = useState(user.profile_picture)
const [Password, setPassword] = useState('')
const [PhoneNo, setPhoneNo] = useState(user.PhoneNo)
const[Education,setEducation]=useState(user.Education);
const [Bio,setBio]=useState(user.Bio);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
console.log(user)
const dispatch=useDispatch()
const UpdateDetails =async(id,Name,PhoneNo,Education,Bio)=>{
    console.log("addPost")
    
        //console.log(image)
        var formdata = new FormData();
    
        formdata.append("file", Profile);
        formdata.append("cloud_name", "buildout123");
        formdata.append("upload_preset", "ProfilePic");
    
        let res =await fetch(
        "https://api.cloudinary.com/v1_1/buildout123/auto/upload",
        {
            method: "post",
            mode: "cors",
            body: formdata
        }
        )
        .then(res=>res.json())
        .then(data=>{
            console.log(id,Name,PhoneNo,data.url)
            dispatch(Update(id,Name,PhoneNo,data.url,Education,Bio))
        
          })
          .catch(err=>{
            console.log(err)
        })
    }
  const body = (
    <div style={modalStyle} className={classes.paper}>
        <input accept="image/*" className={classes.input} onChange={(e)=>setProfile(e.target.files[0])} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
      <Avatar className={classes.large} src={Profile} />

        <IconButton color="primary" aria-label="upload picture" component="span"  >
          <PhotoCamera />
        </IconButton>
      </label>

      <div> 
        
      </div>
      <PersonIcon/>
       <TextField id="standard-basic" label="Name" onChange={(e)=>setName(e.target.value)} value={Name} />
       <div>
     <HiPhone/> 
     <TextField id="standard-basic" label="PhoneNo" onChange={(e)=>setPhoneNo(e.target.value)} value={PhoneNo} />
          </div>
          <div> 
            <SchoolRoundedIcon/>
          <TextField id="standard-basic" label="Education" onChange={(e)=>setEducation(e.target.value)} value={Education}/>
        </div>
        <div> 
          <AssignmentIndRoundedIcon/>
        <TextField id="standard-basic" label="Bio" onChange={(e)=>setBio(e.target.value)} value={Bio} />
       </div>

       
      <div className="save__icon">
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={()=>UpdateDetails(user,Name,PhoneNo,Education,Bio)}
      >
        Save
      </Button> </div>

    </div>
  );

  return (
    <div>
<CreateIcon className="create__icon" onClick={handleOpen}/>
      
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
