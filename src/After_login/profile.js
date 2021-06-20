import React from 'react';
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
                  <Link className="profile" to="/navbar/profile" >Profile</Link>

        <MenuItem onClick={()=>{
          // AuthService.logout()
          history.replace("/login")
          window.location.reload()
          }}><div className="profile"> Logout</div></MenuItem>
      </Menu>
    </div>
  );
}