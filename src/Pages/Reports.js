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
{report.map(e=><>
{e.post_id._id===reportid?<>{e.report}
{e.user_id.user_name}

<ThumbUpAltIcon className={e.reportlike.includes(user._id)?"like_icon":"likes_icon"} onClick={()=>{dispatch(Reportlike(e._id,user._id));}} 
       size={100}/>{e.reportlike.length}
<ThumbDownIcon className={e.reportdislike.includes(user._id)?"dislike_icon":"dislikes_icon"} onClick={()=>{dispatch(Reportdislike(e._id,user._id))}} size={100}/>{e.reportdislike.length}
</>:<></>}
</>)}

        </div>
    )
}

export default Reports
