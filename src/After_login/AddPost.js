import React,{useState} from 'react'
import Axios from 'axios';
import { useHistory } from "react-router-dom";


const AddPost = (user) => {
     let history = useHistory();
console.log(history);
const {location:{state}}=user
console.log(state._id)


const [content,setContent]=useState("");

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
<input type="text" onChange={(e)=>setContent(e.target.value)} />
<button onClick={()=>post(content)}>post</button>   
        </div>
    )
}

export default AddPost
