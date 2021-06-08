import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Verification} from '../Redux/Auth/ADMIN/VerificationAction'
import { Avatar, Card } from '@material-ui/core'


const Verify = () => {
    const dispatch = useDispatch()

    const status = useSelector(state => state.verification.status)
    console.log(status)
    const user = useSelector((state)=> state.user.user)
    console.log(user)


    return (
        <div>
           
            {status.map(e=>e.status==="notVerified" ?<Card>
            <button onClick={()=>{dispatch(Verification(e._id,e.user_id._id,user._id,"Rejected"))}}>reject</button>
            <button onClick={() => 
          {console.log("click")
            dispatch(Verification(e._id,e.user_id._id,user._id,"Verified")) }}>verify</button>
                 {e.user_id.user_name} {e.user_id.email_id}  </Card>:<></>)}
            
        </div>
    )
}

export default Verify
