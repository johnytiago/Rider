export default function reducer(state={
    todos : [],
    fetching : false,
    fetched : false,
    error : null,
}, action){
    if(action.type === "ADD_TODO")
        return {...state}.todos.push(action.payload)
    if(action.type === "FETCH_TODOS")
        return {...state, fetching: true}
    if(action.type === "FETCH_TODOS_REJECTED")
        return {...state, fetching : false, error: action.payload}
    if(action.type === "FETCH_TODOS_FULFILLED")
        return {
            ...state,
            fetching: false,
            fetched: true,
            todos: action.payload
        }
    return state
}
