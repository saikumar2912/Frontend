// import axios from 'axios'
// import { Skill } from './ADMIN/SkillAction';
// import {  toast } from 'material-react-toastify';
// import 'material-react-toastify/dist/ReactToastify.css';


// export const Post = (user_id,Title,Description,photo) => {
//   console.log('AddPostReducer')
   
//     return (dispatch) => {
//       const Token = () => localStorage.getItem("user");
      
        
//       return  axios.post('http://localhost:8000/skill/addskill',{
//           user_id:user_id,
//           Title:Title,
//           Description:Description,
//           photo:photo
//         },{headers:{authorization:`Bearer ${Token()}`}
//         }).then(
//             (res)=> {

//               toast(res.data.message)
//                return  axios.post('http://localhost:8000/skill/skills',{},{headers:{authorization:`Bearer ${Token()}`}
//         }).then(
//             (res)=> {
//                console.log(res.data)
//                dispatch(PostSuccess(res.data))
               
//             })

//             })
//     }
//   }
//   export const Delete = (id) => {
     
//       return (dispatch) => {
//         const Token = () => localStorage.getItem("user");
        
          
//         return  axios.delete(`http://localhost:8000/skill/deleteskill/${id}`,{headers:{authorization:`Bearer ${Token()}`}
//           }).then(
//               (res)=> {
//                  console.log(res.data)
//                  return  axios.post('http://localhost:8000/skill/skills',{},{headers:{authorization:`Bearer ${Token()}`}
//           }).then(
//               (res)=> {
//                  console.log(res.data)
//                  dispatch(PostSuccess(res.data))
                 
//               })
  
//               })
//       }
//     }
  
//     export const UpdateSkill =(id,Title)=>{
//       return (dispatch) => {
//         const Token = () => localStorage.getItem("user");
        
          
//         return  axios.patch(`http://localhost:8000/skill/updateskill/${id}`,{Title:Title},{headers:{authorization:`Bearer ${Token()}`}
//           }).then(
//               (res)=> { console.log(res.data)
//                 dispatch(Skill())
                
//               })
//       }
//     }
    

//   export const PostSuccess = posts => {
  
//     return {
//       type: "ADD_SKILL_SUCCESS",
//       payload: posts
//     }
//   }
  
  
//   export const PostFailure = () => {
//     return {
//       type: "ADD_SKILL_FAILED",
      
//     }
//   }
//   export const skills = (e) => {
//     return (dispatch) => {
//       console.log("new",e);
//       dispatch(PostSuccess(e))
//       }
//     }