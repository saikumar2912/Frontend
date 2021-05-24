import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import {useDispatch,useSelector} from 'react-redux'
import {bitdetails, DeleteBit, submit} from '../Redux/Auth/ADMIN/BitAction'
import { Card } from '@material-ui/core';
import { DeletePost } from '../Redux/Auth/Login/DisplayAction';

const Bit = (props) => {
  const {location:{state}}=props;
  console.log(state)
  const dispatch=useDispatch()
const Data = useSelector(data => data.bit.bit)
console.log(Data)
// const [bit,setBit]=useState([])
const bit = useSelector(state => state)
console.log(bit)

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
   <div>
   {Data.map((e)=><>
   {e.title.length >0 ?<Card>
     {e.title}
     {/* <button onClick={()=>{dispatch(DeleteBit(e.bit_id))}}> delete</button> */}
   </Card>:<></>}
   </>)}
  
 <div>
<input onChange={(e)=>setTitle(e.target.value)}/>
<Button label="ADD" onClick={()=>dispatch(submit(state,title))}/>
</div> 

  </div>



      )
}
    
export default Bit
