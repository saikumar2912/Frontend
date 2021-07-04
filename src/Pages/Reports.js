import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Reportlike,Reportdislike } from '../Redux/Auth/Login/DisplayAction';
const Reports = ({reportid}) => {
const dispatch=useDispatch()

const user = useSelector(state => state.user.user)
    console.log(user)
    const report = useSelector(state => state.display.Report)
    console.log(report)
    console.log(reportid)  

    return (
        <div>
            
            <div class="card-body">
        
{report.map(e=><>
{e.post_id._id===reportid?<>
<div class="report-body">

<p>{e.report}</p>
<div class="d-flex">
<ThumbUpAltIcon className={e.reportlike.includes(user._id)?"like_icon":"likes_icon"} onClick={()=>{dispatch(Reportlike(e._id,user._id));}} 
       size={100}/>{e.reportlike.length}
<div class="icon">
<ThumbDownIcon className={e.reportdislike.includes(user._id)?"dislike_icon":"dislikes_icon"} onClick={()=>{dispatch(Reportdislike(e._id,user._id))}} size={100}/>{e.reportdislike.length}
</div>
</div>
</div>
</>:<></>}
</>)}
</div>
        </div>
    )
}

export default Reports
