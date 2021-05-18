
import React from 'react';
import {useDispatch} from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {CgProfile} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'
import { logout } from '../Redux/Auth/Login/Action';

export default function FadeMenu() {
  const dispatch=useDispatch();
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>{
              localStorage.clear()
              history.push('/login')
            }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
