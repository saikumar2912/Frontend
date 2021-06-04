import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {RiEdit2Fill} from 'react-icons/ri'
import { TextField } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {useDispatch} from "react-redux"
import { UpdateBit } from '../Redux/Auth/ADMIN/BitAction';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover({id}) {
  const classes = useStyles();
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
      <RiEdit2Fill aria-describedby={ids} variant="contained" color="primary" onClick={handleClick}/>
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
<CheckBoxIcon onClick={()=>dispatch(UpdateBit(id,title))}/>
      </Popover>
    </div>
  );
}