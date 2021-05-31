import React,{useEffect} from 'react'
import axios from 'axios';
import {useSelector} from 'react-redux';
import { Card } from '@material-ui/core';
import{BiDislike, BiLike} from 'react-icons/bi'
import WarningIcon from '@material-ui/icons/Warning';
import Avatar from '@material-ui/core/Avatar';

const Achivements = () => {

const user = useSelector(state => state)
console.log(user)
const post = useSelector(state => state.display.display)
console.log(post)
const achive=useSelector(state=>state.user.achivement)
console.log(achive)

    
    return (
        <div>
            {post.map(e=>achive.achivement.includes(e._id)? <Card className='homepage__card'>
      <div className="homepage__card__header" >
               <Avatar alt={"title"} src={e.skill_id.photo} className="homepage__card__header__avatar" />
               <div className="skill_name">
             <h5> <strong>{e.skill_id.Title}</strong></h5> 

               </div>
          </div>
          <div className="bit_name">
          <strong> Bit_Title:</strong>  {e.bit_id.title}
          </div>
          <div className="content">
  Content:{e.content}
  </div>
  <div className="icons">
  
  <div>
  <BiLike className="like_icon" variant="contained"
      size={100}/>{e.like.length}
<BiDislike className="dislike_icon"   size={100}/>{e.dislike.length}
<WarningIcon className="warning_icon"  size={100}/>{e.irrevelant_content.length}

</div>
 </div>

      </Card>: <> </>)}
        </div>
    )
}

export default Achivements
