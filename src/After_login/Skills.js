import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import { follow } from '../Redux/Auth/ADMIN/SkillAction';
import './Skills.css'
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Delete } from '../Redux/Auth/PostAction';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PeopleIcon from '@material-ui/icons/People';
import Navbar from '../components/Navbar'
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
    <div class="card-class">
    <div class="row">
    <input type="text" onChange={e=>setskills(e.target.value)}/>
    
    {filteredPost.map((e)=> <>
              {e.Title.length > 0 ?
              <div class="col-xl-4 col-lg-4 col-4">
              <Card className='skill__card'>
              <div className="homepage__card__header" >

              <Avatar alt={"title"} src={e.photo} className="homepage__card__header__avatar" />
              <div className="skill_name">
              <h4> {e.Title}</h4> 

             

              </div>
<PeopleIcon/>      {e.followers.length}

              </div>

              <div className="description" >
               <h3><strong> Description:</strong> </h3>

               <h4 className="des">{e.Description} </h4> 
              </div>
              <div className="btn-di">
              {user.role==="user"?<div>
                <button className="btn btn-primary" onClick={()=>dispatch(follow(e._id,user._id))}> 
                {e.followers.includes(user._id)? <> unfollow</>:<>follow</> }
</button>
</div>:

<div className='navbar-item'>
        <Link to={{pathname:"/navbar/view",
                  state:e._id}} onClick={()=>{}} className="navbar-lin">add bit</Link>
        < DeleteForeverIcon className="bttn" onClick={()=>{dispatch(Delete(e._id))}}/>

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