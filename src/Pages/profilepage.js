import React, { useEffect, useState } from 'react'
import{useSelector,useDispatch} from 'react-redux';
import './profilepage.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Post from '../components/Post';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import { userposts,DeletePost } from '../Redux/Auth/Login/DisplayAction';
import { Card } from '@material-ui/core';
import{BiDislike, BiLike} from 'react-icons/bi'
import WarningIcon from '@material-ui/icons/Warning';
import {MdDelete} from 'react-icons/md';

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

const state = useSelector(state => state.display.display)
console.log(state)

const dispatch=useDispatch()
useEffect(() => {
userposts()

}
, [user])
console.log(state.map(e=>e.content))

    return (
        <div className='profile'>
            <div className="profile__post">

            </div>
        <div className="profile__body" >
            
<div className="profile__body__left">

<Avatar  alt={user.user_name} src={user.profile_picture} className={classes.large}/>
<h1 className="h1">{user.user_name}</h1>

<p className="h3">  <strong>Email:</strong> {user.email_id}</p>
<p className="h4"> <strong> PhoneNo:</strong> {user.phoneNo} </p>

<div className="profile__body__logout">
    <Button>Skills</Button>
</div>
<div className="profile__body__logout">
  <Button> Achivements</Button>
</div >
<div className="profile__body__logout">
    <Button onClick={()=>{
          history.replace("/login")
          window.location.reload()
          }} > Logout</Button>
</div>
    </div> 
    <div className="new">
      {state.map((e)=><>
      {e.content.length > 0?<Card className='homepage__card'>
      <div className="homepage__card__header" >
               <Avatar alt={"title"} src={e.skill_id.photo} className="homepage__card__header__avatar" />
               <div className="skill_name">
             <h5> <strong>{e.skill_id.Title}</strong></h5> 

             <MdDelete  className=" delete_icon" onClick={()=>{dispatch(DeletePost(e._id,user._id))}}/>
               </div>
          </div>
          <div className="bit_name">
          <strong> Bit_Title:</strong>  {e.bit_id.title}
          </div>
          <div className="content">
  Content:{e.content}
  </div>
  <div className="icons">
  
  <div>
  <BiLike className="like_icon" variant="contained"
      size={100}/>{e.like.length}
<BiDislike className="dislike_icon"   size={100}/>{e.dislike.length}
<WarningIcon className="warning_icon"  size={100}/>{e.irrevelant_content.length}

</div>
 </div>

      </Card>:<div> NO POSTS YET</div> }
      </>)}
     
    </div>

           </div>
    
             </div>
    )
}

export default Profilepage
