import React,{useState,useEffect} from 'react'
import Axios from 'axios';

const Search = () => {
    const[search,setSearch]=useState('')
    const [Data,setData] = useState([]);
    useEffect(()=>{
      Axios.post('http://localhost:8000/skiils/getskill')
      .then(
        (res)=>setData(res.data)
       )
      },[])
 console.log(Data);
    return (
        <div>
            <input type="text"/>
        </div>
    )
}

export default Search
