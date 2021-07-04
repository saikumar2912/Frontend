import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Home from './Home';
import { useHistory } from "react-router-dom";

const NewSearch = () => {
    let history = useHistory();

    const [skills, setskills] = useState('')
    const Data = useSelector(state => state.post.post)
    console.log(Data)
const handlechange=(e)=>{
history.push({
    pathname:'/Home',
    state:e.target.value
})
}
    return (
        <div>
        
        </div>
    )
}

export default NewSearch
