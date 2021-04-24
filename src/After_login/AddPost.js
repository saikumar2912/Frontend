import React,{useState} from 'react'
import Axios from 'axios';
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar';


const AddPost = ({user}) => {
     let history = useHistory();
console.log(history);
console.log(user)
const [content,setContent]=useState("");

const post=(a)=>{
const posted={
    // user_id:user._id,
    content:a
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
