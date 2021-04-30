import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import { useHistory } from "react-router-dom";


const AddPost = (user) => {
     let history = useHistory();
console.log(history);
const {location:{state}}=user
console.log(state._id)


const [content,setContent]=useState("");
const [Data,setData] = useState([]);
const[value,setValue]=useState([]);
    useEffect(()=>{
      Axios.post('http://localhost:8000/skill/skills')
      .then(
        (res)=>setData(res.data))
        console.log(setData)
      },[])
 console.log(Data)
 const Select=(i)=>{
     const id1=
     {
         skill_id:i
     }
     console.log(i)
 useEffect(()=>{
    Axios.post('http://localhost:8000/bit/newskill',id1)
    .then(
      (res)=>setValue(res.data))
      console.log(setValue)
    })
console.log(value)
 }
const post=(a,b)=>{
const posted={
   user_id:state._id,
   user_name:state.user_name,
    content:a,
    like:b
}
Axios.post("http://localhost:8000/post/addpost",posted)
.then((res)=>(console.log(res.data)))
.catch((e)=>{alert(e.message)})
}
    return (
        <div>
            <div>
                <select >
                    <option value="select the values"> Select the Skills</option>
                    {Data.map(option=>(<option key={option.id} value={option.Title}>{option.Title}</option>))}
                    
                </select>
            </div>
            <div>
                <select>
                    <option value="select the values"> Select the bit</option>
                    {value.map(option=>(<option key={option.id} value={option.title}>{option.title}</option>))}
                    
                </select>
            </div>
            {/* <div>
                <select onChange={(e)=>setData(e.target.value)} >
                {Data.map((option) => (
              <option key={option.id} value={option.id}>{option.Title}</option>
            ))}
                    <option value={Data}> select the skills</option>
                    <option></option>
                </select>
            </div> */}
<input type="text" onChange={(e)=>setContent(e.target.value)} />
<button onClick={()=>post(content)}>post</button>   
        </div>
    )
}

export default AddPost
