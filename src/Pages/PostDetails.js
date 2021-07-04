import React from 'react'
import {useHistory} from 'react-router-dom';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {  dislike, like} from '../Redux/Auth/Login/DisplayAction';
import {useDispatch,useSelector} from 'react-redux';
import SimpleModal from '../components/Pop'
import Modal from 'react-bootstrap/Modal';
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

        </>:<></>}</>)}
            </Modal.Body>
                  </Modal>
    )
}


const PostDetails = ({props}) => {
    
const dispatch=useDispatch();
const user = useSelector(state => state.user.user)
const post = useSelector(state => state.display.display)
const report = useSelector(state => state.display.Report)
console.log(report)

const reports=[];


    const history=useHistory()
    console.log(history.location.state)
const e=history.location.state
const [modalShow, setModalShow] = React.useState(false);
const rep =report.filter(s=>s.post_id._id===e._id)
rep.map(s=>reports.push(s.user_id._id))
console.log(reports)
    return (
        <>
        <div class="app-container post-con">
            <div className="admin-cards">
                <span></span>
            
        {post.map(a=><>{a._id===e._id?<>
        
        
                <div className="card-head">
       
            <img src={a.skill.photo} alt="react" class="left" />
            <div class="card-head-name">
            <h3>{a.skill.Title}</h3>
            <div class="name">
                @{a.user.user_name}

            </div>
            </div>
        </div>
        
        <div class="card-body flex-fill">
              {parse(a.content)}
                          
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
{reports.includes(user._id)?<></>:<> 
    <SimpleModal postid={a._id} count={a.reports.length} /></>}

            </div>
        </div>
            <Modalreports show={modalShow} onHide={()=>setModalShow(false)} />

    
        </>:<></>} </>)}
        </div>
        </div>
        
        

        
        </>
        
        
    )
    }

export default PostDetails





























