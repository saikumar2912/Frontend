const initialstate={
    display:[],
    count:null
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
     
      case "DISPLAY_POST_SUCCESS":
        return {
         ...state,
        display:action.payload
          
        }
        case "REPORT_SUCCESS":
          return {
           ...state,
          count:action.payload
            
          }
        case "DELETE_POST_SUCCESS":
        return{
...state,
display:action.payload
        }
      case "DISPLAY_POST_FAILED":
        return {
            ...state
        }
       
      default: return state
    }
  }
  
  export default reducer