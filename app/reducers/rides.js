export default function reducer(state={
    rides : {},
    tmp : {
        rides: [],
        from: 'Home',
        to: 'Tagus'
    },
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

    if(action.type === "SET_TMP_RIDE_LOCATION"){
        let tmpRides = state.tmp.rides.concat([])
        return {...state, tmp:{rider: tmpRides,from: action.payload.f, to: action.payload.t}}
    }

    if(action.type === "ADD_TMP_RIDE"){
        let rides = state.tmp.rides.concat([action.payload])
        let f = state.tmp.from
        let t = state.tmp.to
        return {
            ...state,
            tmp: {
                from: f,
                to: t,
                rides
            }
        }
    }
    return state
}
