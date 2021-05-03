import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function RecipeReviewCard(user) {
  const {location:{state}}=user
// console.log(state)

    const [Data,setData] = useState([]);
    let history = useHistory()
    
    
    useEffect(()=>{
            
      Axios.post('http://localhost:8000/skill/skills')
      .then(
        (res)=>setData(res.data)

       )
       
      },[])
      console.log(history)
      console.log(Data)

const[Follow,setFollow]=useState([])

const follow=(a)=>{
  const user={
     user_id:state

  }
  Axios.post("http://localhost:8000/skill/follow",user)
  .then((res)=>setFollow(res.data))
  .catch((e)=>{alert(e.message)})
}
        // useEffect(()=>{
            
        //     Axios.post('http://localhost:8000/skill/userskills',{user_id:state})
        //     .then(
        //       (res)=>setData(res.data.skills)

        //      )
             
        //     },[state])
      
       
   
    //    const Add=()=>{
    //        Data.map(e=>console.log(e))
    //     const user={
    //         user_id:state._id,
    //             }
    //     Axios.post('http://localhost:8000/middle/addskill',user)
    //     .then((res)=>(console.log(res.data)))
    //     .catch((e)=>{alert(e.message)})
    //     console.log(user)

    // }

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
<button onClick={()=>follow()}>follow</button>
        </div>
        : <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </>
  );
}
