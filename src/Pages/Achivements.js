import React from 'react'
import {useSelector} from 'react-redux';
import { Card } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Achivements = () => {

const user = useSelector(state => state)
console.log(user)
const post = useSelector(state => state.display.display)
console.log(post)
const achive=useSelector(state=>state.user.achivement)
console.log(achive)

    
    return (
        <div >
            { post.map(e=>achive.achivement.includes(e._id)? <Card >

<div  >
     <Avatar alt={"title"} src={e.skill.photo}  />
     <div >
   <h5> <strong>{e.skill.Title}</strong></h5> 
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
<div class="warn-img">

<ThumbUpAltIcon className="" 
size={100}/>{e.like.length}
<ThumbDownIcon className=""  size={100}/>{e.dislike.length}
</div>
<WarningIcon className=""  size={100}/>{e.reports.length}


</div>

</Card>: <> </>)}
        </div>
    )
}

export default Achivements
