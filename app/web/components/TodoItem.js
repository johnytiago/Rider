
import React, {Component} from 'react'

export default class TodoItem extends Component {

    render() {

        const { title, body } = this.props

        return <div>
            <li>
                <h4>{title}</h4>
                <p>{body}</p>
            </li>
            <br />
        </div>
    }
}
