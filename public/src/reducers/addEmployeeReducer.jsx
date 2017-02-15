const emp=(state,action)=>{
  switch(action.type){
    case "ADD_EMPLOYEE":
      return [...state, action.empobj];
    default :
      return state
  }
}

export default emp;