const initialstate={
    post:[]
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
     
      case "ADD_SKILL_SUCCESS":
        return {
         ...state,
         post:action.payload
          
        }
      case "ADD_SKILL_FAILED":
        return {
            ...state
        }
      default: return state
    }
  }
  
  export default reducer