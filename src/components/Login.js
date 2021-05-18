import React,{useState}from 'react'
import auth from './Auth'
import {useDispatch} from 'react-redux';
import Axios from 'axios';
import './login.css'
import { Link} from 'react-router-dom';
import { login } from '../Redux/Auth/Login/Action';
const Login = (props) => {
  const dispatch=useDispatch();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')



      
    return (

        <div className='login-main'>
        <div className="login-container" >
         <form className="login">
             <h1 className=''> hi welcome</h1>
             <div className="login-inputs" >
            <label htmlFor="email" className="login-label" > Email</label>
                <input type="email" name='email' placeholder=" Enter Your Email" className="login-input"  onChange={(e)=>setEmail(e.target.value)}/>

               </div>
               <div className="login-inputs">
            <label htmlFor="password"  className="login-label" > Password</label>
                <input type="password"  name='password'placeholder=" Enter Your Password"  className="login-input" onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <button
               className='button'
               onClick={()=>{
                   dispatch(login(email,password))
                 }
                   
                   } type='button'> Login</button>
               <Link to="/Register" className="alreadyuser">Don't have an account?</Link>

       </form>

        </div>

        </div>
        
    )
}


export default Login