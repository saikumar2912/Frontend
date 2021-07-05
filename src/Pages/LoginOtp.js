import React,{useState} from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import services from '../Redux/Auth/Login/services';
import {fetchuser} from '../Redux/Auth/Login/Action'
import { reqVerification } from '../Redux/Auth/ADMIN/VerificationAction';
import { Skill } from '../Redux/Auth/ADMIN/SkillAction';
import { Displayreports } from '../Redux/Auth/Login/DisplayAction';
import PhoneInput from 'react-phone-number-input/input'

const LoginOtp = () => {
    const [phoneNo, setphoneNo] = useState('')
    const [code, setCode] = useState('')

    const [state,setState]=useState(true)
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
        <div class="wrapper">
          <nav className='navbars'>
        <Link to='/' className='navbar-links'>
          BUILD OUT
          <i class='fab fa-firstdraft' />
        </Link>
        <div class="topbar-items">
          <ul className="navbar-menu">
            <li className="navbar-item">
            <Link to='/' className='navbar-links'>
                    Login
                </Link>
            </li>
            <li className="navbar-item">
            <Link to='/Register' className='navbar-links'>
                    Register
                </Link>
            </li>
          </ul>
        </div>
        </nav>

          
        <div class="app-container bit-container">
         <div class="admin-cards login-page">
           <span></span>
           <div class="card-body">
           <form class="login-form form-group">
           <label htmlFor="number" > PhoneNo</label>
              <input type="" name='number' placeholder=" Enter Your PHONENO" className="form-control"  
              onChange={(e)=>setphoneNo(e.target.value)}/>
          
               {state?<></>:<>
               <div class="login-inputs">
                 <label htmlFor="number" className="form-label" > verify</label>

                 <input type="number" name='number' placeholder=" Enter OTP" className="form-control" 
                onChange={(e)=>setCode(e.target.value)}/>
                </div>
               </>
     }
     <div class="login-button">
     {state?<a class="login" onClick={() =>{submit(phoneNo);setState(!state)}}>send otp</a>:<a class="login" onClick={() =>{verify(phoneNo,code);setState(!state)}}> verify</a>}

     </div>
       </form>
           </div>
         </div>

        </div>
        
        <footer class="c-footer">
            <div class="c-inner">
              Copyright BuildOut. All rights reserved. For internal use only.
            </div>
          </footer>
          

        </div>
        
        // <div>
        //    <div className="" >
              
        //       <label htmlFor="number" className="" > PhoneNo</label>
        //       <input type="number" name='number' placeholder=" Enter Your PHONENO" className=""  
        //       onChange={(e)=>setphoneNo(e.target.value)}/>
        //       {state?<></>:<>
        //         <label htmlFor="number" className="" > verify</label>

        //         <input type="number" name='' placeholder=" Enter Your PHONENO" className="" 
        //        onChange={(e)=>setCode(e.target.value)}/>
        //       </>
        //     }

        //     </div>
            
        //     {state?<button onClick={() =>{submit(phoneNo);setState(!state)}}>send otp</button>:<button onClick={() =>{verify(phoneNo,code);setState(!state)}}> verify</button>}

        // </div>
    )
}

export default LoginOtp