import React, { useState } from 'react';
import { Link,Route } from 'react-router-dom';
import Homee from '../After_login/Homee'
import AddPost from '../After_login/AddPost'
import Skills from '../After_login/Skills';
// import './Navbar.css';

function Navbar() {
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
        <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
          <li className='navbar-item'>
            <Link to='/home' className='navbar-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/contactus'className='navbar-links' onClick={closeMobileMenu} >
              Contact Us <i className='' />
            </Link>
          </li>

          <li className='navbar-item'>
            <Link to='/register' className='navbar-links' onClick={closeMobileMenu}>
             Register
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/homee' className='nav-links' onClick={closeMobileMenu}>
              Homee
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/skills'className='nav-links' onClick={closeMobileMenu} >

              Skills
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/addpost' className='' onClick={closeMobileMenu} >Add Post  </Link>
            
          </li>

        
        </ul>
        </nav>
        <Route path='/skills' exact component={Skills}/>
        <Route path="/homee" exact component={Homee}/>
        <Route path="/AddPost" exact component={AddPost}/>

    </div>
  );
}

export default Navbar;