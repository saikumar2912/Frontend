import {useSelector,useDispatch} from 'react-redux';
import { Avatar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import parse from "html-react-parser"
const Post = ({id}) => {
    
const dispatch=useDispatch();
    const user = useSelector(state => state.user.user)
    console.log(user)
    const Display = useSelector(state => state.display.display)
    console.log(Display)
  const disp=Display.filter(e=>e.skill._id===id)
  console.log(disp)
    return (

<>
  {Display.map(e=>e.skill._id ===id ?
    <div className="col-12 d-flex col-xl-4 col-lg-4">

          <div className="admin-cards mt-3">
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
  
     </>
    )
}

export default Post