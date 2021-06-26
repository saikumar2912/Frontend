import axios from 'axios'
import {  toast } from 'react-toastify';
export const reqVerification = () => {
    return (dispatch) => {
      const Token = () => localStorage.getItem("user");
       return axios.post('http://localhost:8000/verify/getReq/',{},{
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

    export const Verification = (id,user_id,admin_id,status) => {
        console.log(id,user_id,admin_id,status);
        return (dispatch) => {
          const Token = () => localStorage.getItem("user");
           return axios.post('http://localhost:8000/verify/adminVerification',{
            _id:id,
            user_id:user_id,
            admin_id:admin_id,
            status:status
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