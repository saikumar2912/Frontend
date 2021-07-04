import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux';
import WarningIcon from '@material-ui/icons/Warning';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import parse from "html-react-parser"
import axios from 'axios';

const Achivements = () => {

const[score,setScore]=useState('')
const user = useSelector(state => state)
console.log(user)
const post = useSelector(state => state.display.display)
console.log(post)
const achive=useSelector(state=>state.user.achivement)
console.log(achive)
useEffect(() => {
   axios.post('http://localhost:8000/result/getallquiz',{})
   .then((res)=>setScore(res.data))
   .catch((err)=>console.log(err.message)) 
   
}, [])
    
console.log(score)
    return (
        <div class="">
            <div class="admin-home-cards">
                <div class="row">
            { post.map(e=>achive.achivement.includes(e._id)? <div class="col-xl-12 col-lg-12 col-12" >

<div  className="admin-cards">
    <div class="card-head">
    <Avatar alt={"title"} src={e.skill.photo}  />
     <div class="card-head-in">
         <div class="card-head-name">
         <h5> <strong>{e.skill.Title}</strong></h5>
         </div>
    
     </div>
</div>
<div className="card-body">

<div className="card-body-in">
<strong> Title:</strong>  {e.bit.title}
</div>
<div className="card-body-in">
Content: {parse(e.content)}
</div>

<div class="card-foot">

<ThumbUpAltIcon className="" 
size={100}/>{e.like.length}
<ThumbDownIcon className=""  size={100}/>{e.dislike.length}
<div class="warning">
<WarningIcon className=""  size={100}/>{e.reports.length}
</div>

</div>

    </div>
     

</div>
</div>: <> </>)}
        </div>
            </div>
            
        </div>
    )
}

export default Achivements
