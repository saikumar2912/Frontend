import React from 'react'
import { Avatar, Card } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import WarningIcon from '@material-ui/icons/Warning';


const UserPosts = () => {
    const history=useHistory();
    const state=history.location.state;
    const posts = useSelector(state => state.display.display)
    console.log(posts)
 const user = useSelector(state => state.user.user)
    return (
        <div class="app-container">
            <div class="admin-home-cards">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-12">
                    {posts.map((e)=>e.skill._id===state && e.user._id===user._id?<>
           <div className="admin-cards">
               <span></span>
               <div className="card-head">
               <Avatar alt={"title"} src={e.skill.photo}  />
                    <div class="card-head-in">
                        <h5>{e.skill.Title}</h5>
                                                
                    </div>
               </div>
               <div class="card-body">
            <div class="card-body-in"> 
            <strong>{e.bit.title}</strong>
               
           </div>
<div className="card-body-in">
{e.content}
 </div>
 <div class="card-foot">
     <ThumbUpAltIcon />{e.like.length}
     <ThumbDownIcon/>{e.dislike.length}
     </div>
     <div class="admin-warning">
         <WarningIcon/>{e.reports.length}
     </div>


           </div>
           </div>
           </>:<></>)}

                    </div>
                </div>
            </div>
                   </div>
    )
}

export default UserPosts
