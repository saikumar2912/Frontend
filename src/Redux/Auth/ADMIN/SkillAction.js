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
  export const follow=(id,user_id)=>{
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/skill/follow',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/skill/skills',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(skilldetails(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }

  }
  export const unfollow=(id,user_id)=>{
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/skill/follow',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/skill/skills',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(skilldetails(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }

  }
  
  export const skilldetails = (e) => {
    return (dispatch) => {
      console.log("new",e);
      dispatch(skillSuccess(e))
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
 