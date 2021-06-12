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

const user=useSelector(state=>state.display.display)
console.log(user)
const admin=useSelector(state=>state.user.user._id)
const post=useSelector(state=>state.display.display.map(e=>e._id))

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
        <div >
            {posts.map((e)=><>
            {e.content.length>0?<Card >

<div  >
     <Avatar alt={"title"} src={e.skill.photo}  />
     <div >
   <h5> <strong>{e.skill.Title}</strong></h5> 
   <StarBorderIcon  onClick={()=>{achive(e.user._id,e._id)}} />

     </div>
</div>
<div >
<strong>  PostedBy:</strong> {e.user.user_name}
</div>
<div >
<strong> Bit_Title:</strong>  {e.bit.title}
</div>
<div >
Content:{e.content}
</div>

<div >
<div >

<BiLike className="like_icon"size={100}/>{e.like.length}
<BiDislike className="dislike_icon"   size={100}/>{e.dislike.length}
</div>
<WarningIcon size={100}/>{e.reports.length}

</div>

</Card>:<></> }
            </>)}
        </div>
    )
}

export default AdminHome
