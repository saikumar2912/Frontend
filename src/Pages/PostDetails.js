import React from 'react'
import {useHistory} from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {  dislike, like} from '../Redux/Auth/Login/DisplayAction';
import {useDispatch,useSelector} from 'react-redux';
import SimpleModal from '../components/Pop'




import Reports from './Reports';
const PostDetails = ({props}) => {
    
const dispatch=useDispatch();
const user = useSelector(state => state.user.user)
const post = useSelector(state => state.display.display)
const report = useSelector(state => state)
console.log(report.display)

    const history=useHistory()
    console.log(history.location.state)
const e=history.location.state


    return (
        <>
        <div class="app-container post-con">
            <div className="admin-cards">
                <span></span>
                <div class="card-body">
        {post.map(a=><>{a._id===e._id?<>
        
            <div>
        <div>
        <div className="card-head">
       
            <img src={a.skill.photo} alt="react" class="left" />
            <div class="card-head-name">
            <h1>{a.skill.Title}</h1>
            <div class="name">
                <h2>{a.user.user_name}</h2>
            </div>
            </div>
        </div>
        
        <div class="card-body">

           

            <p> {a.content}
                </p>
                
        </div>
        <div className="card-foot">
            <div className="card-foot-in">
<ThumbUpAltIcon className={a.like.includes(user._id)?"like_icon":"like_icon"} onClick={()=>{dispatch(like(a._id,user._id));}}  
       size={100}/> {a.like.length}    
       
       <ThumbDownIcon className={a.dislike.includes(user._id)?"dislike_icon":"dislike_icon"} onClick={()=>{dispatch(dislike(a._id,user._id))}} /> {a.dislike.length}
       </div>
       <div className="warning">
       <SimpleModal postid={a._id} count={a.reports.length}/>
            </div>
        </div>
      


    </div>
        </div>
        </>:<></>} </>)}
        </div>
        </div>
        <div class="reports d-flex">
        {post.map(a=><>{a._id===e._id?<>
           <Reports reportid={a._id}/> 
            
        </>:<></>}</>)}
        </div>
        </div>
        </>
        
        
    )
    }

export default PostDetails