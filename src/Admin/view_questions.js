import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SimpleModal from './Edit_quiz';
import Simple from './Addquiz'
import { DeleteQuiz } from '../Redux/Auth/ADMIN/QuestionsAction';



const View_questions = (props) => {
    const {location:{state}}=props;
    console.log(state)
    const dispatch=useDispatch();
    const Question = useSelector(state => state.questions.questions)
    console.log(Question)
    return (
        <div>

            {Question.map(e=>state===e.bit_id._id?<>
            <div>{e.question}</div>
            <div>{e.option1}</div>
            <div>{e.option2}</div>
            <div>{e.option3}</div>
            <div>{e.option4}</div>
            <div>{e.answer}</div>
            <DeleteForeverIcon onClick={()=>{dispatch(DeleteQuiz(e._id))}}/> 
            <SimpleModal id={e._id}/>
            
            </>:<></>)}
            <Simple id={state}/>

        </div>
    )
}

export default View_questions
