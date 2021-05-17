import axios from 'axios'
export const Skill=()=>{
    return(dispatch)=> {
        const Token = () => localStorage.getItem("user");
     axios.post('http://localhost:8000/skill/skills',{},{headers:{authorization:`Bearer ${Token()}`}})
     .then((res)=>{console.log(res.data)
        dispatch(Skillsuccess(res.data))
    
    })
}

}

export const Skillsuccess= skill=>{

return{
    type:"ADD_SKILL_SUCCESS",
    payload:skill
}
}

export const skillfail= ()=>{
    return{
        type:"ADD_SKILL_FAILED"
    }
}