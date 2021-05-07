import React , {useState ,useEffect} from 'react';
import './Courses.css';
import {Link} from 'react-router-dom';
import Axios from 'axios'
import Avatar from "@material-ui/core/Avatar";

function Post(props) {
    
  const {location:{state}}=props;
  console.log(state)

    const [Data,setData] = useState([]);
    useEffect(()=>{
      Axios.post('http://localhost:8000/skill/skills')
      .then(
        (res)=>setData(res.data)  )
      },[])
 console.log(Data);
 

 const Deleteskill=()=>{
   Axios.delete( `http://localhost:8000/skill/deleteskill/${state._id}`)
   .then((res)=>console.log(res.data))
   .catch((e)=>{console.log(e.message)})

 }




    return (
    
        <>   
        {Data.map((e)=> <>
                  {e.Title.length > 0 ?   
                  
                  <div className="post">
             
              <div className="post__header">
              <Avatar className="post__avatar"
                src="/static/images/avatar/jpg"
                alt={e.Title}/>
                <h3>{e.Title}</h3>

              </div>
              <h4 className="post__text"> {e.Description} </h4>
              <img key={e._id} className="item" src={e.photo} alt="" />  


                    <Link to={{
                  pathname:"/navbar/course/view",
                  state:e._id}} onClick={()=>{}}>view</Link>
            
<button onClick={()=>{Deleteskill(state._id)}}> delete</button>
            </div>
            : <>{console.log("no posts")}</>}
          </>
        
          
        )}
        </>
    )
}

export default Post;