import axios from 'axios'

export function fetchTodos(){
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                dispatch({type: "FETCH_TODOS_FULFILLED", payload: response.data})
            })
            .catch((err)=>{
                dispatch({type: "FETCH_TODOS_REJECTED", payload: err})
            })
    }
}

export function addTodo(title, body){
    const id = "random"
    return {
        type: 'ADD_TODO',
        payload : {
            id,
            title,
            body
        }
    }
}
