import React, { useState } from 'react';
import { Link,Route } from 'react-router-dom';
import Home from '../After_login/Home'
import AddPost from '../After_login/AddPost';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Profile from '../After_login/profile';
import Skills from '../After_login/Skills';
import './Navbar.css';
import Courses from '../Admin/Courses';
import AddCourse from '../Admin/AddCourse';
import Bit from '../Admin/Bit';
function Navbar() {
const user = useSelector(state => state.user.user)
console.log(user)


    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
        <nav className='navbars'>
        <Link to='/navbar/home' className='navbar_logo' onClick={closeMobileMenu}>
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
            <Link to="/navbar/Home" className='navbar-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
         
          <li className='navbar-item'>
            <Link to="/navbar/skills" className='navbar-links' onClick={closeMobileMenu} >

              userSkills
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to="/navbar/addpost" className='navbar-links' onClick={closeMobileMenu} >Add Post  </Link>
            
          </li>
          <Profile/>
          </ul>
          </>
          :
          <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
          <li className='navbar-item'>
          <Link to="/navbar/addcourse" className='navbar-links' onClick={closeMobileMenu} >

            Add skills
          </Link>
          </li>
          <li className='navbar-item'>
          <Link to="/navbar/courses" className='navbar-links' onClick={closeMobileMenu} >

            skills
          </Link>
          </li>

        
        

      
      </ul>}
        
          
       
        </nav>
        <Route path='/navbar/skills' component={Skills}/>
        <Route path="/navbar/Home"  component={Home}/>
        <Route path='/navbar/addpost' component={AddPost}/>
        <Route path='/navbar/courses' component={Courses}/>
        <Route path='/navbar/addcourse' component={AddCourse}/>
        <Route path="/navbar/course/view" component={Bit}/>  



    </div>
  );
}

export default Navbar;