const initial={
  user:null,
  achivement:null
}

const reducer=(state=initial,action)=>{
  switch(action.type){
    case 'LOGIN':
      return{
             ...state,
             user:action.payload
      }
      case 'ACHIVEMENT':
      return{
             ...state,
             achivement:action.payload
      }
      case 'UPDATE':
      return{
             ...state,
             achivement:action.payload
      }
      case 'LOGOUT':
        return null
        
      default:
        return state
  }
}

export default reducer