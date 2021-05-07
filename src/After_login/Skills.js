import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Axios from 'axios';
import { useHistory } from "react-router-dom";



export default function RecipeReviewCard(user) {
  const {location:{state}}=user
console.log(state)

    const [Data,setData] = useState([]);
    
    
    useEffect(()=>{
            
      Axios.post('http://localhost:8000/skill/skills')
      .then((res)=>setData(res.data))
       
      },[])
      console.log(Data)
const follow=(skillid)=>{  
  console.log(skillid)

  const data={
     user_id:state._id

     }
  Axios.put(`http://localhost:8000/skill/follow/${skillid}`,data)
  .then((res)=>console.log(res.data))
  .then(data=>console.log(data))
  .catch((e)=>{alert(e.message)})
}

        
      
       
   
  return (
    <>   
    {Data.map((e)=> <>
              {e.Title.length > 0 ?   
              
              <div className="post">
         
          <div className="post__header">
          <Avatar className="post__avatar"
            src="/static/images/avatar/jpg"
            alt={e.Title}/>
            <h3>{e.Title}</h3>

          </div>
          <h4 className="post__text"> {e.Description} </h4>
<button onClick={()=>follow(e._id)}>follow</button>
        </div>
        : <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </>
  );
}
