import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import {useDispatch,useSelector} from 'react-redux'
import {bitdetails, submit} from '../Redux/Auth/ADMIN/BitAction'
import { skills } from '../Redux/Auth/PostAction';

const Bit = (props) => {
  const {location:{state}}=props;
  console.log(state)
  const dispatch=useDispatch()
const Data = useSelector(data => data.bit.bit.bits)
console.log(Data)


const[title,setTitle]=useState('')
    useEffect(()=>{
      const Token = () => localStorage.getItem("user");
   return axios.post('http://localhost:8000/bit/newskill',{skill_id:state},{
       headers:{authorization:`Bearer ${Token()}`}
    })
   .then(
       (res)=> {
          console.log(res.data)
          dispatch(bitdetails(res.data))
       })
.catch((e)=>console.log(e))
  },[])
    
 return (
  <div>

<input onChange={(e)=>setTitle(e.target.value)}/>
<Button label="ADD" onClick={()=>dispatch(submit(state,title))}/>
  </div>



      )
}
    
export default Bit
