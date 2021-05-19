import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { Avatar, Card } from '@material-ui/core';
import{BiDislike, BiLike} from 'react-icons/bi'
import WarningIcon from '@material-ui/icons/Warning';
import {  dislike, irrevelant, like} from '../Redux/Auth/Login/DisplayAction';
const Post = ({id,a}) => {
    
  // useEffect(()=>{
        
  //   axios.post('http://localhost:8000/post/userposts',{skill_id:id})
  //   .then((res)=>{console.log(res.data)
  //     }
  // )


  //   },[id])

const dispatch=useDispatch();
    const user = useSelector(state => state.user.user)
    console.log(user)
    const Display = useSelector(state => state.display.display)
    console.log(Display)
   
   

    return (
      

<div>
  {Display.map(e=>id === e.skill_id._id ?
    <Card className='homepage__card'>

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
<div className="content">
  Content:{e.content}
  </div>

  <div className="icons">
  <BiLike className="like_icon" onClick={()=>{dispatch(like(e._id,user._id))}}   size={100}/>{e.like.length}
  <BiDislike className="dislike_icon"  onClick={()=>{dispatch(dislike(e._id,user._id))}} size={100}/>{e.dislike.length}
  <WarningIcon className="warning_icon" onClick={()=>{dispatch(irrevelant(e._id,user._id))}} size={100}/>{e.irrevelant_content.length}

  </div>
  
  </Card>
 
          

              :<></> )} 

            
              </div>
              
          
    )
}

export default Post
