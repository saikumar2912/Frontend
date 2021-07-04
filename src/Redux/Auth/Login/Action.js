import services from './services';
import { createBrowserHistory } from 'history';
import { Skill } from '../ADMIN/SkillAction';
import axios from 'axios';
import { reqVerification } from '../ADMIN/VerificationAction';
import { Displayreports } from './DisplayAction';
import { Question, Score } from '../ADMIN/QuestionsAction';
// import {useHistory} from  'react-router-dom'
export const history = createBrowserHistory();
export const login=(user,password)=>{
  return (dispatch) =>{
      services.login(user,password)
        .then(response =>{
      const user=response
      console.log(user)
     if(user.message === "login sucessful" ||user.message==="User is Verified!!")
      
     {
        services.getCurrentUser().then(res=>{
          dispatch(fetchuser(res))
          console.log(res)
          if(user.role==='user'){

          }
          else{
            dispatch(Achivement(res._id))

            dispatch(reqVerification())
            dispatch(Skill())
            dispatch(Displayreports())
            dispatch(Question())
            dispatch(Score())
            dispatch(Achivements())
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
export const Achivements = () => {
   
  return (dispatch) => {
    const Token = () => localStorage.getItem("user");
    
      
    return  axios.post('http://localhost:8000/achivement/allachive',{},{headers:{authorization:`Bearer ${Token()}`}
      }).then(
          (res)=> {
             console.log(res.data)
             dispatch(achivements(res.data))
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
export const fetchuser=(user)=>{
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
const achivements=(a)=>{
  return{
    type:'ACHIVEMENTS',
    payload:a
  }
}
const update=(a)=>{
  return{
    type:'UPDATE',
    payload:a
  }
}