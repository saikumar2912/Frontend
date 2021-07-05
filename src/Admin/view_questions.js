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
        <div class="app-container">
            {Question.map(e=>state===e.bit_id._id?<>
            <div class="Quiz d-flex">
                <div class="d-flex flex-column flex-fill">
            <h3>{e.question}</h3>
            <div>1. {e.option1}</div>
            <div>2. {e.option2}</div>
            <div>3. {e.option3}</div>
            <div> 4. {e.option4}</div>
            <div> <strong>Answer: </strong>{e.answer}</div>
            </div>
            <div class="d-flex">
            <DeleteForeverIcon className="deletebutton" onClick={()=>{dispatch(DeleteQuiz(e._id))}}/> 
            <SimpleModal id={e}/>
            </div>
            </div>
            </>:<></>
            
            )}
            <Simple id={state}/>

            
        </div>
    )
}

export default View_questions
