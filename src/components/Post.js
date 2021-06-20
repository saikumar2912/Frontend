import {useSelector,useDispatch} from 'react-redux';
import { Avatar, Card } from '@material-ui/core';
import {  dislike,like} from '../Redux/Auth/Login/DisplayAction';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import SimpleModal from './Pop';
import { Link } from 'react-router-dom';

const Post = ({id}) => {
    
const dispatch=useDispatch();
    const user = useSelector(state => state.user.user)
    console.log(user)
    const Display = useSelector(state => state.display.display)
    console.log(Display)
  
    return (
<div class="row">
  {Display.map(e=>id === e.skill._id ?
    <div className="col-xl-12 col-lg-12 col-12">

          <div className="admin-cards">
            <span></span>
            <div className="card-head">
               <Avatar alt={"title"} src={e.skill.photo}  />
               <div className="card-head-in">
                 <div className="card-head-name">
                    <h5>{e.skill.Title}</h5> 
                    <div class="name">
                      {e.user.user_name}    
                    </div>
                  </div>
               </div>
            </div>
          <div className="card-body">
            <div className="card-body-in">
              <strong> Bit_Title:</strong>  {e.bit.title}
            </div>
            <div className="card-body-in">
              <strong> Content:</strong>{e.content}
            </div>
            <div className="card-foot">
              <ThumbUpAltIcon className={e.like.includes(user._id)?"like_icon":"like_icon"} onClick={()=>{dispatch(like(e._id,user._id));}} size={100}/>{e.like.length}
              <ThumbDownIcon className={e.dislike.includes(user._id)?"dislike_icon":"dislike_icon"} onClick={()=>{dispatch(dislike(e._id,user._id))}} size={100}/>{e.dislike.length}
              <div className="link">
              <Link to={{pathname:'/navbar/postDetails',state:e}} >view</Link>
                </div>
              <div className="warning">
              
                <SimpleModal postid={e._id} count={e.reports.length}/>
                <Link to={{pathname:'/navbar/quiz',state:e.bit._id}}>attend quiz </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
  :<></> )} 
  
     </div>
              
    )
}

export default Post