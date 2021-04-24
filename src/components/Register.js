import React,{useState} from 'react'
import Axios from 'axios';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = (props) => {
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[phoneNo,setphoneNo]=useState('');
const[passwordd,setPassword]=useState('');

// const[errors,setErrors]=useState({})
function validateForm() {
    if(!name)
    return("Name Required")
}

function ValidateEmail() 
{
if (!email)
  {
    return ("Email Required")
  }
  else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
      return("Invalid Email")
  }
}
function validatephoneno(){
    if(!phoneNo)
    {
        return("Phone No Required")
    }
    else if(!/^\d{10}$/.test(phoneNo)){
        return("Number Should Be Greater Than 10")
    }
    
}
function validatepassword(){
    if(!passwordd){
        return("Password Required")
    }
    else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(passwordd))
    {
        return("password should have one uppercase,number and special character ")
    }
}

        const submit=(a,c,d,e)=>{
        const register={
            user_name:a,
            email_id:c,
            phoneNo:d,
            password:e,
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
                {validateForm()}
               </div>
               
               <div className="form-inputs">
            <label htmlFor="email"  className="form-label"> Email</label>
                <input type="email" name='email'placeholder=" Enter Your EMAIL"  className="form-input" onChange={(e)=>setEmail(e.target.value)} />
{ValidateEmail()}
               </div>
               <div className="form-inputs">
            <label htmlFor="phone NO"  className="form-label"> Phone NO:</label>
                <input type="text"name='phoneNo' placeholder=" Enter Your PHONE NO"  className="form-input"onChange={(e)=>setphoneNo(e.target.value)} maxLength='10'/>
               {validatephoneno()}
               </div>
               <div className="form-inputs">
            <label htmlFor="password" className="form-label"> Password</label>
                <input type="password" name='password'placeholder=" Enter Your PASSWORD"  className="form-input"onChange={(e)=>setPassword(e.target.value)}/>
               {validatepassword()}
               </div>
               <button className="form-button-btn" onClick={()=>{submit(name,email,phoneNo,passwordd);props.history.goBack()}} disabled={validateForm()}>Register </button>
        </form> 
        </div>
<Link to="/login"> user</Link>
        </div>

    )
}

export default Register