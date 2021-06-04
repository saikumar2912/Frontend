import axios from 'axios'


const login = (email_id, password) => {
    return axios
      .post('http://localhost:8000/users/login', {
        email_id,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", response.data.token);
        }
        if(response.data.password !== password)
        {
      alert(response.data.message)
      }
      else if (response.data.email_id !== email_id) {
          alert(response.data.message)
          
      }  
  
        return response.data;
      })
  };


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
  
  export default {
      authHeader
    ,login,getCurrentUser
};