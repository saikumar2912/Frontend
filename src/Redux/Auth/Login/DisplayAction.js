import axios from 'axios'

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
 