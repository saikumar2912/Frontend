import React from 'react'
import{Link} from 'react-router-dom'; 
const New = () => {
    return (
        <div>
            <ul>
            <li className='navbar-item'>
            <Link to='/login'>
              login
            </Link>
            </li>
            </ul>
        </div>
    )
}

export default New
