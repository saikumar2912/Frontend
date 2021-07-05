import React from 'react'
import { Avatar} from '@material-ui/core'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import WarningIcon from '@material-ui/icons/Warning';
import parse from "html-react-parser"
import SimplePop from './Editpost';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { DeletePost } from '../Redux/Auth/Login/DisplayAction';

const UserPosts = () => {
    const history=useHistory();
    const state=history.location.state;
    const dispatch=useDispatch();
    const posts = useSelector(state => state.display.display)
    console.log(posts)
 const user = useSelector(state => state.user.user)
    return (
        <div class="app-container">
            <div class="admin-home-cards ">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-12">
                    {posts.map((e)=>e.skill._id===state && e.user._id===user._id?<>
           <div className="admin-cards mt-3">
               <span></span>
               <div className="card-head">
               <Avatar alt={"title"} src={e.skill.photo}  />
                    <div class="card-head-in">
                        <h5>{e.skill.Title}</h5>
                                                
                    </div>
                    <DeleteSweepIcon onClick={()=>{dispatch(DeletePost(e._id))}} />
                    <SimplePop id={e}/>
               </div>
               <div class="card-body">
            <div class="card-body-in"> 
            <strong>{e.bit.title}</strong>
               
           </div>
<div className="card-body-in">
{parse(e.content)}
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
           </>:<> 
           </>)}

                    </div>
                </div>
            </div>
                   </div>
    )
}

export default UserPosts
