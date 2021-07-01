import axios from 'axios';

export const Question=() => {
   
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/quiz/questions',{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> {
               console.log(res.data)
               dispatch(Questions(res.data))
               dispatch(Score())

            })
    }
  }
  export const DeleteQuiz =(id)=>{
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.delete(`http://localhost:8000/quiz/delete_question/${id}`,{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/quiz/questions',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch( DeleteSuccess(res.data))
                })
       .catch((e)=>console.log(e))
            })
    }
  }
  export const UpdateQuiz =(id,question,option1,option2,option3,option4,answer)=>{
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.patch(`http://localhost:8000/quiz/updatequestion/${id}`,{question:question,option1:option1,option2:option2,option3:option3,option4:option4,answer:answer},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
              return axios.post('http://localhost:8000/quiz/questions',{},{
                headers:{authorization:`Bearer ${Token()}`}
             })
            .then(
                (res)=> {
                   console.log(res.data)
                   dispatch(UpdateSuccess(res.data))
                })
       .catch((e)=>console.log(e))
              
            })
    }
  }
  
  export const Score=() => {
   
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      return  axios.post('http://localhost:8000/result/getallquiz',{},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> {
               console.log(res.data)
               dispatch(Scores(res.data))

            })
    }
  }
  export const Final=(score,bit_id,user_id,skill_id)=>{
    
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
      
        
      return  axios.post('http://localhost:8000/result/addresult',{score:score,bit_id:bit_id,user_id:user_id,skill_id:skill_id},{headers:{authorization:`Bearer ${Token()}`}
        }).then(
            (res)=> { console.log(res.data)
            dispatch(Score())
            })
    }

  }
  

  export const Questions = q => {

    return {
      type: "QUESTION_DISPLAY_SUCCESS",
      payload: q
    }
  }
  export const DeleteSuccess = q => {

    return {
      type: "DELETE_QUES_SUCCESS",
      payload: q
    }
  }
  export const UpdateSuccess = q => {

    return {
      type: "UPDATE_QUES_SUCCESS",
      payload: q
    }
  }
  
  export const Scores = s => {

    return {
      type: "GET_SCORE_SUCCESS",
      payload: s
    }
  }