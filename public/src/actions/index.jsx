import request from 'superagent';

/*
export const addEmployee=(empobj)=>({
  type:"ADD_EMPLOYEE",
  empobj
})*/

export function getModule(){
  return function(dispatch){
  	 request.get('http://localhost:9000/api/modules').end((err, res) => {
        if(err) throw new Error(err);
        else{
            console.log(JSON.stringify(res));
        	dispatch({type: "FETCH_MODULES", payload: res.objData})
        }
    });
  }
}