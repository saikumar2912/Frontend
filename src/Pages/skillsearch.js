import { Card } from '@material-ui/core';
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom';
import { follow } from '../Redux/Auth/ADMIN/SkillAction';

import Avatar from '@material-ui/core/Avatar';

const Skillsearch = (search) => {

  const findd = search.history.location.state
  const dispatch=useDispatch();

  const user = useSelector(state => state.user.user)
  console.log(user)
    const Data = useSelector(state => state.skill.skill)
    console.log(Data)

    const filteredPost =
   Data  &&
  Data.filter((e) => e && e.Title.toLowerCase().replace(/\s/g, '').includes(findd.toLowerCase().replace(/\s/g, '')))

  console.log(filteredPost)
     console.log (search)

    return (
        <div>
{filteredPost.map(e=><Card className='skill__card'>
              <div className="homepage__card__header" >


              <Avatar alt={"title"} src={e.photo} className="homepage__card__header__avatar" />
              <div className="skill_name">
              <h4> <Link to={{pathname:"/navbar/view",
                  state:e._id}} onClick={()=>{}} className="navbar-li">{e.Title}</Link></h4>  

              </div>
              </div>

              <div className="user_name" >
               <h3><strong> Description:</strong> </h3>

               <h4 className="des">{e.Description} </h4> 
              </div>
              <div className="btn-div">
              <div>
                <button className="btn" onClick={()=>dispatch(follow(e._id,user._id))}> 
                {e.followers.includes(user._id)? <> unfollow</>:<>follow</> }
</button>
</div>               

no skills
              </div>

              </Card>
              )}
        </div>
    )
}

export default Skillsearch
