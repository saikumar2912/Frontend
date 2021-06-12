import { Card } from '@material-ui/core';
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';
import { follow } from '../Redux/Auth/ADMIN/SkillAction';

import Avatar from '@material-ui/core/Avatar';

const Postsearch = (search) => {

  const dispatch=useDispatch();


  const user = useSelector(state => state.user.user)
  console.log(user)
    const Data = useSelector(state => state.skill.skill)
    console.log(Data)

    const filteredPost =
   Data  &&
  Data.filter((e) => e && e.Title.toLowerCase().replace(/\s/g, '').includes(search.toLowerCase().replace(/\s/g, '')))

  console.log(filteredPost)
     console.log (search)

    return (
        <>   
        <div >
        <div>
        {filteredPost.map((e)=> <>
                  {e.Title.length > 0 ?
                  <div >
                  <Card>
                  <div  >
    
    
                  <Avatar alt={"title"} src={e.photo}  />
                  <div >
                  <h4> {e.Title}</h4> 
    
                 
    
                  </div>
              <strong>Followers:{e.followers.length}</strong>
    
                  </div>
    
                  <div  >
                   <h3><strong> Description:</strong> </h3>
    
                   <h4 >{e.Description} </h4> 
                  </div>
                  <div >
                  {user.role==="user"?<div>
                    <button  onClick={()=>dispatch(follow(e._id,user._id))}> 
                    {e.followers.includes(user._id)? <> unfollow</>:<>follow</> }
    </button>
    </div>:
    
    <div className='navbar-item'>
            <Link to={{pathname:"/navbar/view",
                      state:e._id}} onClick={()=>{}} >add bit</Link>
    
    </div>
    }  
                   
     
    
                  </div>
    
                  </Card>
                  </div>
                  
              
             
              
    
    
    
             
            : <>{console.log("no posts")}</>}
          </>
        
          
        )}
        </div>
        </div>
        </>
    )
}

export default Postsearch