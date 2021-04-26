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
console.log(state)
  const classes = useStyles();
  // const [count, setCount] = useState(0);

  //   const increment = () => {
  //       //more logic here ..
  //       setCount(count + 1);
  //   }
  //   console.log(count);  

    const [Data,setData] = useState([]);
    useEffect(()=>{
      Axios.post('http://localhost:8000/post/getpost').then(
        (res)=>setData(res.data)
       )
      },[])
 console.log(Data);
 

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
       {/* <button onClick={()=>{increment()}} >likes </button>  */}

        </span>
       
      </CardActions>  
         
    </Card>: <>{console.log("no posts")}</>}
  </>

  
)}  
</>
  );
}
