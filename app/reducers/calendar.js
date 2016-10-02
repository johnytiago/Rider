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
        calendar[action.payload.date.substring(0,10)] = action.payload.events
        const ordered = {};
        Object.keys(calendar).sort().forEach(function(key) {
          ordered[key] = calendar[key];
        });
        return {
            ...state,
            calendar: ordered,
            fetching: false,
            fetched: true,
            error: null
        }
    }
    if(action.type === "FETCH_DAY_REJECTED")
        return {...state, fetching: false, fetched: false, error: action.payload}
    return state
}
