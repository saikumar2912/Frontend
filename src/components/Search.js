import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
const Search = () => {
    const[search,setSearch]=useState('')

const state = useSelector(state => state)
console.log(state)
    const history =useHistory();
   
    return (
        <div>
            <input type="text" placeholder="Search skills" onChange={(e)=>setSearch(e.target.value)}  />
            <SearchRoundedIcon  onClick={()=>{history.push('./search',search)}}></SearchRoundedIcon>
        </div>
    )
}

export default Search
