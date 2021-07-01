import {useSelector,useDispatch} from 'react-redux';
import { Avatar} from '@material-ui/core';
import SimpleModal from './Pop';
import { Link } from 'react-router-dom';
import parse from "html-react-parser"
import Quiz from '../After_login/Quiz'
const Post = ({id}) => {
    
const dispatch=useDispatch();
    const user = useSelector(state => state.user.user)
    console.log(user)
    const Display = useSelector(state => state.display.display)
    console.log(Display)
  
    return (
      <div class="app-container">

<div class="row">
  {Display.map(e=>id === e.skill._id ?
    <div className="col-12 d-flex col-xl-4 col-lg-4">

          <div className="admin-cards">
            <span></span>
            <div className="card-head">
               <Avatar alt={"title"} src={e.skill.photo}  />
               <div className="card-head-in">
                 <div className="card-head-name">
                    <h5>{e.skill.Title}</h5> 
                   
                  </div>
               </div>
            </div>
          <div className="card-body flex-fill">
            <div className="card-body-in">
              <strong> Title:</strong>  {e.bit.title}
            </div>
            <div className="card-body-in">
              <strong> Content:</strong>   {parse(e.content)}
            </div>
            
          </div>
          <div className="card-foot">
              <div class="d-flex flex-fill align-items-center justify-content-center">
              <div className="link">
              <Link to={{pathname:'/postDetails',state:e}} >View</Link>
                </div>
               
              </div>

              <div className="warning">
              
              </div>
            </div>
          </div>
        </div>
  :<></> )} 
  
     </div>
             </div> 
    )
}

export default Post