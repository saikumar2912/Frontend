import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import services from '../Redux/Auth/Login/services';
import {fetchuser} from '../Redux/Auth/Login/Action'
import { reqVerification } from '../Redux/Auth/ADMIN/VerificationAction';
import { Skill } from '../Redux/Auth/ADMIN/SkillAction';
import { Displayreports } from '../Redux/Auth/Login/DisplayAction';
const LoginOtp = () => {
    const [phoneNo, setphoneNo] = useState('')
    const [code, setCode] = useState('')

    const [state,setState]=useState(true)
    const history=useHistory()
    const dispatch= useDispatch()
    
const submit=(a)=>{
   console.log(a)
    axios.post('http://localhost:8000/users/logins',{phoneNo:a})
    .then((res)=>console.log(res.data))
    .catch((e)=>console.log(e))

}
const verify=(phoneNo,b)=>{
   console.log(b,phoneNo)
    axios.post('http://localhost:8000/users/verify',{phoneNo:phoneNo,code:b})
    .then((res)=>{console.log(res.data)
        localStorage.setItem('user',res.data.token)
        services.getCurrentUser().then((res)=>{dispatch(fetchuser(res))
        
        if(res.role==='user'){
            dispatch(reqVerification())
            dispatch(Skill())
            dispatch(Displayreports())
        }
    })
        
    }
    
    )
   

}
    return (
        <div>
           <div className="" >
              
              <label htmlFor="number" className="" > PhoneNo</label>
              <input type="number" name='number' placeholder=" Enter Your PHONENO" className=""  
              onChange={(e)=>setphoneNo(e.target.value)}/>
              {state?<></>:<>
                <label htmlFor="number" className="" > verify</label>

                <input type="number" name='' placeholder=" Enter Your PHONENO" className="" 
               onChange={(e)=>setCode(e.target.value)}/>
              </>
            }

            </div>
            
            {state?<button onClick={() =>{submit(phoneNo);setState(!state)}}>send otp</button>:<button onClick={() =>{verify(phoneNo,code);setState(!state)}}> verify</button>}

        </div>
    )
}

export default LoginOtp
