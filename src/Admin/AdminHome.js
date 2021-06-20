import { Avatar, Card } from '@material-ui/core'
import React, { useEffect,useState } from 'react'
import { BiDislike, BiLike } from 'react-icons/bi'
import{useSelector} from 'react-redux'
import WarningIcon from '@material-ui/icons/Warning';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './styles.css'
import axios from 'axios';

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
            <div class="admin-home-cards">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-12">
                    {posts.map((e)=><>{e.content.length>0?
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
                                    <strong> Bit_Title: </strong>{e.bit.title}
                                </div>
                                <div className="card-body-in">
                                    Content:{e.content}
                                </div>
                                <div class="card-foot">
                                    <BiLike className="like_icon"  size={30}/>{e.like.length}
                                    <BiDislike className="dislike_icon"   size={30}/>{e.dislike.length}
                                    <div className="admin-warning">
                                        <WarningIcon size={30}/>{e.reports.length}
                                    </div>
                                </div>
                            </div>
                        </div>:<></>}
                    </>)}
                </div>
            </div>
            </div>
        </div>
    )
}

export default AdminHome