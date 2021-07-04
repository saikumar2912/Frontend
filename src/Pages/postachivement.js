import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useSelector} from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import WarningIcon from '@material-ui/icons/Warning';
import parse from "html-react-parser"
import { Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Transition({title,id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
console.log(id)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const post = useSelector(state => state.display.display)
console.log(post)
const achive=useSelector(state=>state.user.achivement )

  return (
    <div>
          <a href="javascript:;" onClick={handleOpen} >{title}</a>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 5,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* {post.map((e)=>achive.achivement.includes(e._id)?<> {e.content}</>:<></>)} */}
            <div class="app-containe">
            <div class="admin-home-cards">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-12">
                    {post.map((e)=>achive.achivement.includes(e._id)?<>
           <div className="admin-card">
               <span></span>
               <div className="card-head">
               {/* <Avatar alt={"title"} src={e.skill.photo}  /> */}
                    <div class="card-head-in">
                        <h5>{e.skill.Title}</h5>
                                                
                    </div>
               </div>
               <div class="card-body">
            <div class="card-body-in"> 

            <strong> Title: {e.bit.title}</strong>
               
           </div>
<div className="card-body-in">
    Content:  {parse(e.content)}
 </div>
 <div class="card-foot">
     <ThumbUpAltIcon />{e.like.length}
     <ThumbDownIcon/>{e.dislike.length}
     </div>
     <div class="admin-warning">
         <WarningIcon/>{e.reports.length}
     </div>


           </div>
           </div>
           </>:<></>)}

                    </div>
                </div>
            </div>
                   </div>
                   </div>
          
        </Fade>
      </Modal>
    </div>
  );
}
