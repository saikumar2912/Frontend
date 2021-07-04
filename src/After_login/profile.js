import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {CgProfile} from 'react-icons/cg'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { logout } from '../Redux/Auth/Login/services';

export default function FadeMenu() {
  const history=useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
const dispatch=useDispatch()
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div >
     <CgProfile onClick={handleClick} />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
                  <Link className="profile" to="/profile" >Profile</Link>

        <MenuItem onClick={()=>{
           dispatch(logout())
          history.push("/")
          }}><div className="profile"> Logout</div></MenuItem>
      </Menu>
    </div>
  );
}