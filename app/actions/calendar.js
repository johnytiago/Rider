import axios from 'axios'

export function fetchDay(person, date){
    return (dispatch)=>{
        dispatch({type: "FETCH_DAY"})
        axios.get('/api/calendar/'+person+'/'+date)
            .then((response)=>{
                dispatch({type: "FETCH_DAY_FULFILLED", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "FETCH_DAY_REJECTED", payload: err})
            })
    }
}
