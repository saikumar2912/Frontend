import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { Display } from '../Redux/Auth/Login/DisplayAction';
import './AddPost.css';
import Button from '@material-ui/core/Button';

const AddPost = () => {
// const {location:{state}}=user
// console.log(state._id)
 const user = useSelector(state => state.user.user)
console.log(user)

const dispatch=useDispatch()

const [content,setContent]=useState([]);
const [Data,setData] = useState([]);
const[value,setValue]=useState([]);
const[skill,setSkill]=useState([]);
const [id,setId]=useState([]);
const Token = () => localStorage.getItem("user");

    useEffect(()=>{
        
      Axios.post('http://localhost:8000/skill/userskills',{user_id:user._id},{headers:{authorization:`Bearer ${Token()}`}})
      .then((res)=>{setData(res.data.skills)
        }
    )


      },[user._id])

//  console.log({skills:Data})
const Add= Data.map(Add=>Add)
const Skillchange=(e)=>{
    setSkill((Data[e.target.value]))
    
   const skill=Data[e.target.value].skill_id
    // console.log(skill)
        
    Axios.post("http://localhost:8000/bit/newskill",{skill_id:skill},{headers:{authorization:`Bearer ${Token()}`}})
            .then((res)=>setValue(res.data.bits)) 
}
console.log(skill)
const Bit= value.map(Bit=>Bit)
// console.log(Bit)
const BitChange=(e)=>{
    setId((value[e.target.value]))
}
// console.log(id)

 const post=(a,b)=>{
    //  console.log(id)
    const posted={
    user_id:user,
    skill_id:id.skill_id,
    skill_title:skill.title,
    bit_id:id.bit_id,
    bit_title:id.title,
       content:a,
        like:b
    }
    Axios.post("http://localhost:8000/post/addpost",posted,{headers:{authorization:`Bearer ${Token()}`}})
    .then((res)=>(console.log(res.data)))
    .then(alert("posted succeffully"))
    .catch((e)=>{alert(e.message)})
    dispatch(Display())

    }


    return (
        <div className="card-class" >
            <div className="select">
                <select className="select__skill form-control" onChange={e=> Skillchange((e))} >
                        <option  > Select the Skills</option>
                         {
                         Add.map((address, key) => <option key={key}value={key}>{address.title}</option>)
                         }
                </select>
                <select className="select__skill form-control" onChange={e=>BitChange((e))}>
                    <option> Select the bit</option>
                    {
                         Bit.map((address, key) => <option key={key}value={key}>{address.title}</option>)
                         }
                </select>
                
            </div>
           
            <div className="post__textarea"> 
            <textarea  cols="50" rows="20"  className="textarea"onChange={(e)=>setContent(e.target.value)} placeholder="Content"></textarea>

            </div>
<div className="post__btn">
<Button className="post_btn" onClick={()=>post(content)}>post</Button>   

</div>
        </div>
    )
}

export default AddPost