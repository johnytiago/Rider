
import React, {Component} from 'react'

import TodoItem from './TodoItem'
import AddTodo from './AddTodo'

export default class TodoList extends Component {


    render() {

        const todos = this.props.todos.map(todo => <TodoItem key={todo.id} title={todo.title} body={todo.body} /> )

        return <div>
            <h3>Todo List</h3>
            <AddTodo />
            <ul>{todos}</ul>
        </div>
    }
}
