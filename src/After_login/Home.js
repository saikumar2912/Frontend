import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Post from '../components/Post';
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


const Dis = useSelector(state => state.display.display.map(e=>e.bit_id.title))
console.log(Dis)
const skil=useSelector(state=>state.display.display)
console.log(skil)

  return (
    <div> 
      {skill.map(e=>e.followers.map(s=>(
        user._id ===s ? <Post id={e._id}/>:<></>
      )))}
<>   
    {skil.map((e)=> <>

              {console.log(e.skill_id.Title.length > 0 ) ?   
              
              <div className="skill">
         
          <div className="skill__header">
          
            <h3>{e.Title}</h3>

          </div>
          <h4 className="skill__text"> {e.Description} </h4>
          
         
        </div>
        : <>{console.log("no posts")}</>}
      </>
    
      
    )}
    </>

    </div>
  )
}

export default Home
