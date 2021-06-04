import {useSelector,useDispatch} from 'react-redux';
import { Avatar, Card } from '@material-ui/core';
import {  dislike, irrevelant, like} from '../Redux/Auth/Login/DisplayAction';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import SimpleModal from './Pop';

const Post = ({id}) => {
    
const dispatch=useDispatch();
    const user = useSelector(state => state.user.user)
    console.log(user)
    const Display = useSelector(state => state.display.display)
    console.log(Display)
    

    return (
<div class="col-xl-6 col-lg-6 col-6">
  {Display.map(e=>id === e.skill_id._id ?
    <Card className='homepage__card'>

          <div className="homepage__card__header" >
               <Avatar alt={"title"} src={e.skill_id.photo} className="homepage__card__header__avatar" />
               <div className="skill_name">
             <h5> <strong>{e.skill_id.Title}</strong></h5> 
             <div className="user_name">
        <h6>  {e.user_id.user_name}</h6>
          </div>
               </div>
          </div>
          
          <div className="bit_name">
          <strong> Bit_Title:</strong>  {e.bit_id.title}
          </div>
<div className="con">
<strong> Content:</strong>{e.content}
  </div>

  <div className="icons">
  <div class="warn-img">
   
   <ThumbUpAltIcon className={e.like.includes(user._id)?"like_icon":"likes_icon"} onClick={()=>{dispatch(like(e._id,user._id));}} 
       size={100}/>{e.like.length}
<ThumbDownIcon className={e.dislike.includes(user._id)?"dislike_icon":"dislikes_icon"} onClick={()=>{dispatch(dislike(e._id,user._id))}} size={100}/>{e.dislike.length}
</div>

<SimpleModal postid={e._id}/>
  </div>
  
  </Card>
  :<></> )} 
  
     </div>
              
          
    )
}

export default Post