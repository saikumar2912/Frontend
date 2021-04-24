import React, { useState } from 'react';
import { Link,Route } from 'react-router-dom';
import './Nav.css';
import Home from '../Pages/home'
import FadeMenu from './profile';
import Homee from './Homee';
import Skills from './Skills';
import AddPost from './AddPost';
function Nav(props) {
  const {location:{state}}=props;
  console.log(state);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className='navbar'>
        <Link to='/navbar' className='navbar-logo' onClick={closeMobileMenu}>
          BUILD OUT
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/homee' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/skills'className='nav-links' onClick={closeMobileMenu} >

              Skills
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/addpost' className='nav-links' onClick={closeMobileMenu} >Add Post  </Link>
            
          </li>
          <FadeMenu/>

        </ul>
        </nav>
        <Route path='/home' component={Home}/>

<AddPost user={state}/>
    </div>
  );
}

export default Nav;