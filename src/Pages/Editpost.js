import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import {RiEdit2Fill} from 'react-icons/ri'
import { TextField } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {useDispatch} from "react-redux"
import { UpdatePost } from '../Redux/Auth/Login/DisplayAction';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePop({id}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [content, setContent] = useState(id.content)
  console.log(id.content)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const ids = open ? 'simple-popover' : undefined;

  const dispatch=useDispatch()
console.log(content)
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
  <TextField id="outlined-basic" label="" variant="outlined" onChange={(e)=>setContent(e.target.value)} value={content} />
<CheckBoxIcon onClick={()=>{dispatch(UpdatePost(id._id,content))}}         />
      </Popover>
    </div>
  );
}