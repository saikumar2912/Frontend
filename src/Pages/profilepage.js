import React, { useEffect, useState } from 'react'
import{useSelector,useDispatch} from 'react-redux';
import './profilepage.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import { userposts,DeletePost } from '../Redux/Auth/Login/DisplayAction';
import { Card } from '@material-ui/core';
import Axios from 'axios'
import {MdEmail} from 'react-icons/md'
import {HiPhone} from 'react-icons/hi'
import SimpleModal from './Edit'
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import { Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      marginLeft:'70px'
      
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      
      },
      alignItems:"center",
    },
    input: {
    display: 'none',
  },
  camera:{
    color:"#E3ABAB",
    // alignSelf:"center"
  },

  }));
const Profilepage = (a) => {
  const history=useHistory()

    const classes = useStyles();
const user = useSelector(state => state.user.user)
console.log(user)

const state = useSelector(state => state.display.display)
console.log(state)

const achive=useSelector(state=>state.user.achivement )
console.log(achive)
const Token = () => localStorage.getItem("user");

const [Data,setData]=useState([])

const dispatch=useDispatch()
useEffect(() => {
userposts()

}
, [user])

useEffect(()=>{
        
  Axios.post('http://localhost:8000/skill/userskills',{user_id:user._id},{headers:{authorization:`Bearer ${Token()}`}})
  .then((res)=>{setData(res.data.skills)
    }
)


  },[user._id])
  console.log(Data)

    return (
        <div className='app-container'>
        <div className="profile__body" >
            
<div className="profile__body__left">
<Avatar  alt={user.user_name} src={user.profile_picture} className={classes.large}/>

<SimpleModal/>

<h1 className="h1">{user.user_name}</h1>

<MdEmail class="margin-right"/> {user.email_id}
<div className="mt-3">
<HiPhone class="margin-right"/> {user.phoneNo}

</div>
<div className="mt-3">
<SchoolRoundedIcon/>{user.Education}

</div>
<div className="mt-3"> 
  <AssignmentIndRoundedIcon/>{user.Bio}
</div>


<div className="profile__body__logout">
<Button onClick={()=>{history.push('/navbar/achivement')}}> Achivement {!achive ? "" : achive.achivement.length} </Button>
</div >

    </div> 
    <div className="new">
      <div className="admin-cards profile-follow">
        <span></span>
        <div class="card-body">
    <h4>Following Skills</h4>
<div className="profile-skills">
      <div className="row">
      {Data.map((e)=><>
      {e.title.length > 0?
      <div class="col-4">
      <div className='profile-card'>
          <div className="skill_name">
          <Link to={{pathname:"/navbar/userposts",
                  state:e.skill_id}} onClick={()=>{}}>{e.title}</Link>
               </div>
                 
        
         
  
      </div></div>:<div> NO POSTS YET</div> }
      </>)}
      </div>
     </div>
     </div>
     </div>
    </div>

           </div>
    
             </div>
    )
}

export default Profilepage