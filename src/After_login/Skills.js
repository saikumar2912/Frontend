import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {useSelector,useDispatch} from 'react-redux'
import { follow } from '../Redux/Auth/ADMIN/SkillAction';
import { Link } from 'react-router-dom';
import { Delete } from '../Redux/Auth/PostAction';
import PeopleIcon from '@material-ui/icons/People';
import SimplePop from '../Admin/Editskill';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SearchAppBar from '../components/SearchPost';



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
   export default function RecipeReviewCard() {
  const dispatch=useDispatch();

   const user = useSelector(state => state.user.user)
   console.log(user)
 const [skills, setskills] = useState('')
 const Data = useSelector(state => state.skill.skill)
 console.log(Data)

  const count=useSelector(state=>state.skill.skill.map(e=>e.followers))
  console.log(count)     
      
       const filteredPost =
       Data  &&
      Data.filter((e) => e && e.Title.toLowerCase().replace(/\s/g, '').includes(skills.toLowerCase().replace(/\s/g, '')))

  const classes = useStyles();
  
  return (
           
            
                 <>
     <div class="app-container">
<div className="skill-search">

{user.role==="user"?<> </>:< input className="search__input form-control w-25" placeholder="Search…" type="text" onChange={e=>setskills(e.target.value)}/>}
  {user.role==="user"?<></>:<> <div>
  <Link to="/new"> All Posts</Link>
    
     </div></>}
</div>
    



       <div class="row">
       

         {filteredPost.map((e)=> <>{e.followers.includes(user._id)===false  ?
         <div className="col-12 col-xl-4 col-lg-4">
               <div className="admin-cards">
                 <span></span>
                 <Link to={{pathname:'/topskillposts',state:e}} ></Link>
                 <div class="card-head">
                   <Avatar alt={"title"} src={e.photo}  />
                   <div class="card-head-in">
                     {user.role==="user"?<> <h4>{e.Title}</h4></>:<><Link className="title" to={{pathname:'/topskillposts',state:e}} >{e.Title}</Link></>}
                   </div>
                   <PeopleIcon/>{e.followers.length}
               </div>

               <div className="card-body">
                 <strong> Description:</strong>
                 <p>{e.Description} </p>
                 <div className="card-foot">
                   {user.role==="user"?<div className="skill-card-foot home-skill-button">
                   <Link class="skill-button" onClick={()=>dispatch(follow(e._id,user._id))}> follow</Link>
                 </div>:
                 <div class="skill-card-foot">
                  
                   <div className="skill-button">
                 
                   <Link to={{pathname:"/view",
                   state:e._id}} onClick={()=>{}}>add bit</Link>
                   </div>
                  
                   < DeleteSweepIcon  onClick={()=>{dispatch(Delete(e._id))}}/>
                   <SimplePop id={e._id}/>
                 </div>
                
                
                 }  
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
