import React, { useState } from 'react';
import { Link,Route,Redirect } from 'react-router-dom';
import Home from '../After_login/Home'
import AddPost from '../After_login/AddPost';
import {useSelector,useDispatch} from 'react-redux'
import Profile from '../After_login/profile';
import Skills from '../After_login/Skills';
import './Navbar.css';
import AddCourse from '../Admin/AddCourse';
import Bit from '../Admin/Bit';
import profilepage from '../Pages/profilepage';
import {useHistory,useLocation} from 'react-router-dom';
import Skillsearch from '../Pages/skillsearch';
import AdminHome from '../Admin/AdminHome';
import Achivements from '../Pages/Achivements'
import SearchAppBar from './SearchPost';
import Postsearch from '../Pages/PostSearch';
import PostDetails from '../Pages/PostDetails';
import TopSkillPosts from '../Pages/TopSkillPosts';
import UserPosts from '../Pages/UserPosts';
import View_questions from '../Admin/view_questions';
import Initial from '../Quiz/Initial'
import BasicTable from '../Admin/Verification';
import Quiz from '../After_login/Quiz';
import App from '../After_login/Editor';
import { logout } from '../Redux/Auth/Login/services';


function Navbar() {
const user = useSelector(state => state.user.user)
console.log(user)
const location=useLocation();
const dispatch=useDispatch()

const history=useHistory();
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div class="wrapper">
        <nav className='navbars'>
        <Link  className='navbar-links' onClick={closeMobileMenu}>
          BUILD OUT
          <i class='fab fa-firstdraft' />
        </Link>

      {user.role==="user"? 
      <>
      <div className='menu-icons' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
          
        <li className='navbar-item'>
        {location.pathname === "/addpost"?<></> :<SearchAppBar/>}</li>
        <li className='navbar-item'>
            <Link to="/home" className='navbar-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
         
          <li className='navbar-item'>
            <Link to="/skills" className='navbar-links' onClick={closeMobileMenu} >

              Skills
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to="/Quizs" className='navbar-links' onClick={closeMobileMenu} >

            Quiz
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to="/addpost" className='navbar-links' onClick={closeMobileMenu} >Add Post  </Link>
            
          </li>
          <li className="navbar-item profile-item">
          <Profile/>
          </li>
          </ul>
          </>
          :
          <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
            <li className='navbar-item'>
          <Link to="/new" className='navbar-links' onClick={closeMobileMenu} >

            Home
          </Link>
          </li>
          <li className='navbar-item'>
          <Link to="/addcourse" className='navbar-links' onClick={closeMobileMenu} >

            Add skills
          </Link>
          </li>
          <li className='navbar-item'>
          <Link to="/skills" className='navbar-links' onClick={closeMobileMenu} >

            skills
          </Link>
          </li>
          <li className='navbar-item'>
          <Link to="/verification" className='navbar-links' onClick={closeMobileMenu} >

Users list
</Link>
          </li>
          
          <li className='navbar-item'>
            <a className='navbar-links' onClick={()=>{
          dispatch(logout())
          history.push("/login")
          }}> logout</a>
</li>
        
        

      
      </ul>}
        </nav>

        <Route path='/skills' component={Skills}/>
        <Route path='/addpost' component={AddPost}/>
        <Route path='/addcourse' component={AddCourse}/>
        <Route path="/view" component={Bit}/>
        <Route path="/Quizs" component={Quiz}/>  
<Route path="/profile" component={profilepage}/>
<Route path="/postsearch" component={Skillsearch}/>
<Route path="/skillsearch" component={Postsearch}/>
<Route path="/new" component={AdminHome}/>
<Route path="/achivement" component={Achivements}/>
<Route path="/postDetails" component={PostDetails}/>
<Route path='/verification' component={BasicTable}/>
<Route path="/topskillposts" component={TopSkillPosts}/>
<Route path="/userposts" component={UserPosts}/>
<Route path="/questions" component={View_questions}/>
<Route path="/quiz" component={Initial}/>
<Route path="/home"  component={Home}/>
{user.role==='user'?
<Redirect to='/home'/>:
<Redirect to='/skills'/>
}







<footer class="c-footer">
            <div class="c-inner">
              Copyright BuildOut. All rights reserved. For internal use only.
            </div>
          </footer>

    </div>
  );
}

export default Navbar;