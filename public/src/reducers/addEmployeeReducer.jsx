
export default function reducer(state={
  employees:[],
  genderObj:[],
  fetching:false,
  fetched:false,
  error:null
},action) {
	
	switch(action.type) {
		case "FETCH_GENDER":
			return {
				...state,
        fetching: false,
        fetched: true,
        genderObj:action.payload,
			}
     default :
      return state
	}
	
}