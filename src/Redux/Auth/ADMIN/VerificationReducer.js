const initial={
   status:[]
  }
  
  const verification=(state=initial,action)=>{
    switch(action.type){
      case 'STATUS__SUCCESS':
        return{
               ...state,
               status:action.payload
        }
        case 'STATUS__FAILURE':
          return null
          
        default:
          return state
    }
  }
  
  export default verification