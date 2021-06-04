import React,{useState}from 'react'
import auth from './Auth'
import {useDispatch} from 'react-redux';
import Axios from 'axios';
import './login.css'
import { Link} from 'react-router-dom';
import { login } from '../Redux/Auth/Login/Action';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  const dispatch=useDispatch();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')



      
    return (

        <div class="wrapper class">
          <div class="wrap">
          <div class="topbar-class">
              <div class="contain">
                <h5 className="app-name">BuildOut</h5>
                <div class="topbar-items">
                <Link to='/login' className='topbar-links'>
                    Login
                </Link>
                <Link to='/Register' className='topbar-links'>
                    Register
                </Link>
              </div>
            </div>
            </div>
        <div class="login-cont">
         <form class="login-form form-group">
           <h3>Login</h3>
            <div className="login-inputs" >
              <label htmlFor="email" className="form-label" > Email</label>
              <input type="email" name='email' placeholder=" Enter Your Email" className="form-control"  onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="login-inputs">
              <label htmlFor="password"  className="form-label" > Password</label>
              <input type="password"  name='password' placeholder=" Enter Your Password"  className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
               <button
               className='btn btn-primary'
               onClick={()=>{
                   dispatch(login(email,password))
                 }
                   
                   } type='button'> Login</button>
              

       </form>

        </div>
        </div>
        <footer class="c-footer">
            <div class="c-inner">
              Copyright BuildOut. All rights reserved. For internal use only.
            </div>
          </footer>
          

        </div>
        
    )
}


export default Login