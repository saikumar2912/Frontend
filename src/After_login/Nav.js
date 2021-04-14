import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import FadeMenu from './profile';

function Nav() {
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
              Skills <i className='' />
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/addpost' className='nav-links' onClick={closeMobileMenu}>
             ADD POST
            </Link>
            
          </li>
        <FadeMenu/>
        </ul>
        </nav>
    </div>
  );
}

export default Nav;