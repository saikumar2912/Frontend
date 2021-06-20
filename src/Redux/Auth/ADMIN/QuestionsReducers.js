const initialstate={
    questions:[]
  }

const reducer = (state = initialstate, action) => {
    switch (action.type) {
     
      case "QUESTION_DISPLAY_SUCCESS":
        return {
         ...state,
         questions:action.payload
          
        }
        case "DELETE_QUES_SUCCESS":
        return {
         ...state,
         questions:action.payload
          
        }
        case "UPDATE_QUES_SUCCESS":
        return {
         ...state,
         questions:action.payload
          
        }
       
      case "QUESTION_FAILED":
        return {
            ...state
        }
      default: return state
    }
  }
  
  export default reducer