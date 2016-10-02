import axios from 'axios'

export function fetchRides(person, date){
    dispatch({type: "FETCH_RIDES"})
    return (dispatch)=>{
        axios.get('/api/rides')
            .then((response)=>{
                dispatch({type: "FETCH_RIDES_FULFILLED", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "FETCH_DAY_REJECTED", payload: err})
            })
    }
}

export function addTmpRide(date){
    return (dispatch)=>{
        dispatch({type: 'ADD_TMP_RIDE',payload:date})
    }
}
export function removeTmpRide(date){
    return (dispatch)=>{
        dispatch({type: 'REMOVE_TMP_RIDE',payload:date})
    }
}

export function setTmpRideLocation(f,t){
    return (dispatch)=>{
        dispatch({type: 'ADD_TMP_RIDE',payload:{f,t}})
    }
}

export function addRide(startpoint,endpoint,date){
    dispatch({type: 'ADD_RIDE'})
    return (dispatch)=>{
        axios.post('/rides', {
            startpoint,endpoint,date
        })
        .then((response)=>{
            dispatch({type: "ADD_RIDE_FULFILLED", payload: {startpoint,endpoint,date}})
        })
        .catch((err)=>{
            dispatch({type: "ADD_RIDE_REJECTED", payload: err})
        });
    }
}

export function getRide(id){
    dispatch({type: 'GET_RIDE'})
    return (dispatch)=>{
        axios.get('/rides/'+id)
            .then((response)=>{
                dispatch({type: 'GET_RIDE_FULFILLED', payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: 'GET_RIDE_REJECTED', payload: err})
            })
    }
}

//export function request_ride( socket, driver, startpoint, endpoint, time ){
  //return (dispatch) => {
    //socket.emit('request_ride', {driver, startpoint, endpoin, time} , (err) => {
      //if ( err )
        //return dispatch({ type: "SOCKET_RIDE_REQUEST_ERROR", payload: err })
      //return dispatch({type: "SOCKET_RIDE_REQUEST"}, payload: to)
    //})
  //}
//}
