import React from 'react'
import{Link,Route} from 'react-router-dom'; 

const New = () => {
    return (
        <div className="initial">
            <ul>
            <li className='initial-item'>
            <Link to='/login' className='initial-links'>
              Sign In
            </Link>
            </li>
            <li className='initial-item'>
            <Link to='/contactus' className='initial-links'>
              Contact Us
            </Link>
            </li>
            
            </ul>
        </div>
    )
}

export default New
