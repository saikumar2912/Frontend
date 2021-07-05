import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {FaMedal} from 'react-icons/fa';
import{useSelector,useDispatch} from 'react-redux';


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

export default function TransitionsModal({id,title}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const scores = useSelector(state => state.questions.score)
  console.log(scores)
const user = useSelector(state => state.user.user)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          timeout: 500,
        }}
      >


        
        <Fade in={open}>

          <div className={classes.paper}>
          {scores.map(e=>e.bit_id._id===id?<> 
              
              <div class="body-moda">
         <div class="c-bod">
           <div class="c-head">
             Certification
           </div>
           <div class="c-cert">
              <div class="mb-3">
                This certificate has been awarded to 
              </div>
              <h5 class="mb-3" className="achivename">{user.user_name}</h5>
              <div class="mb-3">
                For successful completion of the course
              </div>
              <h5 class="mb-3">
              {e.skill_id.Title}-{e.bit_id.title}
              </h5>
              <h5 class="pt-2 mb-4">
                BUILDING A POSITIVE WORKPLACE CULTURE
            </h5>
              <div class="pt-3 mb-4 date">
                
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>BuildOut</div>
                {e.score<50?
<div class="bronzec ">
<FaMedal className='bronze' size={100}/>

</div>:e.score<70?
<div> 
<FaMedal className='silver' size={100}/>

</div>:e.score>90?
<div class="goldc"> 
<FaMedal className='gold' size={100}/>

</div>

:<></> }
                <div >
                  <i>
                    Buildout
                  </i>
                  <div class="sign">
                  Training Manager
                  </div>
                </div>
              </div>
           </div>
           </div>
         </div>
        
              
              </>:<></>)}
       </div>
        </Fade>
      </Modal>
    </div>
  );
}
