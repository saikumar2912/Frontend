import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import {useSelector} from 'react-redux';

const AddPost = () => {
// const {location:{state}}=user
// console.log(state._id)
 const user = useSelector(state => state.user.user)
console.log(user)

const [content,setContent]=useState([]);
const [Data,setData] = useState([]);
const[value,setValue]=useState([]);
const[skill,setSkill]=useState([]);
const [id,setId]=useState([]);

    useEffect(()=>{
        
      Axios.post('http://localhost:8000/skill/userskills',{user_id:user._id})
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
        
    Axios.post("http://localhost:8000/bit/newskill",{skill_id:skill})
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
    Axios.post("http://localhost:8000/post/addpost",posted)
    .then((res)=>(console.log(res.data)))
    .catch((e)=>{alert(e.message)})
    }


    return (
        <div>
            <div>
                <select onChange={e=> Skillchange((e))} >
                        <option  > Select the Skills</option>
                         {
                         Add.map((address, key) => <option key={key}value={key}>{address.title}</option>)
                         }
                </select>
            </div>
            <div>
                <select onChange={e=>BitChange((e))}>
                    <option> Select the bit</option>
                    {
                         Bit.map((address, key) => <option key={key}value={key}>{address.title}</option>)
                         }
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
