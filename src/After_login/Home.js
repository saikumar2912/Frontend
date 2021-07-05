import React from 'react'
import {useSelector} from 'react-redux';
import Post from '../components/Post';
const Home = ({search}) => {

  console.log(search)
  const user = useSelector(state => state.user.user)
console.log(user)
const skill = useSelector(state => state.skill.skill)
console.log(skill)

const skills = skill.map(e=>e.followers)
console.log(skills)

const state = useSelector(state => state)
console.log(state)
// const filteredPost=Data  && Data.filter((e) => e && e.Title.toLowerCase().replace(/\s/g, '').includes(skills.toLowerCase().replace(/\s/g, '')))

const filteredPost=skill  && skill.filter((e) => e && e.Title.toLowerCase().replace(/\s/g, '').includes(search.toLowerCase().replace(/\s/g, ''))  )
console.log(filteredPost)



  return (
    <div class="app-container"> 
          <div class="row">
      {filteredPost.map(e=>e.followers.map(s=>(
        user._id ===s ? <Post id={e._id}/> :<div> </div>

      )))}
      </div>
    </div>
  )
}

export default Home