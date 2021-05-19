import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import { Skill } from '../Redux/Auth/ADMIN/SkillAction';
import './Skills.css'
import { Card } from '@material-ui/core';

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

    <>   
    {Data.map((e)=> <>
              {e.Title.length > 0 ?<Card className='skill__card'>
              <div className="homepage__card__header" >


              <Avatar alt={"title"} src={e.photo} className="homepage__card__header__avatar" />
              <div className="skill_name">
              <h4> {e.Title}</h4>  

              </div>
              </div>

              <div className="user_name" >
               <h3><strong> Description:</strong> </h3>

               <h4 className="des">{e.Description} </h4> 
              </div>
              <div className="btn-div">
                <button className="btn" onClick={()=>follow(e._id)}> follow</button>
              </div>

              </Card>
              
          
         
          



         
        : <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </>
  );
}
