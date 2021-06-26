import axios from 'axios'
import { fetchuser } from './Action';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const login = (user, password) => {

    return axios
      .post('http://localhost:8000/users/login', {
        user,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", response.data.token);
        }
        if(response.data.password !== password)
        {
      toast(response.data.message,{closeOnClick: true,color:'black'})
      }
      else if (response.data.email_id !== user) {
          toast(response.data.message)
          
      }  
  
        return response.data;
      })
  };

  export const logout=()=> {
    return(dispatch)=>{
      localStorage.removeItem("user")
      dispatch(fetchuser())
    }
   
  }

 export const getCurrentUser=()=> {
    const Token =()=> localStorage.getItem("user");
    return axios.post('http://localhost:8000/users/particularUser',{},{
      headers:{authorization:`Bearer ${Token()}`}
     }).then((res)=>{ return res.data} ).catch((e)=>console.log(e))
  }

  
   const authHeader=()=> {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.token) {
      return { Authorization: 'Bearer ' + user.token };
    } else {
      return {};
    }
  }
  const service={authHeader
    ,login,getCurrentUser,logout}
  
  export default service