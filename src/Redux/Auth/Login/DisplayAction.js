import axios from 'axios'

export const Display= () => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/post/getposts',{},{headers:{authorization:`Bearer ${Token()}`}
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
              return axios.post('http://localhost:8000/post/getposts',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(DisplaySuccess(res.data))
                
                  })
       .catch((e)=>console.log(e))
            })
    }
  }

  export const dislike=(id,user_id)=>{
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/post/dislike',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/post/getposts',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(DisplaySuccess(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }

  }
  export const Displayreports= () => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/report/reports',{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> {
               console.log(res.data)
               dispatch(ReportSuccess(res.data))
              
            })
    }
  }
  export const report= (user_id,post_id,report) => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/report/reported',{user_id:user_id,post_id:post_id,report:report},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/report/reports',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(ReportSuccess(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }
  }
  export const Reportlike= (id,user_id) => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/report/like',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/report/reports',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(ReportSuccess(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }
  }
  export const Reportdislike=(id,user_id)=>{
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/report/dislike',{_id:id,user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/report/reports',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(ReportSuccess(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }

  }
  
  export const userposts= (user_id) => {
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/post/user_idposts',{user_id:user_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> {
               console.log(res.data)
               dispatch(DisplaySuccess(res.data))
              
            })
    }
  }

  export const DeletePost =(id,user_id)=>{
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.delete(`http://localhost:8000/post/deletepost/${id}`,{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/post/user_idposts',{user_id:user_id},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(postdetails(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }
  }

  export const UpdatePost =(id,user_id)=>{
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.patch(`http://localhost:8000/post/updatepost/${id}`,{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/post/user_idposts',{user_id:user_id},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(postdetail(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }
  }


  


  export const postdetails = (e) => {
    return (dispatch) => {
      console.log("new",e);
      dispatch(DeleteSuccess(e))
      }
    }
    export const postdetail = (e) => {
      return (dispatch) => {
        console.log("new",e);
        dispatch(UpdateSuccess(e))
        }
      }
  export const DisplaySuccess = skill => {
  
    return {
      type: "DISPLAY_POST_SUCCESS",
      payload: skill
    }
  }
  export const DeleteSuccess = skill => {
  
    return {
      type: "DELETE_POST_SUCCESS",
      payload: skill
    }
  }
  export const UpdateSuccess = skill => {
  
    return {
      type: "DELETE_POST_SUCCESS",
      payload: skill
    }
  }
  
  export const ReportSuccess = report => {
  
    return {
      type: "REPORT_POST_SUCCESS",
      payload: report
    }
  }
  
  
  export const DisplayFailure = () => {
    return {
      type: "DISPLAY_POST_FAILED",
      
    }
  }
  
 