import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {useSelector,useDispatch} from 'react-redux'
import { follow } from '../Redux/Auth/ADMIN/SkillAction';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Delete } from '../Redux/Auth/PostAction';
import PeopleIcon from '@material-ui/icons/People';
import SimplePop from '../Admin/Editskill';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';


export default function RecipeReviewCard() {
  const dispatch=useDispatch();

  const user = useSelector(state => state.user.user)
  console.log(user)
  
const [skills, setskills] = useState('')
const Data = useSelector(state => state.skill.skill)
console.log(Data)
// const skill = useSelector(state => state.skill.skill.map(e=>e.map(a=>a._id)))
// console.log(skill)
 const count=useSelector(state=>state.skill.skill.map(e=>e.followers))
 console.log(count)     
      //  useEffect(() => {
      //   Axios.post("http://localhost:8000/post/post/count",{skill_id:skill})
      //   .then((res)=>console.log(res.data))

      //  }, [skill])
      const filteredPost =
      Data  &&
     Data.filter((e) => e && e.Title.toLowerCase().replace(/\s/g, '').includes(skills.toLowerCase().replace(/\s/g, '')))
  return (

    <>   
    <div >
    <div >
    {/* <input type="text" onChange={e=>setskills(e.target.value)}/> */}
    
    {filteredPost.map((e)=> <>
              {e.Title.length > 0 ?
              <div >
              <Card  >
              <Link to={{pathname:'/navbar/topskillposts',state:e}} >
                </Link>
              <div  >

              <Avatar alt={"title"} src={e.photo}  />
              <div>
              <h4> </h4>
{user.role==="user"?<> {e.Title}</>:<><Link to={{pathname:'/navbar/topskillposts',state:e}} >{e.Title}</Link>
 </>}
              </div>
<PeopleIcon/>      {e.followers.length}

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

<div >
        <Link to={{pathname:"/navbar/view",
                  state:e._id}} onClick={()=>{}}>add bit</Link>
        < DeleteSweepIcon  onClick={()=>{dispatch(Delete(e._id))}}/>
        <SimplePop id={e._id}/>
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
  );
  
}