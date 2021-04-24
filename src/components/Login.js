import React,{useState}from 'react'
import auth from './Auth'
import Axios from 'axios';
import './login.css'
import Navbar from './Navbar';
import { Route } from 'react-router';
const Login = (props) => {
   
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const login=(a,b)=>{
    const register={
      email_id:a,
      password:b
    }
    Axios.post('http://localhost:8000/users/login',register
    )
    .then((res)=>{console.log(res.data)
    console.log(res.data)
     alert(res.data.message)
     if(res.data.message === "login sucessful"){
      props.history.push('/navbar',res.data)
    }
   })
    .catch((e)=>{console.log(e)})

 }


      const handlesubmit=(e)=>{

        e.preventDefault()
    }
    return (

        <div className='login-main'>
        <div className="login-container" >
         <form onSubmit={handlesubmit} className="login">
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
               onClick={() => {
                auth.login(() => {login(email,password);
               });
              }} type='button'> Login</button>
       </form>
        </div>
        </div>
    )
}


export default Login
