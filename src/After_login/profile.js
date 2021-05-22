
import React from 'react';
import {useDispatch} from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {CgProfile} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
export default function FadeMenu() {
  const history=useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
     <CgProfile onClick={handleClick} className="cgprofile"/>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
                  <Link to="/navbar/profile" className='navbar-link'>Profile</Link>

        <MenuItem onClick={()=>{
          // AuthService.logout()
          history.replace("/login")
          window.location.reload()
          }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
