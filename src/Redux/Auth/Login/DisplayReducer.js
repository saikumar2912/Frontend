const initialstate={
    display:[]
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
     
      case "DISPLAY_POST_SUCCESS":
        return {
         ...state,
        display:action.payload
          
        }
      case "DISPLAY_POST_FAILED":
        return {
            ...state
        }
        case "LIKE_POST_SUCCESS":
        return {
         ...state,
        display:action.payload
          
        }
      default: return state
    }
  }
  
  export default reducer