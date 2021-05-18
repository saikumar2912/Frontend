import services from './services';
import { createBrowserHistory } from 'history';
import { Skill } from '../ADMIN/SkillAction';
 
// import {useHistory} from  'react-router-dom'
export const history = createBrowserHistory();
export const login=(email,password)=>{
  return (dispatch) =>{
      services.login(email,password)
        .then(response =>{
      const user=response
      console.log(user)
     if(user.message === "login sucessful")
      
     {
        services.getCurrentUser().then(res=>{
          dispatch(fetchuser(res))
          dispatch(Skill())

          console.log(res)

                });
                
        // window.location.reload()

      }
    }
      )};
};
export const logout=()=>{
  return(dispatch)=>{
    dispatch(userlogout())
  }
}
const fetchuser=(user)=>{
  return{
    type:'LOGIN',
    payload:user
  }
}

const userlogout=()=>{
  return{
    type:"LOGOUT"
  }
}