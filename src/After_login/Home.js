import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Post from '../components/Post';
import Reports from '../Pages/Reports';
import { Display } from '../Redux/Auth/Login/DisplayAction';
import './Home.css'
const Home = () => {

  const user = useSelector(state => state.user.user)
console.log(user)
const skill = useSelector(state => state.skill.skill)
console.log(skill)

const skills = skill.map(e=>e.followers)
console.log(skills)

const state = useSelector(state => state)
console.log(state)



  return (
    <div class="card-class"> 
          <div class="row">

      {skill.map(e=>e.followers.map(s=>(
        user._id ===s ? <Post id={e._id}/> :<div> </div>

      )))}
      <Reports/>
      </div>
    </div>
  )
}

export default Home
