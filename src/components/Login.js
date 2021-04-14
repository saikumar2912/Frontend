import React,{useState}from 'react'
import auth from './Auth'
import './login.css'
const Login = (props) => {

    const [values, setValues] = useState({
        email: '',
        password: '',
      });
   
      const handleChange = e => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
      };
      console.log(values)

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
                <input type="email" name='email' placeholder=" Enter Your Email" className="login-input" value={values.name} onChange={handleChange}/>

               </div>
               <div className="login-inputs">
            <label htmlFor="password"  className="login-label" > Password</label>
                <input type="password"  name='password'placeholder=" Enter Your Password"  className="login-input"value={values.age} onChange={handleChange}/>
               </div>
               <button
               className='button'
        onClick={() => {
          
          auth.login(() => {
            props.history.push("/navbar");
          });
        }}
      > Login</button>
       </form>
        </div>
        </div>
    )
}


export default Login
