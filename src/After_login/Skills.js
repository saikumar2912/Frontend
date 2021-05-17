import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import {useSelector} from 'react-redux'


export default function RecipeReviewCard() {

  const user = useSelector(state => state.user.user._id)
  console.log(user)
  const [showfollow,setShowFollow] = useState(true)


  const gettoken = ()=>localStorage.getItem('user')




    const [Data,setData] = useState([]);
    
    
    useEffect(()=>{
            
      Axios.post('http://localhost:8000/skill/skills')
      .then((res)=>setData(res.data))
       
      },[])
      console.log(Data)

const follow=(skillid)=>{  
  console.log(skillid)
  Axios.post(`http://localhost:8000/skill/follow`,{user_id:user,_id:skillid},{headers:{authorization:`Bearer ${gettoken()}`}})
  .then((res)=>console.log(res.data))
  .then(data=>console.log(data))
  .catch((e)=>{alert(e.message)})

  setShowFollow(true)
}

      
      
       
   
  return (
    <>   
    {Data.map((e)=> <>
              {e.Title.length > 0 ?   
              
              <div className="post">
         
          <div className="post__header">
          <Avatar className="post__avatar"
            src={e.photo}
            alt={e.Title}/>
            <h3>{e.Title}</h3>

          </div>
          <h4 className="post__text"> {e.Description} </h4>
          {showfollow ?
            <button onClick={()=>follow(e._id)}>follow</button>
            :
            <button onClick={()=>follow(e._id)}>unfollow</button>
          }

         
        </div>
        : <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </>
  );
}
