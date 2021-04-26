import React, { useState } from 'react';
import { Link,Route } from 'react-router-dom';
import Home from '../After_login/Home'
import AddPost from '../After_login/AddPost';
import Profile from '../After_login/profile';
import Skills from '../After_login/Skills';
import './Navbar.css';

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
              pathname:"/navbar/addpost",
              state:props.location.state
            }} className='navbar-links' onClick={closeMobileMenu} >Add Post  </Link>
            
          </li>
          <Profile/>

        
        </ul>
        </nav>
        <Route path='/navbar/skills' component={Skills}/>
        <Route path="/navbar/Home"  component={Home}/>
        <Route path='/navbar/addpost' component={AddPost}/>

    </div>
  );
}

export default Navbar;