import { Card } from '@material-ui/core';
import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {  dislike, like} from '../Redux/Auth/Login/DisplayAction';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

import Avatar from '@material-ui/core/Avatar';

const Skillsearch = (search) => {

  const [skills, setskills] = useState('')

  const dispatch=useDispatch();

  const user = useSelector(state => state.user.user)
  console.log(user)
    const Data = useSelector(state => state.display.display)
    console.log(Data)

    const filteredPost = Data && Data.filter((e) => e && e.skill_id.Title.toLowerCase().replace(/\s/g, '').includes(skills.toLowerCase().replace(/\s/g, '')))

  console.log(filteredPost)
     console.log (search)

    return (
<div class="card-class">
    <div class="row">
      <input onChange={(e)=>setskills(e.target.value)}/>
{filteredPost.map(e=>
              <div class="col-xl-4 col-lg-4 col-4">

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


  </div>
  
  </Card>
              </div>
              )}

              </div>
        </div>
    )
}

export default Skillsearch
