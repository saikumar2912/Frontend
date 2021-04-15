import React,{useState}from 'react'
import auth from './Auth'
import Axios from 'axios';
import './login.css'
const Login = (props) => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')

  const submit=(a,f)=>{
    const register={
        email:a,
        password:f
    }
    Axios.post('http://localhost:8000/users/login',register)
    .then( (res)=>console.log(res.data))
    .then(
     alert("Registered successful")
    ).catch((e)=>{alert(e.message)})
    console.log(register)
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
        onClick={() => {submit(email,password); props.history.push('/navbar')}}
      > Login</button>
       </form>
        </div>
        </div>
    )
}


export default Login
