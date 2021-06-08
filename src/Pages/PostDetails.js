import React from 'react'
import {useHistory} from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {  dislike, like} from '../Redux/Auth/Login/DisplayAction';
import {useDispatch,useSelector} from 'react-redux';
import { Avatar } from '@material-ui/core';

import './PostDetails.css'
const PostDetails = ({props}) => {
    
const dispatch=useDispatch();
const user = useSelector(state => state.user.user)
    console.log(user)
    const history=useHistory()
    console.log(history.location.state)
const e=history.location.state
console.log(e)
    return (
        <div className="postDetails">
             <div className="Details__skill">
                {e.skill.Title} 
                <Avatar alt={"title"} src={e.skill.photo} className="Details__avatar"/>

            </div>
            <div className="Details__user">
                {e.user.user_name} 
            </div>
            <div className="Details__content">
            {e.content}

            </div>
<div className="Details__icons">
<ThumbUpAltIcon className={e.like.includes(user._id)?"like_icon":"likes_icon"} onClick={()=>{dispatch(like(e._id,user._id));}} 
       size={100}/>{e.like.length}
<ThumbDownIcon className={e.dislike.includes(user._id)?"dislike_icon":"dislikes_icon"} onClick={()=>{dispatch(dislike(e._id,user._id))}} size={100}/>{e.dislike.length}
            
        </div>
        </div>
        
    )
    }

export default PostDetails
