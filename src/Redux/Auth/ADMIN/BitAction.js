import axios from 'axios'
export const submit = (skill_id,title) => {
  
   
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
        
      return  axios.post('http://localhost:8000/bit/addbit',{
          skill_id:skill_id,
          title:title
        },{
         headers:{authorization:`Bearer ${Token()}`}
        }).then(
          (res)=>{
           console.log("post",res.data.data.skill_id);
           const Token = () => localStorage.getItem("user");
           return axios.post('http://localhost:8000/bit/newskill',{skill_id:res.data.data.skill_id},{
               headers:{authorization:`Bearer ${Token()}`}
            })
           .then(
               (res)=> {
                  console.log(res.data)
                  dispatch(PostSuccess(res.data))
               })
      .catch((e)=>console.log(e))
         }
         )
      
    }
  }
  export const bitdetails = (e) => {
    return (dispatch) => {
      console.log("new",e);
      dispatch(PostSuccess(e))
      }
    }
  
    export const PostSuccess = bit => {

        return {
          type: "ADD_BIT_SUCCESS",
          payload: bit
        }
      }
  
  export const PostFailure = () => {
    return {
      type: "ADD_BIT_FAILED",
      
    }
  }
