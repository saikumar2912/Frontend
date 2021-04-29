import React,{useState} from 'react';
import Axios from 'axios';
import '../App.css'

const AddCourse = () => {
    
const[Title,setTitle]=useState('')
const[Description,setDescription]=useState('')

const submit=(a,c)=>{
        const course={
            Title:a,
            Description:c,
        }
        
        Axios.post('http://localhost:8000/skill/addskill',course)
        .then( (res)=>{console.log(res.data)
       
        // Axios.post('http://localhost:8000/bit/addbit',{title:b,skill_id:res.data._id})
        .catch((e)=>{alert(e.message)})
        })
        .catch((e)=>{alert(e.message)})
        console.log(course)
            

    }

    return (
     <div>
        <div>
            <label>Title</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>  
            </div>
            <div>   
                <textarea  cols="30" rows="10" className="textarea"onChange={(e)=>setDescription(e.target.value)} placeholder="Description"></textarea>
        </div>
       
        <button onClick={()=>{submit(Title,Description)}}> submit</button>
    </div>
    )
}

export default AddCourse
