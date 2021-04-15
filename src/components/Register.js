import React,{useState} from 'react'
import Axios from 'axios';
import './Register.css'

const Register = (props) => {
const[name,setName]=useState('');
const[age,setAge]=useState('');
const[email,setEmail]=useState('');
const[phoneNo,setphoneNo]=useState('');
const[passwordd,setPassword]=useState('');
const[passwordd2,setPassword2]=useState('');


        const submit=(a,b,c,d,e,f)=>{
        const register={
            user_name:a,
            age:b,
            email_id:c,
            phoneNo:d,
            password:e,
            password2:f
        }
        Axios.post('http://localhost:8000/users/adduser',register)
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
        <div className='main'>
     <div className="form-container" >
         <form onSubmit={handlesubmit} className="form">

             <div className="form-inputs" >
            <label htmlFor="name" className="form-label" > Name</label>
                <input type="text" name='name' placeholder=" Enter Your Name" className="form-input"  onChange={(e)=>setName(e.target.value)}/>
               </div>
               <div className="form-inputs">
            <label htmlFor="age"  className="form-label" > Age</label>
                <input type="text"  name='age'placeholder=" Enter Your AGE"  className="form-input" onChange={(e)=>setAge(e.target.value)}/>
               </div>
               <div className="form-inputs">
            <label htmlFor="email"  className="form-label"> Email</label>
                <input type="email" name='email'placeholder=" Enter Your EMAIL"  className="form-input" onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div className="form-inputs">
            <label htmlFor="phone NO"  className="form-label"> Phone NO:</label>
                <input type="text"name='phoneNo' placeholder=" Enter Your PHONE NO"  className="form-input"onChange={(e)=>setphoneNo(e.target.value)}/>
               </div>
               <div className="form-inputs">
            <label htmlFor="password" className="form-label"> Password</label>
                <input type="password" name='password'placeholder=" Enter Your PASSWORD"  className="form-input"onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div className="form-inputs">
            <label htmlFor="password"  className="form-label"> Confirm Password</label>
                <input type="password" name='password2'placeholder=" RE ENTER PASSWORD"  className="form-input"onChange={(e)=>setPassword2(e.target.value)}/>
               </div>
               <button className="form-button-btn" onClick={()=>{submit(name,age,email,phoneNo,passwordd,passwordd2);props.history.goBack()}} >Register </button>
        </form> 
        </div>
        </div>

    )
}

export default Register