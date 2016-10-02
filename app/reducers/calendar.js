export default function reducer(state={
    calendar : {},
    error: null,
    fetching: false,
    fetched: false
}, action){
    if(action.type === "FETCH_DAY")
        return {...state, fetching: true, fetched: false}
    if(action.type === "FETCH_DAY_FULFILLED"){
        let calendar = {...state.calendar }
        calendar[action.payload[0].start.substring(0,10)] = action.payload
         return {
            ...state,
            calendar ,
            fetching: false,
            fetched: true,
            error: null
        }
    }
    if(action.type === "FETCH_DAY_REJECTED")
        return {...state, fetching: false, fetched: false, error: action.payload}
    return state
}
