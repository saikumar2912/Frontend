import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import {bitdetails, DeleteBit, submit} from '../Redux/Auth/ADMIN/BitAction'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SimplePopover from './EditBit';
import Quiz from './Quiz';
import { Link } from 'react-router-dom';

const Bit = (props) => {

  const {location:{state}}=props;
  console.log(state)
  const dispatch=useDispatch()
const Data = useSelector(data => data.bit.bit)
console.log(Data)
// const [bit,setBit]=useState([])
const bit = useSelector(state => state)
console.log(bit)
const user = useSelector(state => state.user.user)
  console.log(user)


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
   <div class="app-container bit-container">
     <div class="bit-card">
   {Data.map((e)=><>
   {e.title.length >0 ?<div class="bit-card-in">
     {e.title}

     {user.role==="user"?<></>:<>
     <div class="bit-icons">
     <SimplePopover id={e.bit_id}/>
     <DeleteForeverIcon onClick={()=>{dispatch(DeleteBit(e.bit_id))}}/> 
     <Quiz id={e.bit_id}/>
     <Link to={{pathname:"/navbar/questions",
                  state:e.bit_id}} onClick={()=>{}}>view</Link>     
                  
                  </div>
     </>}
   </div>:<>
  
   </>}
   </>)}
  
 <div>
   {user.role==="user"?<></>:<><input className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
   <div className="skill-button">
<a className="bit" onClick={()=>dispatch(submit(state,title))}>ADD</a>
</div>
</>}
 
</div> 
</div>
  </div>



      )
}
    
export default Bit