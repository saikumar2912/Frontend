import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import '../App.css'
import {Post} from '../Redux/Auth/PostAction';
const AddCourse = () => {
    
const[Title,setTitle]=useState('')
const[Description,setDescription]=useState('')
const [image, setImage] = useState(" ")
const[url,setUrl]=useState('')
const user = useSelector(state => state)
console.log(user)
const dispatch=useDispatch()

const addPost =async(user_id,Title,Description)=>{
console.log("addPost")

    //console.log(image)
    var formdata = new FormData();

    formdata.append("file", image);
    formdata.append("cloud_name", "buildout123");
    formdata.append("upload_preset", "saikumar");

    let res =await fetch(
    "https://api.cloudinary.com/v1_1/buildout123/auto/upload",
    {
        method: "post",
        mode: "cors",
        body: formdata
    }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log('dispatch')
        dispatch(Post(user_id,Title,Description,data.url))
    
      })
      .catch(err=>{
        console.log(err)
    })
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
       
        <button onClick={()=>{addPost(user._id,Title,Description)}}> submit</button>
    </div>
    )
}

export default AddCourse
