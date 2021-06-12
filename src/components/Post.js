import {useSelector,useDispatch} from 'react-redux';
import { Avatar, Card } from '@material-ui/core';
import {  dislike, irrevelant, like} from '../Redux/Auth/Login/DisplayAction';
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
<div >
  {Display.map(e=>id === e.skill._id ?
    <Card >

          <div  >
               <Avatar alt={"title"} src={e.skill.photo}  />
               <div >
             <h5> <strong>{e.skill.Title}</strong></h5> 
             <div >
        <h6>  {e.user.user_name}</h6>
          </div>
               </div>
          </div>
          
          <div>
          <strong> Bit_Title:</strong>  {e.bit.title}
          </div>
<div >
<strong> Content:</strong>{e.content}
  </div>

  <div >
  <div >
   
   <ThumbUpAltIcon className={e.like.includes(user._id)?"like_icon":"likes_icon"} onClick={()=>{dispatch(like(e._id,user._id));}} 
       size={100}/>{e.like.length}
<ThumbDownIcon className={e.dislike.includes(user._id)?"dislike_icon":"dislikes_icon"} onClick={()=>{dispatch(dislike(e._id,user._id))}} size={100}/>{e.dislike.length}
</div>
<Link to={{pathname:'/navbar/postDetails',state:e}} >view</Link>

<SimpleModal postid={e._id} count={e.reports.length}/>
  </div>
  
  </Card>
  :<></> )} 
  
     </div>
              
    )
}

export default Post