import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import { Display } from '../Redux/Auth/Login/DisplayAction';
import { Link } from 'react-router-dom';





const AddPost = () => {

    
// const {location:{state}}=user
// console.log(state._id)
 const user = useSelector(state => state.user.user)
console.log(user)



const dispatch=useDispatch()

const [content,setContent]=useState('');
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
console.log(id.bit_id)

 const questions = useSelector(state => state.questions.questions)
 console.log(questions)


    return (
        <div className="Quiz__page">
            <div className="">
                
                <span></span>
                <div class="">
                <div class="">
                <select className="" onChange={e=> Skillchange((e))} >
                        <option>Select the Skills </option>
                         {
                         Add.map((address, key) => <option key={key}value={key}>{address.title}</option>)
                         }
                </select>
                <select className="" onChange={e=>BitChange((e))}>
                     <option> Select the bit </option> 
                    {
                         Bit.map((address, key) => <option key={key}value={key}>{address.title}</option>)
                         }
                </select>
                {questions.map(e=>e.bit_id._id===id.bit_id? <></>:<></>)
                
                
                }<Link to={{pathname:'/quiz',state:id.bit_id}}>Attend Quiz </Link>
                <div class="link">

                </div>            
            </div>
            <div className="">

</div>
                    </div>     
            </div>
           
            

        </div>
    )
}

export default AddPost