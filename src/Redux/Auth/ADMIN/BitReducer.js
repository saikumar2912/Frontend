const initialstate={
    bit:[]
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
     
      case "ADD_BIT_SUCCESS":
        return {
         ...state,
         bit:action.payload
          
        }
        case "DELETE_BIT_SUCCESS":
        return {
         ...state,
         bit:action.payload
          
        }
        case "UPDATE_BIT_SUCCESS":
        return {
         ...state,
         bit:action.payload
          
        }
      case "ADD_BIT_FAILED":
        return {
            ...state
        }
      default: return state
    }
  }
  
  export default reducer