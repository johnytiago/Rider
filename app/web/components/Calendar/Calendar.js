
import React, {Component} from 'react'
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import Navigation from '../Navigation/Navigation'
import Schedule from './Schedule'
import List from './List'
import Day from './Day'

export default class Calendar extends Component {
    constructor(){
        super()
        this.state = {
            hours : []
        }
    }
    addHour(h){
        let hours = this.state.hours
        hours.push(h)
        this.setState({
            hours
        })
    }
    removeHour(h){
        let hours = this.state.hours
        hours.splice(hours.indexOf(h), 1)
        this.setState({
            hours
        })
    }
    render() {
        let events = {
            '01/10/2016' : [
                {acronym: 'AL', start:'10:00', end:'11:30'},
                {acronym: 'BD', start:'11:30', end:'13:00'}
            ],
            '02/10/2016' : [
                {acronym: 'AL', start:'10:00', end:'11:30'}
            ],
            '03/10/2016' : [
                {acronym: 'AL', start:'10:00', end:'11:30'}
            ],
            '04/10/2016' : [
                {acronym: 'AL', start:'10:00', end:'11:30'}
            ]
        }
        return <div>
            <Navigation state='calendar' />
            <Row>
                <Col md={3}> <List hours={this.state.hours} /> </Col>
                <Col md={9}> <Schedule addHour={this.addHour.bind(this)} removeHour={this.removeHour.bind(this)} events={events} /> </Col>
            </Row>
        </div>
    }
}
