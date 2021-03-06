import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Avatar,Card } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import WarningIcon from '@material-ui/icons/Warning';
import {useSelector} from 'react-redux';
import parse from "html-react-parser"

import StarBorderIcon from '@material-ui/icons/StarBorder';


const TopSkillPosts = ({props}) => {

    const [posts,setPosts]=useState([])
    const history=useHistory()
    console.log(history.location.state)
    
const user=useSelector(state=>state.display.display)
console.log(user)
const admin=useSelector(state=>state.user.user._id)
const a=history.location.state
console.log(a)
    useEffect(() => {
        axios.post('http://localhost:8000/post/highposts')
        .then((res)=>setPosts(res.data))
        
    }, [])
    console.log(posts)
    const achive=(user,post)=>{
        const submit={
            user_id:user,
            admin_id:admin,
            achivement:post,
        }
        axios.post("http://localhost:8000/achivement/achivement",submit)
        .then((res)=>console.log(res.data))
    }

    return (
        <div class="app-container">
            <div class="admin-home-cards">
                <div class="row">
                {posts.map(e=>a._id===e.skill._id?
                <div class="col-xl-12 col-lg-12 col-12">
                    <div class="admin-cards">
                        <span></span>
<div class="card-head">
     <Avatar alt={"title"} src={e.skill.photo} />
     <div class="card-head-in">
         <div class="card-head-name">
   <h5>{e.skill.Title}</h5> 

   <div class="name">
 {e.user.user_name}
</div>

     </div>
   <StarBorderIcon  onClick={()=>{achive(e.user._id,e._id)}} />

</div>
</div>
<div class="card-body">
    <div class="card-body-in">
<strong> Bit_Title:</strong>  {e.bit.title}
</div>
<div class="card-body-in">
<strong> Content:</strong> 
{parse(e.content)}
</div>
<div className="card-foot">

<ThumbUpAltIcon   
size={100}/>{e.like.length}
<ThumbDownIcon  size={100}/>{e.dislike.length}
<div class="admin-warning">
<WarningIcon size={100}/>{e.reports.length}
</div>
</div>
</div>

</div>

</div>:<></>)}
                </div>
                </div>
           
        </div>
    )
}

export default TopSkillPosts
