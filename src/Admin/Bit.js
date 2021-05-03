import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { Button } from 'primereact/button';

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
    const [Data,setData] = useState([]);
    useEffect(()=>{
      Axios.post('http://localhost:8000/bit/newskill',{skill_id:state})
      .then(
        (res)=>{setData(res.data.bits)
            console.log(res.data)
        
        // if (state===res.data._id){

        // }
        }  )
      },[state])
 console.log(Data);
 return (

   <>

  {Data.map((e)=> <>
    {e.title.length > 0 ?   
    
    <div className="pos">

<div className="post__header">
{e.title}

</div>
</div>

: <>{console.log("no bits")}
[nobits]
</>
}
</>
)}
<input onChange={(e)=>setTitle(e.target.value)}/>
<Button label="ADD" onClick={()=>submit(title)}/>
</>



      );
    }
    
export default Bit
