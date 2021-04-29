import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import{Link} from 'react-router-dom';
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
  
const Courses = (props) => {
  const {location:{state}}=props;
  console.log(state)

  const classes = useStyles();
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
              {e.Title.length > 0 ?     <Card className={classes.root}>
          <CardContent>
          </CardContent>
          Title:{e.Title}
          <CardContent>
           Description:{e.Description}
          </CardContent> 
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Link to={{
              pathname:"/navbar/course/view",
              state:e._id}} onClick={()=>{}}>view</Link>
            </IconButton>
          </CardActions>  
             
        </Card>: <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </>

      );
    }
    
export default Courses
