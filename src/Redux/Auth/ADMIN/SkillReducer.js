const initialstate={
    skill:[]
}

const skillreducer = (state = initialstate, action) => {
    switch (action.type) {
     
      case "ADD_SKILL_SUCCESS":
        return {
         ...state,
         skill:action.payload
          
        }
      case "ADD_SKILL_FAILED":
        return {
            ...state
        }
      default: return state
    }
  }
  
  export default skillreducer