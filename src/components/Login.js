import React,{useState}from 'react'
import {useDispatch} from 'react-redux';
// import './login.css'
import { Link} from 'react-router-dom';
import { login } from '../Redux/Auth/Login/Action';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
  const dispatch=useDispatch();
  const[email_id,setEmail_id]=useState('');
  const[password,setPassword]=useState('')


      
    return (

        <div class="wrapper">
          <nav className='navbars'>
        <Link to='/navbar/home' className='navbar-links'>
          BUILD OUT
          <i class='fab fa-firstdraft' />
        </Link>
        <div class="topbar-items">
          <ul className="navbar-menu">
            <li className="navbar-item">
            <Link to='/login' className='navbar-links'>
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

          {/* <div class="topbar-class">
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
            </div> */}
        <div class="app-container bit-container">
         <div class="admin-cards login-page">
           <span></span>
           <div class="card-body">
           <form class="login-form form-group">
           <h3>Login</h3>
            <div className="login-inputs" >
              <label htmlFor="email" className="form-label" > Email</label>
              <input type="email" name='email' placeholder=" Enter Your Email" className="form-control"  onChange={(e)=>setEmail_id(e.target.value)}/>
            </div>
            <div className="login-inputs">
              <label htmlFor="password"  className="form-label" > Password</label>
              <input type="password"  name='password' placeholder=" Enter Your Password"  className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div class="login-button">
               <a class="login"
               onClick={()=>{
                   dispatch(login(email_id,password))
                 }
                   
                   } > Login</a>
              <Link class="login" to='/loginotp'>Login with otp </Link>
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
        
    )
}


export default Login