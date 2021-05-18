import React from 'react'
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useEffect} from 'react';

const Post = ({id}) => {
    
  // useEffect(()=>{
        
  //   axios.post('http://localhost:8000/post/userposts',{skill_id:id})
  //   .then((res)=>{console.log(res.data)
  //     }
  // )


  //   },[id])


    const user = useSelector(state => state)
    console.log(user)
    const Display = useSelector(state => state.display.display)
    console.log(Display)
    
   

    return (
         
          <div>
              {Display.map((e)=>(id === e.skill_id ? <></>:<></> ))} 
          
          </div>
    )
}

export default Post
