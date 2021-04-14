import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className='navbars'>
        <Link to='/' className='navbar_logo' onClick={closeMobileMenu}>
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
          <li className='navbar-item'>
            <Link to='/login' className='navbar-links' onClick={closeMobileMenu} >
              login
            </Link>
          </li>
        </ul>
        </nav>
    </div>
  );
}

export default Navbar;