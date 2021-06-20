import React,{useState} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function AttendQuiz() {

    const history=useHistory()
    console.log(history.location.state)
    const ID=history.location.state
    const Question = useSelector(state => state.questions.questions)
    console.log(Question)
  const [value, setValue] = React.useState();
const [score,setScore]=useState(0);
console.log(score)

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  
  return (
  <FormControl>
    {Question.map(e=>ID===e.bit_id._id?<>
    
        <FormLabel component="legend">{e.question}</FormLabel>
      <RadioGroup aria-label="gender"  onChange={handleChange}>
        <FormControlLabel  value={e.option1} control={<Radio onChange={()=>{e.option1===e.answer?setScore(score+1):setScore(score+0)}}  />} label={e.option1}  />
        <FormControlLabel value={e.option2} control={<Radio onChange={()=>{e.option2===e.answer?setScore(score+1):setScore(score+0)}}   />} label={e.option2} />
        <FormControlLabel value={e.option3} control={<Radio onChange={()=>{e.option3===e.answer?setScore(score+1):setScore(score+0)}}   />} label={e.option3} />
        <FormControlLabel value={e.option4} control={<Radio onChange={()=>{e.option4===e.answer?setScore(score+1):setScore(score+0)}}   />} label={e.option4} />


      </RadioGroup>

    </>
    
    
    
    :<></>)}
    </FormControl>
   

     
  );
}




