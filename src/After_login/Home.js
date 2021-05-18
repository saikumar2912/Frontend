import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Post from '../components/Post';
import { Display } from '../Redux/Auth/Login/DisplayAction';
const Home = () => {

  const user = useSelector(state => state.user.user)
console.log(user)
const skill = useSelector(state => state.skill.skill)
console.log(skill)

const skills = skill.map(e=>e.followers)
console.log(skills)

const state = useSelector(state => state)
console.log(state)


const Dis = useSelector(state => state.display.display.map(e=>e.bit_id.title))
console.log(Dis)
const skil=useSelector(state=>state.display.display.map(e=>e.skill_id.Title))
console.log(skil)

  return (
    <div>
      {skill.map(e=>e.followers.map(s=>(
        user._id ===s ? <Post id={e._id}/>:<></>
      )))}
<div class="card text-white bg-primary mb-3" style={{"max-width": "18rem;"}}>
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    </div>
  )
}

export default Home
