
export default function reducer(state={
  employees:[],
  fetching:false,
  fetched:false,
  error:null
},action) {
	
	switch(action.type) {
		case "FETCH_MODULES":
			return {
				...state,
        fetching: false,
        fetched: true,
        employees:action.payload,
			}
     default :
      return state
	}
	
}