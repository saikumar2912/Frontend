import React from 'react'
import {useHistory} from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {  dislike, like} from '../Redux/Auth/Login/DisplayAction';
import {useDispatch,useSelector} from 'react-redux';
import SimpleModal from '../components/Pop'
import Modal from 'react-bootstrap/Modal';
import Timer from '../Quiz/Timer';
import parse from "html-react-parser"




import Reports from './Reports';
// import { Modal } from '@material-ui/core';

const Modalreports = (props)=>{
const post = useSelector(state => state.display.display)
const history=useHistory()
    console.log(history.location.state)
const e=history.location.state
    return(
        <Modal {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reports
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {post.map(a=><>{a._id===e._id?<>
           <Reports reportid={a._id}/> 
           <SimpleModal postid={a._id} count={a.reports.length} />

        </>:<></>}</>)}
            </Modal.Body>
                  </Modal>
    )
}


const PostDetails = ({props}) => {
    
const dispatch=useDispatch();
const user = useSelector(state => state.user.user)
const post = useSelector(state => state.display.display)
const report = useSelector(state => state)
console.log(report.display)

    const history=useHistory()
    console.log(history.location.state)
const e=history.location.state
const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
        <div class="app-container post-con">
            <div className="admin-cards">
                <span></span>
                <div>
        {post.map(a=><>{a._id===e._id?<>
        
            <div>
        <div>
        <div className="card-head">
       
            <img src={a.skill.photo} alt="react" class="left" />
            <div class="card-head-name">
            <h3>{a.skill.Title}</h3>
            <div class="name">
                <h4>{a.user.user_name}</h4>
            </div>
            </div>
        </div>
        
        <div class="card-body">

           

              {parse(e.content)}
               
                
        </div>
        <div className="card-foot">
            <div className="card-foot-in">
<ThumbUpAltIcon className={a.like.includes(user._id)?"like_icon":"like_icons"} onClick={()=>{dispatch(like(a._id,user._id));}}  
       size={100}/> {a.like.length}    
       
       <ThumbDownIcon className={a.dislike.includes(user._id)?"dislike_icon":"dislike_icons"} onClick={()=>{dispatch(dislike(a._id,user._id))}} /> {a.dislike.length}
       </div>
       <button class="btn btn-primary quiz-btn" onClick={()=> setModalShow(true)}>
           Reports
       </button>
       <div className="warning">

            </div>
        </div>
      <Timer/>
            <Modalreports show={modalShow} onHide={()=>setModalShow(false)} />

    </div>
        </div>
        </>:<></>} </>)}
        </div>
        </div>
        
        </div>

        
        </>
        
        
    )
    }

export default PostDetails





























