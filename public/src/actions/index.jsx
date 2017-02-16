import request from 'superagent';

export function getModule(){
    return function(dispatch){
      request.get('/api/gender').end((err, res) => {
        if(err) throw new Error(err);
        else{
          dispatch({type: "FETCH_GENDER", payload: res.body})
        }
      });
    }
}