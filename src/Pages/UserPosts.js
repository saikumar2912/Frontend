import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import WarningIcon from '@material-ui/icons/Warning';


const UserPosts = (props) => {
    const history=useHistory();
    const state=history.location.state;
    const posts = useSelector(state => state.display.display)
    console.log(posts)
 const user = useSelector(state => state.user.user)
    return (
        <div>
           {posts.map((e)=>e.skill._id===state && e.user._id===user._id?<>
           <div> 
           {e.skill.Title}

           </div>
            <div> 
            {e.user.user_name}
               
           </div>
            <div> 
            {e.bit.title}
               
           </div>
<div>
{e.content}
 </div>
 <div>
     <ThumbUpAltIcon />{e.like.length}
     <ThumbDownIcon/>{e.dislike.length}
     </div>
     <div>
         <WarningIcon/>{e.reports.length}
     </div>


           </>:<></>)}
        </div>
    )
}

export default UserPosts
