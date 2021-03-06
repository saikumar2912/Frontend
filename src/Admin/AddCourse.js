import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Post} from '../Redux/Auth/ADMIN/SkillAction';
import {  toast } from 'react-toastify';
import { ToastContainer} from 'material-react-toastify';
  import 'material-react-toastify/dist/ReactToastify.css';
const AddCourse = () => {


const[Title,setTitle]=useState('')
const[Description,setDescription]=useState('')
const [image, setImage] = useState(" ")
const[url,setUrl]=useState('')
const user = useSelector(state => state)
const dispatch=useDispatch()

const addPost =async(user_id,Title,Description)=>{

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
     .catch((e)=>{toast(e.message)})

}
 

    return (
     <div className="app-container">
         <div class="add-skill">
            <div class="add-skill-box">
                <span></span>
            <div>
            <div className="skill-title">
            <label>Title</label>
            <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} value={Title}/>  
        </div>
       
        <div className="skill-text">   
            <textarea  cols="30" rows="10" className="textarea form-control" onChange={(e)=>setDescription(e.target.value)} value={Description} placeholder="Description"></textarea>
        </div>
        <div className="skill-file">
            <input type="file"  onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        
        <div class="skill-button">
        <a onClick={()=>{addPost(user._id,Title,Description);setTitle('');setDescription('');}}> submit</a>
        <ToastContainer/>

        </div>
            </div>
            </div>
         </div>
    </div>
    )
}

export default AddCourse