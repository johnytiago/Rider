import React, {Component} from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../../actions/user'
import { fetchTodos } from '../../actions/todos'

import TodoList from './TodoList'

@connect((store)=>{
    return {
        user : store.user.user,
        userFetched : store.user.fetched,
        todos : store.todos.todos
    }
})
export default class Layout extends Component {
    componentWillMount(){
        this.props.dispatch(fetchUser())
    }
    fetchTodos(){
        this.props.dispatch(fetchTodos())
    }
    render() {
        const { user, todos } = this.props
        if(!todos.length)
            return <div>
                <h1>{user.username}</h1>
                <button onClick={this.fetchTodos.bind(this)}>Load todos</button>
            </div>

        return <div>
            <h1>{user.username}</h1>
            <TodoList todos={todos} />
        </div>
    }
}
