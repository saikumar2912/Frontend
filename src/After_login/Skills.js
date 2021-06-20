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
    <div class="app-container">
      <div class="row">
        {/* <input type="text" onChange={e=>setskills(e.target.value)}/> */}
        {filteredPost.map((e)=> <>{e.Title.length > 0 ?
        <div className="col-12 col-xl-4 col-lg-4">
              <div className="admin-cards">
                <span></span>
                <Link to={{pathname:'/navbar/topskillposts',state:e}} ></Link>
                <div class="card-head">
                  <Avatar alt={"title"} src={e.photo}  />
                  <div class="card-head-in">
                    {user.role==="user"?<> <h4>{e.Title}</h4></>:<><Link className="title" to={{pathname:'/navbar/topskillposts',state:e}} >{e.Title}</Link></>}
                  </div>
                  <PeopleIcon/>{e.followers.length}
              </div>

              <div className="card-body">
                <strong> Description:</strong>
                <p>{e.Description} </p>
                <div className="card-foot">
                  {user.role==="user"?<div className="skill-card-foot home-skill-button">
                  <Link class="skill-button" onClick={()=>dispatch(follow(e._id,user._id))}> {e.followers.includes(user._id)? <> unfollow</>:<>follow</> }</Link>
                </div>:<div class="skill-card-foot">
                  <div className="skill-button">
                  <Link to={{pathname:"/navbar/view",
                  state:e._id}} onClick={()=>{}}>add bit</Link>
                  </div>
                  < DeleteSweepIcon  onClick={()=>{dispatch(Delete(e._id))}}/>
                  <SimplePop id={e._id}/>
                </div>}  
               </div>
              </div>
              </div>
              
              </div>
              
          
         
          



         
        : <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </div>
    </div>
    </>
  );
  
}