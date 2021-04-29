import React, { useState } from 'react';
import { Link,Route } from 'react-router-dom';
import Home from '../After_login/Home'
import AddPost from '../After_login/AddPost';
import Profile from '../After_login/profile';
import Skills from '../After_login/Skills';
import './Navbar.css';
import Courses from '../Admin/Courses';
import AddCourse from '../Admin/AddCourse';
import Bit from '../Admin/Bit';
function Navbar(props) {
  const {location:{state}}=props;
console.log(state); 


    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className='navbars'>
        <Link to='/navbar' className='navbar_logo' onClick={closeMobileMenu}>
          BUILD OUT
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icons' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
x        <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
 
        <li className='navbar-item'>
            <Link to={{
              pathname:"/navbar/Home",
              state:props.location.state}} className='navbar-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
         
          <li className='navbar-item'>
            <Link to={{
              pathname:"/navbar/skills",
              state:props.location.state}} className='navbar-links' onClick={closeMobileMenu} >

              Skills
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to={{
              pathname:"/navbar/addcourse",
              state:props.location.state}} className='navbar-links' onClick={closeMobileMenu} >

              Add Course
            </Link>
            </li>
            <li className='navbar-item'>
            <Link to={{
              pathname:"/navbar/courses",
              state:props.location.state}} className='navbar-links' onClick={closeMobileMenu} >

              Courses
            </Link>
            </li>

          <li className='navbar-item'>
            <Link to={{
              pathname:"/navbar/addpost",
              state:props.location.state
            }} className='navbar-links' onClick={closeMobileMenu} >Add Post  </Link>
            
          </li>
          

        
        </ul>
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