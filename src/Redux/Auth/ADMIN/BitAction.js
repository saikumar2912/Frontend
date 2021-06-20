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
                  dispatch(bitdetails(res.data.bits))
               })
      .catch((e)=>console.log(e))
         }
         )
      
    }
  }
  
  export const DeleteBit =(id,skill_id)=>{
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.delete(`http://localhost:8000/bit/delete_bit/${id}`,{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/bit/newskill',{skill_id:res.data.skill_id},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(bitdetails(res.data.bits))
                })
       .catch((e)=>console.log(e))
            })
    }
  }
  
  export const UpdateBit =(id,title)=>{
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.patch(`http://localhost:8000/bit/updatebit/${id}`,{title:title},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/bit/newskill',{skill_id:res.data.skill_id},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(bitdetails(res.data.bits))
                })
       .catch((e)=>console.log(e))
              
            })
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
      export const DeleteSuccess = bit => {

        return {
          type: "DELETE_BIT_SUCCESS",
          payload: bit
        }
      }
      export const UpdateSuccess = bit => {

        return {
          type: "UPDATE_BIT_SUCCESS",
          payload: bit
        }
      }
      
  export const PostFailure = () => {
    return {
      type: "ADD_BIT_FAILED",
      
    }
  }
