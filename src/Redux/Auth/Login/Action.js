import services from './services';
import { createBrowserHistory } from 'history';
import { Skill } from '../ADMIN/SkillAction';
import axios from 'axios';
// import {useHistory} from  'react-router-dom'
export const history = createBrowserHistory();
export const login=(email,password)=>{
  return (dispatch) =>{
      services.login(email,password)
        .then(response =>{
      const user=response
      console.log(user)
     if(user.message === "login sucessful")
      
     {
        services.getCurrentUser().then(res=>{
          dispatch(fetchuser(res))
          console.log(res)
          dispatch(Achivement(res._id))
          dispatch(Skill())

          console.log(res)

                });
                
        // window.location.reload()

      }
    }
      )};
};

export const Achivement=(user_id)=>{
  return(dispatch)=>{
    const Token = () => localStorage.getItem("user");
  
    return  axios.post('http://localhost:8000/achivement/userachive',{user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
  }).then(
      (res)=> {
         console.log(res.data)
         dispatch(achivement(res.data))

        
      })
  }
  
}

export const logout=()=>{
  return(dispatch)=>{
    dispatch(userlogout())
  }
}
const fetchuser=(user)=>{
  return{
    type:'LOGIN',
    payload:user
  }
}

const userlogout=()=>{
  return{
    type:"LOGOUT"
  }
}
const achivement=(a)=>{
  return{
    type:'ACHIVEMENT',
    payload:a
  }
}
