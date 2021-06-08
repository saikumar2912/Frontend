import services from './services';
import { createBrowserHistory } from 'history';
import { Skill } from '../ADMIN/SkillAction';
import axios from 'axios';
import {getCurrentUser} from './services'
import { reqVerification } from '../ADMIN/VerificationAction';
// import {useHistory} from  'react-router-dom'
export const history = createBrowserHistory();
export const login=(email,password)=>{
  return (dispatch) =>{
      services.login(email,password)
        .then(response =>{
      const user=response
      console.log(user)
     if(user.message === "login sucessful"&& localStorage.getItem('user') !== null)
      
     {
        services.getCurrentUser().then(res=>{
          dispatch(fetchuser(res))
          console.log(res)
          if(user.role==='user'){
            dispatch(Achivement(res._id))

          }
          else{
            dispatch(reqVerification())
            dispatch(Skill())

          }
         

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
export const Update=(id,user_name,phoneNo,profile_picture,Education,Bio)=>{
  return(dispatch)=>{
    const Token = () => localStorage.getItem("user");
  
    return  axios.patch(`http://localhost:8000/users/updateUser/${id}`,{user_name:user_name,phoneNo:phoneNo,profile_picture:profile_picture,Education:Education,Bio:Bio},{headers:{authorization:`Bearer ${Token()}`}
  }).then(
      (res)=> {
        console.log(res.data)
        dispatch(fetchuser(res.data))
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
const update=(a)=>{
  return{
    type:'UPDATE',
    payload:a
  }
}