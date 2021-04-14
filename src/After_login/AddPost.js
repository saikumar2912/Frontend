import React,{useState} from 'react'
import Avatar from "@material-ui/core/Avatar"
import './post.css'

const AddPost=()=>{
    const [currentskill, setCurrentSkill] = useState('')
  
  const changeSkill = (newSkill) => {
    setCurrentSkill(newSkill)
  }
  const [currentbit, setCurrentbit] = useState('')
  
  const changebit = (newbit) => {
    setCurrentbit(newbit)
  } 
    
        return (
            <div className='post_main' >  

            < div className='post_skill'>
            <form className="skill_form">
      <select  
        onChange={(event) => changeSkill(event.target.value)}
        value={currentskill} 
      > <option value='select skill'>select skill</option>
        <option value="java">java</option>
        <option value="react">react</option>
        <option value="python">python</option>
        <option value="sql">sql</option>
      </select>
    </form>
    </div>
    
    <div>
    <form className='post_bit'>
      <select className="post_select"
        onChange={(event) => changebit(event.target.value)}
        value={currentbit}
      ><option value='select skill'>select bit</option>
        <option value="java">java</option>
        <option value="react">react</option>
        <option value="python">python</option>
        <option value="sql">sql</option>
      </select>
    </form>
    </div>

           
    
        <div className='post'>
        <div className="post_header">
                 <Avatar className='post_avatar' alt="sai"src="/static/images/avatar/1.jpg"/>
                    <h3>UserName</h3>
            </div>           
                 <img className="post_image" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                 <p className='post_image'> react is an frontend developing language </p> 
                
                <button className="post_button"> post</button> 
           </div>
    
           
             </div>
             
          )
    }



export default AddPost
