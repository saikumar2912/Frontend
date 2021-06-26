import {useSelector,useDispatch} from 'react-redux';
import { Avatar} from '@material-ui/core';
import {  dislike,like} from '../Redux/Auth/Login/DisplayAction';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import SimpleModal from './Pop';
import { Link } from 'react-router-dom';
import parse from "html-react-parser"
import Quiz from '../After_login/Quiz'
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
                   
                  </div>
               </div>
            </div>
          <div className="card-body">
            <div className="card-body-in">
              <strong> Title:</strong>  {e.bit.title}
            </div>
            <div className="card-body-in">
              <strong> Content:</strong>   {parse(e.content)}
            </div>
            <div className="card-foot">
              <ThumbUpAltIcon className={e.like.includes(user._id)?"like_icon":"like_icons"} onClick={()=>{dispatch(like(e._id,user._id));}} size={100}/>{e.like.length}
              <ThumbDownIcon className={e.dislike.includes(user._id)?"dislike_icon":"dislike_icons"} onClick={()=>{dispatch(dislike(e._id,user._id))}} size={100}/>{e.dislike.length}
              <div class="d-flex flex-fill align-items-center justify-content-center">
              <div className="link">
              <Link to={{pathname:'/postDetails',state:e}} >View</Link>
                </div>
               
              </div>

              <div className="warning">
              
                <SimpleModal postid={e._id} count={e.reports.length}/>
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