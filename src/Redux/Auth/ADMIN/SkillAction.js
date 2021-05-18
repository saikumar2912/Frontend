import axios from 'axios'
import { Display } from '../Login/DisplayAction';
export const Skill = () => {
   
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/skill/skills',{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> {
               console.log(res.data)
               dispatch(skillSuccess(res.data))
               dispatch(Display())
            })
    }
  }
  
  
  export const skillSuccess = skill => {
  
    return {
      type: "SKILL_SUCCESS",
      payload: skill
    }
  }
  
  
  export const skillFailure = () => {
    return {
      type: "SKILL_FAILED",
      
    }
  }
 