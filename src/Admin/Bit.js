import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import {bitdetails, DeleteBit, submit} from '../Redux/Auth/ADMIN/BitAction'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SimplePopover from './EditBit';
import Quiz from './Quiz';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const Bit = (props) => {

  const {location:{state}}=props;
  const dispatch=useDispatch()
const Data = useSelector(data => data.bit.bit)
// const [bit,setBit]=useState([])
const user = useSelector(state => state.user.user)


const[title,setTitle]=useState('')
    useEffect(()=>{
      const Token = () => localStorage.getItem("user");
   return axios.post('http://localhost:8000/bit/newskill',{skill_id:state},{
       headers:{authorization:`Bearer ${Token()}`}
    })
   .then(
       (res)=> {
          console.log(res.data)
          dispatch(bitdetails(res.data.bits))
       })
.catch((e)=>console.log(e))
  },[state])
    
 return (
   <div class="app-container">
     <div className="skill-search">
     {user.role==="user"?<></>:<><input placeholder="Add Bit" className="search__input form-control w-25" onChange={(e)=>setTitle(e.target.value)}value={title}/>
   <div className="skill-button">
<a className="bit ml-4" onClick={()=>{dispatch(submit(state,title));setTitle('')}} >ADD</a>
<ToastContainer/>
</div>
</>}
</div>
     <div class="row">
       

     {Data.map((e)=><>
   {e.title.length >0 ?
       <div className="col-12 col-xl-4 col-lg-4">
             <div className="admin-cards">
               <span></span>
               <div class="card-head">
                 <div class="card-head-in">
                 <strong> {e.title} </strong>  
            
                 </div>
                 <DeleteForeverIcon onClick={()=>{dispatch(DeleteBit(e.bit_id))}}/> 
     <SimplePopover id={e.bit_id}/>
             </div>
      
             <div className="card-body">
               
               <div className="card-foot">
            
               <Quiz id={e.bit_id} skillid={e.skill_id}/>

               </div>
               <div class="skill-card-foot">
     
                 <div className="skill-button">
               
                 <Link to={{pathname:"/questions",
                  state:e.bit_id}} onClick={()=>{}}>view</Link>     
                </div>
    
                 
               </div>
              
              
              </div>
             </div>
             </div>
            
       : <> </>}
     </>
    
   )}
   </div>
</div>   



      )
}
    
export default Bit



