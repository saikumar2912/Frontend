import { Avatar, Card } from '@material-ui/core'
import React from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import{useSelector} from 'react-redux'
import WarningIcon from '@material-ui/icons/Warning';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import axios from 'axios';

const AdminHome = () => {

const Data = useSelector(state => state.display.display)
console.log(Data)

const user=useSelector(state=>state.display.display)
console.log(user)
const admin=useSelector(state=>state.user.user._id)
console.log(admin)
const post=useSelector(state=>state.display.display.map(e=>e._id))
console.log(post)

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
        <div>
            {Data.map((e)=><>
            {e.content.length>0?<Card className='homepage__card'>

<div className="homepage__card__header" >
     <Avatar alt={"title"} src={e.skill_id.photo} className="homepage__card__header__avatar" />


     <div className="skill_name">

   <h5> <strong>{e.skill_id.Title}</strong></h5> 
     </div>
     <StarBorderIcon  onClick={()=>{achive(e.user_id._id,e._id)}} className="staricon"/>

</div>
<div className="user_name">
<strong>  PostedBy:</strong> {e.user_id.user_name}
</div>
<div className="bit_name">
<strong> Bit_Title:</strong>  {e.bit_id.title}
</div>
<div className="content">
Content:{e.content}
</div>

<div className="icons">

<div>
<BiLike className="like_icon"  
  variant="contained"
size={100}>  </BiLike>{e.like.length}

<BiDislike className="dislike_icon"   size={100}/>{e.dislike.length}
<WarningIcon className="warning_icon"  size={100}/>{e.irrevelant_content.length}

</div>
</div>

</Card>:<></> }
            </>)}
        </div>
    )
}

export default AdminHome
