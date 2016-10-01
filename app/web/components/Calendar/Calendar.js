
import React, {Component} from 'react'
import { Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import Navigation from './Navigation'
import Schedule from './Schedule'
import Day from './Day'

export default class Calendar extends Component {
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
            <Schedule events={events} />
        </div>
    }
}
