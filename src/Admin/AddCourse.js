import React,{useState} from 'react';
import Axios from 'axios';
import '../App.css'

const AddCourse = () => {
    
const[Title,setTitle]=useState('')
const[Description,setDescription]=useState('')
const [image, setImage] = useState("")
const[url,setUrl]=useState('')

const addPost = async (a,c)=>{
    //console.log(image)
    var formdata = new FormData();

    formdata.append("file", image);
    formdata.append("cloud_name", "buildout123");
    formdata.append("upload_preset", "saikumar");

    let res = await fetch(
    "https://api.cloudinary.com/v1_1/buildout123/auto/upload",
    {
        method: "post",
        mode: "cors",
        body: formdata
    }
    )
    .then(res=>res.json())
    .then(data=>{
        setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })

    const course={
        Title:a,
        Description:c,
        photo:url
    }
    
    Axios.post('http://localhost:8000/skill/addskill',course)
    .then( (res)=>{console.log(res.data)
   
    // Axios.post('http://localhost:8000/bit/addbit',{skill_id:res.data._id})
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
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <div>   
                <textarea  cols="30" rows="10" className="textarea"onChange={(e)=>setDescription(e.target.value)} placeholder="Description"></textarea>
        </div>
       
        <button onClick={()=>{addPost(Title,Description)}}> submit</button>
    </div>
    )
}

export default AddCourse
