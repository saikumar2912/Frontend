import { Avatar, Card } from '@material-ui/core'
import React, { useEffect,useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import{useSelector} from 'react-redux'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Link } from 'react-router-dom';
import './styles.css'
import axios from 'axios';
import ReportIcon from '@material-ui/icons/Report';

const AdminHome = () => {

const [posts, setPosts] = useState([])

const Data = useSelector(state => state.display.display)

const user=useSelector(state=>state.display.display)
console.log(user)
const admin=useSelector(state=>state.user.user._id)
const post=useSelector(state=>state.display.display.map(e=>e._id))

useEffect(() => {
    axios.post('http://localhost:8000/post/highposts')
    .then((res)=>setPosts(res.data))
    
}, [])
console.log(posts)

    const achive=(user,post)=>{
        const submit={
            user_id:user,
            admin_id:admin,
            achivement:post,
        }
        axios.post("http://localhost:8000/achivement/achivement",submit)
        .then((res)=>console.log(res.data))
    }

    return (
        <div class="app-container">
            <div class="">

            <div class="row">
                    {posts.map((e)=><>{e.content.length>0?
            
            <div class="col-12 d-flex col-xl-4 col-lg-4">

                        <div className="admin-cards">
                            <span></span>
                            <div className="card-head">
                                <Avatar alt={"title"} src={e.skill.photo}  />
                                <div class="card-head-in">
                                    <div class="card-head-name">
                                    <h5>{e.skill.Title}</h5>
                                    <div class="name">{e.user.user_name}</div>
                                    </div>
                                    <StarBorderIcon  onClick={()=>{achive(e.user._id,e._id)}} />
                                </div>
                            </div>
                            <div className="card-body">
                                
                                <div className="card-body-in">
                                    <strong> Title: </strong>{e.bit.title}
                                </div>
                                <div className="card-body-in">
                                    Content:{e.content}
                                </div>
                                <div class="card-foot">
                                    <ThumbUpAltIcon   size={30}/>{e.like.length}
                                    <ThumbDownIcon   size={30}/>{e.dislike.length}
                                    <div class="d-flex flex-fill align-items-center justify-content-center">
              <div className="link">
              <Link to={{pathname:'/postDetails',state:e}} >View</Link>
                </div>
               
              </div>
                                    <div className="admin-warning">
                                        <ReportIcon size={30}/>{e.reports.length}
                                    </div>
                                </div>
                            </div>
            </div>

                        </div>:<></>}
                    </>)}
                </div>
            </div>
        </div>
    )
}

export default AdminHome