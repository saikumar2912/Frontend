import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Avatar,Card } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const TopSkillPosts = ({props}) => {

    const [posts,setPosts]=useState([])
    const history=useHistory()
    console.log(history.location.state)
const a=history.location.state
console.log(a)
    useEffect(() => {
        axios.post('http://localhost:8000/post/highposts')
        .then((res)=>setPosts(res.data))
        
    }, [])
    console.log(posts)

    return (
        <div>
            {posts.map(e=>a._id===e.skill_id._id?<Card className='homepage__card'>

<div className="homepage__card__header" >
     <Avatar alt={"title"} src={e.skill_id.photo}lassName="homepage__card__header__avatar" />
     <div className="skill_name">
   <h5> <strong>{e.skill_id.Title}</strong></h5> 
   <div className="user_name">
<h6>  {e.user_id.user_name}</h6>
</div>
     </div>
</div>

<div className="bit_name">
<strong> Bit_Title:</strong>  {e.bit_id.title}
</div>
<div className="con">
<strong> Content:</strong>{e.content}
</div>

<div className="icons">
<div class="warn-img">

<ThumbUpAltIcon   
size={100}/>{e.like.length}
<ThumbDownIcon  size={100}/>{e.dislike.length}
</div>

</div>

</Card>:<></>)}
           
        </div>
    )
}

export default TopSkillPosts
