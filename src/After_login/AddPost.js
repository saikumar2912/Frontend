import React,{useState,useEffect} from 'react'
import Axios from 'axios';


const AddPost = (user) => {
const {location:{state}}=user
console.log(state._id)



const [content,setContent]=useState([]);
const [Data,setData] = useState([]);
const[value,setValue]=useState([]);
    useEffect(()=>{
        
      Axios.post('http://localhost:8000/skill/userskills',{user_id:state})
      .then((res)=>{setData(res.data.skills)
        
       }
    )


      },[state])
 console.log({skills:Data})
const Add= Data.map(Add=>Add)
console.log(Add)

const Skillchange=(e)=>{
    console.log((Data[e.target.value]))
    
   var skill=Data[e.target.value].skill_id
    console.log(skill)
        
    Axios.post("http://localhost:8000/bit/newskill",{skill_id:skill})
            .then((res)=>setValue(res.data.bits)) 
}
const Bit= value.map(Bit=>Bit)

const BitChange=(e)=>{
    console.log((value[e.target.value]))
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
                    {/* {Bit.map(option=>(<option key={option.id} value={option.title}>{option.title}</option>))} */}
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
