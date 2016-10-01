import React, {Component} from 'react'
import { Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Event extends Component {

    constructor(props) {
        super(props)
        let state = ''
        if(this.props.title)
            state = 'info'
        this.state = {
            state: state
        }
    }

    handdleClick(e){
        if(this.state.state==='success'){
            this.setState({
                state : 'danger'
            })
            setTimeout(()=>{
                if(this.props.title)
                    this.setState({ state : 'info' })
                else
                    this.setState({ state : null })

            },500)
            this.props.remove(this.props.date)
        }
        else {
            this.setState({
                state : 'success'
            })
            this.props.add(this.props.date)
        }
    }


    render(){
        let style = null
        let title = ' '
        if(this.props.title)
            style = 'event'
        if(this.props.first){
            style = 'start_event'
            title = this.props.title
        }


        return <ListGroupItem bsStyle={this.state.state} onClick={this.handdleClick.bind(this)} class={style} href="#" >
            &nbsp;{title}
        </ListGroupItem>
    }
}
