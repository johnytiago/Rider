
import React, {Component} from 'react'

import { addTodo } from '../../actions/todos'

export default class AddTodo extends Component {

    constructor(){
        super()
        this.todo = {}
    }
    handleChange(event){
        this.todo[event.target.id] = event.target.value
    }
    handleAddTodo(event){
        //addTodo(this.todo)
        this.todo = {
            title: "",
            body: ""
        }
    }
    render() {
        return <div>
            <h4>Adding todos</h4>
            <input id='title' onChange={this.handleChange.bind(this)} placeholder="Title" value={this.todo.title} />
            <input id='body' onChange={this.handleChange.bind(this)} placeholder="Body" value={this.todo.body} />
            <button onClick={this.handleAddTodo.bind(this)}>Add todo</button>
        </div>
    }
}
