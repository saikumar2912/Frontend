import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Avatar} from '@material-ui/core';

const TopQuizUsers = () => {
const[scores,setScores]=useState([])

useEffect(() => {
   axios.post('http://localhost:8000/result/gettopusers')
   .then((res)=>setScores(res.data))
}, [])
console.log(scores)
    return (
        <div className="app-container">
<div class="row">
  {scores.map(e=>e.score > 0 ? 
    <div className="col-12 d-flex col-xl-4 col-lg-4">

          <div className="admin-cards">
            <span></span>
            <div className="card-head">
               <Avatar alt={"title"} src={e.user_id.profile_picture}  />
               <div className="card-head-in">
                 <div className="card-head-name">
                    <h5> {e.user_id.user_name}</h5> 
                   
                  </div>
               </div>
            </div>
          <div className="card-body flex-fill">
          <strong> Title: {e.skill_id.Title}</strong>  

            <div className="card-body-in">

               {e.bit_id.title} 
            </div>
            <div className="card-body-in">
         Score: {e.score}
              
            </div>
            
          </div>
          <div className="card-foot">
              <div class="d-flex flex-fill align-items-center justify-content-center">
              <div className="link">
                </div>
              </div>
              <div className="warning">
              
              </div>
            </div>
          </div>
        </div>
  :<></> )} 
  
     </div>
        </div>
    )
}

export default TopQuizUsers
