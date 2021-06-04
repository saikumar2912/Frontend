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
import {useHistory,useLocation} from 'react-router-dom';
import Skillsearch from '../Pages/skillsearch';
import AdminHome from '../Admin/AdminHome';
import Achivements from '../Pages/Achivements'
import SearchAppBar from './SearchPost';
import Postsearch from '../Pages/PostSearch';

function Navbar() {
const user = useSelector(state => state.user.user)
console.log(user)
const location=useLocation();

const history=useHistory();
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div class="wrapper">
        <nav className='navbars'>
        <Link to='/navbar/home' className='navbar-links' onClick={closeMobileMenu}>
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
        {location.pathname === "/navbar/addpost"?<></> :<SearchAppBar/>}
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
          <Link to="/navbar/new" className='navbar-links' onClick={closeMobileMenu} >

            Home
          </Link>
          </li>
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
<Route path="/navbar/postsearch" component={Skillsearch}/>
<Route path="/navbar/skillsearch" component={Postsearch}/>
<Route path="/navbar/new" component={AdminHome}/>
<Route path="/navbar/achivement" component={Achivements}/>

<footer class="c-footer">
            <div class="c-inner">
              Copyright BuildOut. All rights reserved. For internal use only.
            </div>
          </footer>

    </div>
  );
}

export default Navbar;