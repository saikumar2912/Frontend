import axios from 'axios'
import { PostSuccess } from '../ADMIN/BitAction';

export const Display= () => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/post/getpost',{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> {
               console.log(res.data)
               dispatch(DisplaySuccess(res.data))
              
            })
    }
  }
  
  export const like= (id,user_id) => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/post/like',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              const Token = () => localStorage.getItem("user");
              return axios.post('http://localhost:8000/post/getpost',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
 dispatch(likeSuccess())
 dispatch(PostSuccess(res.data))

                })
       .catch((e)=>console.log(e))
            })
    }
  }
  export const DisplaySuccess = skill => {
  
    return {
      type: "DISPLAY_POST_SUCCESS",
      payload: skill
    }
  }
  
  
  export const DisplayFailure = () => {
    return {
      type: "DISPLAY_POST_FAILED",
      
    }
  }
  export const likeSuccess = skill => {
  
    return {
      type: "LIKE_POST_SUCCESS",
      payload: skill
    }
  }
 