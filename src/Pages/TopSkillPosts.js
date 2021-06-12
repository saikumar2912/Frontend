import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Avatar,Card } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import WarningIcon from '@material-ui/icons/Warning';


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
            {posts.map(e=>a._id===e.skill._id?<Card >

<div  >
     <Avatar alt={"title"} src={e.skill.photo} />
     <div >
   <h5> <strong>{e.skill.Title}</strong></h5> 
   <div >
<h6>  {e.user.user_name}</h6>
</div>
     </div>
</div>

<div >
<strong> Bit_Title:</strong>  {e.bit.title}
</div>
<div >
<strong> Content:</strong>{e.content}
</div>

<div >
<div>

<ThumbUpAltIcon   
size={100}/>{e.like.length}
<ThumbDownIcon  size={100}/>{e.dislike.length}
</div>
<WarningIcon size={100}/>{e.reports.length}

</div>

</Card>:<></>)}
           
        </div>
    )
}

export default TopSkillPosts
