
import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector,useDispatch } from 'react-redux';
import { Verification} from '../Redux/Auth/ADMIN/VerificationAction'
import { ToastContainer } from 'react-toastify';
const StyledTableCell = withStyles((theme) => ({
  head: {
    background:'#2bae66ff',
    color:"white",
  },
  body: {
    fontSize: 14,
    background:"white",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const useStyles = makeStyles({
  table: {
    width:"900px",
    margin:"1rem"
    
  },
});

export default function CustomizedTables() {
  const classes = useStyles();
  const dispatch = useDispatch()
    const user = useSelector((state)=> state.user.user)
  
    console.log(user);
  
    const request = useSelector((state)=>state.verification.status)
    console.log(request);
  return (
    <div className="verification__container">

    <TableContainer>
      <center>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EmailID</StyledTableCell>
            <StyledTableCell align="center">UserName</StyledTableCell>
            <StyledTableCell align="center">Accept</StyledTableCell>
            <StyledTableCell align="center">Reject</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {request.map(e=> e.status === "notVerified" ?
          
            <StyledTableRow key={e._id}>
              <StyledTableCell component="th" scope="row">
                {e.user_id.email_id}
              </StyledTableCell>
              <StyledTableCell align="center">{e.user_id.user_name}</StyledTableCell>
              <StyledTableCell align="center">
                  
                <button className=" btn btn-primary" onClick={() => dispatch(Verification(e._id,e.user_id._id,user._id,"Verified")) }> Accept</button>  
                </StyledTableCell>
              <StyledTableCell align="center">   
   <button className=" btn btn-secondary" onClick={()=>{dispatch(Verification(e._id,e.user_id._id,user._id,"Rejected"))}}>Reject</button>
 <ToastContainer/>
 </StyledTableCell>
              
            </StyledTableRow>:<></>
          )}
        </TableBody>
      </Table>
      </center>
    </TableContainer>
    </div>

  );
}






