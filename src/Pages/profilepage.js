import React, { useEffect} from 'react'
import{useSelector,useDispatch} from 'react-redux';
import './profilepage.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {useHistory} from 'react-router-dom'
import { userposts } from '../Redux/Auth/Login/DisplayAction';
import {MdEmail} from 'react-icons/md'
import {HiPhone} from 'react-icons/hi'
import SimpleModal from './Edit'
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import { unfollow } from '../Redux/Auth/ADMIN/SkillAction';
import ClearIcon from '@material-ui/icons/Clear';
import { Link} from 'react-router-dom';
import axios from 'axios';
import{BiMedal} from 'react-icons/bi';
import TransitionsModal from './Achivemodal'






const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      marginLeft:'50px'
      
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
const Data = useSelector(state => state.skill.skill)
const post = useSelector(state => state.display.display)
const scores = useSelector(state => state.questions.score)
console.log(scores)



const achive=useSelector(state=>state.user.achivement )
console.log(achive)

useEffect(()=>{
  axios.post('http://localhost:8000/result/getallquiz',{})
  .then((res)=>console.log(res.data))
})

const dispatch=useDispatch()
useEffect(() => {
userposts()

}
, [user])


    return (
        <div className='app-container'>
        <div className="profile__body" >
<div className="profile__body__left">
<SimpleModal  />

<Avatar  alt={user.user_name} src={user.profile_picture} className={classes.large}/>


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


{/* <Button onClick={()=>{history.push('/achivement')}}> Achivement {!achive ? "" : achive.achivement.length} </Button> */}

    </div> 
    <div className="new">
      <div className="admin-cards profile-follow">
        <span></span>
        <div class="card-body">
    <h4>Following Skills</h4>

<div className="profile-skills">
      <div className="row">
      {Data.map((e)=><>
      {e.followers.includes(user._id)===true ?
      <div class="col-4">
      <div className='profile-card'>
          <div className="skill_name">
          <Link to={{pathname:"/userposts",
                  state:e._id}} onClick={()=>{}}>{e.Title}</Link>
          <ClearIcon  onClick={()=>dispatch(unfollow(e._id,user._id))}/> 

               </div>
                 
        
         
  
      </div></div>:<div></div> }
      </>)}
      </div>
     </div>
     </div>
     </div>

     <div class="d-flex">

         <div class="admin-cards profile-follow p-3 mt-3">
           
     <h3>Achievements</h3>

<div class="d-flex p-3  ">

{scores.map(e=>user._id.includes(e.user_id)?
<div class="col-4">
<div className='profile-card'>
          <div className="skill_name">
<TransitionsModal id={e.bit_id._id} title={e.bit_id.title} > </TransitionsModal>


{e.score<50?
<div class="bronzec ">
{e.score} 
<BiMedal className='bronze' size={30}/>

</div>:e.score<70?
<div> 
{e.score}
<BiMedal className='silver' size={30}/>

</div>:e.score>90?
<div class="goldc"> 
{e.score}
<BiMedal className='gold' size={30}/>

</div>

:<></> }

</div></div>
</div>:<></>)}

</div>


         </div>

     </div>
       </div>


    </div>
           </div>
    
            
    )
}

export default Profilepage


