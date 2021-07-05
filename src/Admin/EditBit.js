import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import {RiEdit2Fill} from 'react-icons/ri'
import { TextField } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {useDispatch} from "react-redux"
import { UpdateBit } from '../Redux/Auth/ADMIN/BitAction';



export default function SimplePopover({id}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [title, setTitle] = useState('')
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const ids = open ? 'simple-popover' : undefined;

  const dispatch=useDispatch()
console.log(title)
  return (
    <div>
      <RiEdit2Fill className="bitedit" aria-describedby={ids} variant="contained" color="primary" onClick={handleClick}/>
      <Popover
        id={ids}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
  <TextField id="outlined-basic" label="" variant="outlined" onChange={(e)=>setTitle(e.target.value)} />
<CheckBoxIcon onClick={()=>{dispatch(UpdateBit(id,title))}}         />
      </Popover>
    </div>
  );
}