import { Avatar, Card } from '@material-ui/core'
import React, { useEffect,useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import{useSelector} from 'react-redux'
import WarningIcon from '@material-ui/icons/Warning';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import axios from 'axios';

const AdminHome = () => {

const [posts, setPosts] = useState([])

const Data = useSelector(state => state.display.display)
console.log(Data)

const user=useSelector(state=>state.display.display)
console.log(user)
const admin=useSelector(state=>state.user.user._id)
console.log(admin)
const post=useSelector(state=>state.display.display.map(e=>e._id))
console.log(post)

useEffect(() => {
    axios.post('http://localhost:8000/post/likes/counts')
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
        <div class="col-xl-6 col-lg-6 col-6">
            {posts.map((e)=><>
            {e.content.length>0?<Card className='homepage__card'>

<div className="homepage__card__header" >
     <Avatar alt={"title"} src={e.skill_id.photo} className="homepage__card__header__avatar" />
     <div className="skill_name">
   <h5> <strong>{e.skill_id.Title}</strong></h5> 
   <StarBorderIcon  onClick={()=>{achive(e.user_id._id,e._id)}} className="staricon"/>

     </div>
</div>
<div className="user_name">
<strong>  PostedBy:</strong> {e.user_id.user_name}
</div>
<div className="bit_name">
<strong> Bit_Title:</strong>  {e.bit_id.title}
</div>
<div className="con">
Content:{e.content}
</div>

<div className="icons">
<div class="warn-img">

<BiLike className="like_icon"size={100}/>{e.like.length}
<BiDislike className="dislike_icon"   size={100}/>{e.dislike.length}
</div>
<WarningIcon className="warning_icon" size={100}/>{e.irrevelant_content.length}


</div>

</Card>:<></> }
            </>)}
        </div>
    )
}

export default AdminHome
