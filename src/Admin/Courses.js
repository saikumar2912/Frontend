import React , {useState ,useEffect} from 'react';
import './Courses.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import Avatar from "@material-ui/core/Avatar";
import {useSelector,useDispatch} from 'react-redux';
import { skills } from '../Redux/Auth/PostAction';
function Post() {
    const user = useSelector(state => state)
    console.log(user)
    const Data = useSelector(state => state.post.post)
    console.log(Data)
    const dispatch = useDispatch()
    
    useEffect(()=>{
      const Token = () => localStorage.getItem("user");
   return axios.post('http://localhost:8000/skill/skills',{},{
       headers:{authorization:`Bearer ${Token()}`}
    })
   .then(
       (res)=> {
          console.log(res.data)
          dispatch(skills(res.data))
       })
.catch((e)=>console.log(e))
  },[])
 

//  const Deleteskill=()=>{
//    axios.delete( `http://localhost:8000/skill/deleteskill/${state._id}`)
//    .then((res)=>console.log(res.data))
//    .catch((e)=>{console.log(e.message)})

//  }




    return (
    
        <>   
        {Data.map((e)=> <>
                  {e.Title.length > 0 ?   
                  
                  <div className="post">
             
              <div className="post__header">
              <Avatar className="post__avatar"
                src={e.photo}
                alt=""/>
                <h3>{e.Title}</h3>

              </div>
              <h4 className="post__text"> {e.Description} </h4>
              {/* <img key={e._id} className="item" src={e.photo} alt="" />   */}


                    <Link to={{
                  pathname:"/navbar/course/view",
                  state:e._id}} onClick={()=>{}}>view</Link>
            
{/* <button onClick={()=>{Deleteskill(state._id)}}> delete</button> */}
            </div>
            : <>{console.log("no posts")}</>}
          </>
        
          
        )}
        </>

    )
}

export default Post;


