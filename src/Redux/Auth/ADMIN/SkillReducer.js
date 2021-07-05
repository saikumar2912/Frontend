const initialstate={
    skill:[]
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
     
      case "SKILL_SUCCESS":
        return {
         ...state,
         skill:action.payload
          
        }
        
      case "ADD_SKILL_SUCCESS":
        return {
         ...state,
         skill:action.payload
          
        }
      case "ADD_SKILL_FAILED":
        return {
            ...state
        }
      case "SKILL_FAILED":
        return {
            ...state
        }
      default: return state
    }
  }
  
  export default reducer