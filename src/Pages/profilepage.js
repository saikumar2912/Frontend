import React from 'react'
import{useSelector} from 'react-redux';
import './profilepage.css';
import {CgProfile} from 'react-icons/cg';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Post from '../components/Post';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(14),
      height: theme.spacing(14),
      
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
    return (
        <div className='profile'>
            <div className="profile__post">
           <Post/>

            </div>
        <div className="profile__body" >
            
<div className="profile__body__left">

<Avatar  alt={user.user_name} src={user.profile_picture} className={classes.large}/>
<h1 className="h1">{user.user_name}</h1>

<p className="h3">  <strong>Email:</strong> {user.email_id}</p>
<p className="h4"> <strong> PhoneNo:</strong> {user.phoneNo} </p>

<div className="profile__body__up">
    skills
</div>
<div className="profile__body__achive">
  Achivements
</div >
<div className="profile__body__logout">
    <Button onClick={()=>{
          history.replace("/login")
          window.location.reload()
          }} > Logout</Button>
</div>
    </div> 
    <div className="new">
    </div>

           </div>
    
             </div>
    )
}

export default Profilepage
