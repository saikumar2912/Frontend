import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import { Skill } from '../Redux/Auth/ADMIN/SkillAction';
import './Skills.css'

export default function RecipeReviewCard() {
  const dispatch=useDispatch();

  const user = useSelector(state => state.user.user._id)
  console.log(user)
  const [showfollow,setShowFollow] = useState(true)

  const gettoken = ()=>localStorage.getItem('user');
      const [Data,setData] = useState([]);
    
    
    useEffect(()=>{
            
      Axios.post('http://localhost:8000/skill/skills')
      .then((res)=>setData(res.data))
       
      },[])
      console.log(Data)

const follow=(skillid)=>{  
  console.log(skillid)
  Axios.post(`http://localhost:8000/skill/follow`,{user_id:user,_id:skillid},{headers:{authorization:`Bearer ${gettoken()}`}})
  .then((res)=>{console.log(res.data)
  dispatch(Skill())
  }
  )
  .catch((e)=>{alert(e.message)})

  setShowFollow(false)
}

      
      
       
   
  return (
    <div className="container">


    <>   
    {Data.map((e)=> <>
              {e.Title.length > 0 ?   
              
              <div className="profile-card">
         
         <div>
         <Avatar className=""
            src={e.photo}
            alt={e.Title}/>
         </div>
          <div>
            <h3 className="profile-content">{e.Title}</h3>
            
          </div>
          
          <h4 className="desc"> {e.Description} </h4>
         <div className="btn-div">
         <button className="btn" onClick={()=>follow(e._id)}>follow</button>

         </div>


         
        </div>
        : <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </>
    </div>

  );
}
