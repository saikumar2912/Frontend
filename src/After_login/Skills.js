import { fade, makeStyles } from '@material-ui/core/styles';
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {useSelector,useDispatch} from 'react-redux'
import { follow } from '../Redux/Auth/ADMIN/SkillAction';
import { Link } from 'react-router-dom';
import { Delete } from '../Redux/Auth/ADMIN/SkillAction';
import PeopleIcon from '@material-ui/icons/People';
import SimplePop from '../Admin/Editskill';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop:"1rem"
  },
 
 
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  label: {
    display: 'block',
  },
  input: {
    width: 200,
  },
 
}));
   export default function RecipeReviewCard({search}) {
  const dispatch=useDispatch();
console.log(search)
   const user = useSelector(state => state.user.user)
   console.log(user)
   const state = useSelector(state => state)
   console.log(state)
 const Data = useSelector(state => state.skill.skill)
console.log(Data)
  const count=useSelector(state=>state.skill.skill.map(e=>e.followers))
      
       const filteredPost=Data  && Data.filter((e) => e && e.Title.toLowerCase().replace(/\s/g, '').includes(search.toLowerCase().replace(/\s/g, '')))
console.log(filteredPost)
const NoData=  filteredPost.filter((e)=>e.followers.includes(user._id)===false)

console.log(NoData)
  return (
           
            
                 <>
     <div class="app-container">
<div className="skill-search ">

  {user.role==="user"?<></>:<> <div class='d-flex'>
    <div class='allposts ml-3'>
    <Link to="/new"> All Posts</Link>
</div>
<div  class='allposts ml-3'>
<Link to='/topquizusers'> topquizusers</Link>

</div>
     </div></>}
</div>
    



       <div class="row">
       
{NoData.length>0?<>

  {filteredPost.map((e)=> <>{e.followers.includes(user._id)===false  ?
         <div className="col-12 col-xl-4 col-lg-4">
               <div className="admin-cards">
                 <span></span>
                 <Link to={{pathname:'/topskillposts',state:e}} ></Link>
                 <div class="card-head">
                   <Avatar alt={"title"} src={e.photo} />
                   <div class="card-head-in">
                     {user.role==="user"?<> <h4>{e.Title}</h4></>:<><Link className="title" to={{pathname:'/topskillposts',state:e}} >{e.Title}</Link></>}
                   </div>
                   <PeopleIcon/>{e.followers.length}
               </div>
<div class='card-body flex-fill'>

               <div className="card-body-in">
                 <strong> Description:</strong>
                 <p>{e.Description} </p>
</div>

                 <div className="card-foot">
                   {user.role==="user"?<div className="skill-card-foot home-skill-button">
                   <Link class="skill-button" onClick={()=>dispatch(follow(e._id,user._id))}> follow</Link>
                 </div>:
                 <div class="skill-card-foot">
                  
                   <div className="skill-button d-flex">
                 
                   <Link to={{pathname:"/view",state:e._id}} onClick={()=>{}}>add bit</Link>
                   </div>
                  
                   < DeleteSweepIcon className='deletebutton' onClick={()=>{dispatch(Delete(e._id))}}/>
                   <SimplePop id={e}/>
                 </div>
                
                
                 }  
                </div>
               </div>
               </div>
               </div>
      
         : <> </>}
       </>
      
     )}
</>:<div className='nodata'>
  No More Skills To Follow</div>}
         
     </div>
     </div>
     </>
             
     );

                }
