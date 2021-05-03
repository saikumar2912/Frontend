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

                    <Link to={{
                  pathname:"/navbar/course/view",
                  state:e._id}} onClick={()=>{}}>view</Link>
            

            </div>
            : <>{console.log("no posts")}</>}
          </>
        
          
        )}
        </>
    )
}

export default Post;