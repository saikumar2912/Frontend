import React, { useState } from 'react';
import { Link,Route } from 'react-router-dom';
import Home from '../After_login/Home'
import AddPost from '../After_login/AddPost';
import {useSelector} from 'react-redux'
import Profile from '../After_login/profile';
import Skills from '../After_login/Skills';
import './Navbar.css';
import AddCourse from '../Admin/AddCourse';
import Bit from '../Admin/Bit';
import profilepage from '../Pages/profilepage';
import Search from './Search';
import {useHistory} from 'react-router-dom'

function Navbar() {
const user = useSelector(state => state.user.user)
console.log(user)

const history=useHistory();
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

        <Search/>
</li>
        <li className='navbar-item'>
            <Link to="/navbar/Home" className='navbar-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
         
          <li className='navbar-item'>
            <Link to="/navbar/skills" className='navbar-links' onClick={closeMobileMenu} >

              Skills
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
          <Link to="/navbar/skills" className='navbar-links' onClick={closeMobileMenu} >

            skills
          </Link>
          </li>
          <li className='navbar-item'>
            <button className='navbar-links' onClick={()=>{
          // AuthService.logout()
          history.replace("/login")
          window.location.reload()
          }}> logout</button>
</li>
        
        

      
      </ul>}
        
          
       
        </nav>
        <Route path='/navbar/skills' component={Skills}/>
        <Route path="/navbar/Home"  component={Home}/>
        <Route path='/navbar/addpost' component={AddPost}/>
        <Route path='/navbar/addcourse' component={AddCourse}/>
        <Route path="/navbar/view" component={Bit}/>  
<Route path="/navbar/profile" component={profilepage}/>


    </div>
  );
}

export default Navbar;