export default function reducer(state={
    rides : {},
    tmp : [],
    fetching : false,
    fetched : false,
    error: null
}, action){

    if(action.type === "FETCH_RIDES")
        return {...state, fetching: true}
    if(action.type === "FETCH_RIDES_FULFILLED"){
        let rides = state.rides.concat(action.payload)
        return {
            ...state,
            rides: rides,
            fetching : false,
            fetched : true,
            error: null
        }
    }
    return state

    if(action.type === "ADD_TMP_RIDE"){
        let tmp = state.tmp.concat(action.payload)
        return {
            ...state,
            tmp: tmp
        }
    }
    return state
}
