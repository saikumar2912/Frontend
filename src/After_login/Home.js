import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {useSelector} from 'react-redux';
import { red } from '@material-ui/core/colors';
import Axios from 'axios';
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


export default function RecipeReviewCard() {
  // const {location:{state}}=user
const state = useSelector(state => state.user.user._id)
console.log(state)
  const gettoken = ()=>localStorage.getItem('user')
  const classes = useStyles();
  // const [count, setCount] = useState(0);

  //   const increment = () => {
  //       //more logic here ..
  //       setCount(count + 1);
  //   }
  //   console.log(count);  
 
    const [Data,setData] = useState([]);
    useEffect(()=>{
      Axios.post('http://localhost:8000/post/getpost/user_id',{user_id:state},{headers:{authorization:`Bearer ${gettoken()}`}}).then(
        (res)=>console.log(res.data)
       )
      },[state])
 console.log(Data);

  const Like=()=>{
Axios.post("http://localhost:8000/post/like",{_id:"6091060327b68a080c7b57ed"})
.then((res)=>console.log(res.data))
  }
 

  return (
<>   
{Data.map((e)=> <>
          {e.content.length > 0 ?     <Card className={classes.root} >
      <CardContent>
        {e.user_name}
      </CardContent>
      <CardHeader
      
        avatar={
          <Avatar src="/static/images/avatar/1.jpg">
          </Avatar>
        }
        
      />
     
      <CardContent>
      {e.content}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        </IconButton>
        <span>
       <button onClick={()=>{Like()}} >likes </button> 

        </span>
       
      </CardActions>  
         
    </Card>: <>{console.log("no posts")}</>}
  </>

  
)}  
</>
  );
}
