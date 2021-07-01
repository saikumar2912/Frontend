import axios from 'axios'
import {  toast } from 'react-toastify';
export const reqVerification = () => {
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
       return axios.post('http://localhost:8000/users/allusers',{},{
           headers:{authorization:`Bearer ${Token()}`}
        })
       .then(
           (res)=> {
              console.log(res.data)
              dispatch(StatusSuccess(res.data))
           })
  .catch((e)=>console.log(e))
      
      }
    }

    export const Verification = (email_id,status) => {
        return (dispatch) => {
          const Token = () => localStorage.getItem("user");
           return axios.post('http://localhost:8000/users/adminVerification',{
            email_id:email_id,
            status:"Verified"
           },{
               headers:{authorization:`Bearer ${Token()}`}
            })
           .then(
               (res)=> {
                 toast(res.data.status)
                  console.log(res.data)
                  dispatch(reqVerification())
               })
      .catch((e)=>console.log(e))
          
          }
        }
export const StatusSuccess=a=>{
    return {
        type: "STATUS__SUCCESS",
        payload: a
      }

}