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
  
const Bit = (props) => {
    const {location:{state}}=props;

    const[title,setTitle]=useState('')
const submit=(a)=>{
  const Add={
    skill_id:state,
    title:a
  }
  Axios.post("http://localhost:8000/bit/addbit",Add)
  .then((res)=>(console.log(res.data)))
  .catch((e)=>{alert(e.message)})
  console.log(Add)

}


    console.log(state)
  const classes = useStyles();
    const [Data,setData] = useState([]);
    useEffect(()=>{
      Axios.post('http://localhost:8000/bit/newskill',{skill_id:state})
      .then(
        (res)=>{setData(res.data)
            console.log(res.data)
        // if (state===res.data._id){

        // }
        }  )
      },[state])
 console.log(Data);
 return (
    <>   
<input onChange={(e)=>setTitle(e.target.value)} />
<button onClick={()=>{submit(title)}}>Add</button>
    {Data.map((e)=> <>
              {e.title.length > 0 ?     <Card className={classes.root}>
          <CardContent>
          </CardContent>
          Title:{e.title}
          <CardContent>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            </IconButton>
          </CardActions>  
             
        </Card>: <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </>

      );
    }
    
export default Bit
