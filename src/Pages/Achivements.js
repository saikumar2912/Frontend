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
        <div class="col-xl-6 col-lg-6 col-6">
            { post.map(e=>achive.achivement.includes(e._id)? <Card className='homepage__card'>

<div className="homepage__card__header" >
     <Avatar alt={"title"} src={e.skill_id.photo} className="homepage__card__header__avatar" />
     <div className="skill_name">
   <h5> <strong>{e.skill_id.Title}</strong></h5> 
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

<ThumbUpAltIcon className={e.like.includes(user._id)?"like_icon":"likes_icon"} 
size={100}/>{e.like.length}
<ThumbDownIcon className={e.dislike.includes(user._id)?"dislike_icon":"dislikes_icon"}  size={100}/>{e.dislike.length}
</div>
<WarningIcon className={e.irrevelant_content.includes(user._id)?"warning_icon":"warnings_icon"}  size={100}/>{e.irrevelant_content.length}


</div>

</Card>: <> </>)}
        </div>
    )
}

export default Achivements
