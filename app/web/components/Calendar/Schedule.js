

import React, {Component} from 'react'
import { Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import Day from './Day'

export default class Schedule extends Component {
    componentDidMount(){
        document.getElementById('schedule').scrollTop = 327
    }
    render() {

        let events = this.props.events;

        let dates = Object.keys(events)
        let header = dates.map(day => <Col key={day} xs={3}><Panel key={day} collapsible defaultExpanded header={day}></Panel></Col>)

        let days = []
        for (let key in events){
            days.push(<Day key={key} date={key} events={events[key]} />)
        }

        return <div>
            <div class="schedule-header">
            <Row>
                <Col xs={1}>
                    <Panel collapsible defaultExpanded header=" &nbsp; "></Panel>
                </Col>
                <Col xs={11}>
                    <Row>{header}</Row>
                </Col>
            </Row>
            </div>
            <Row class="schedule" id="schedule">
            <Col xs={1}>
                <ListGroup fill>
                    <ListGroupItem>00h00</ListGroupItem>
                    <ListGroupItem>00h30</ListGroupItem>
                    <ListGroupItem>01h00</ListGroupItem>
                    <ListGroupItem>01h30</ListGroupItem>
                    <ListGroupItem>02h00</ListGroupItem>
                    <ListGroupItem>02h30</ListGroupItem>
                    <ListGroupItem>03h00</ListGroupItem>
                    <ListGroupItem>03h30</ListGroupItem>
                    <ListGroupItem>04h00</ListGroupItem>
                    <ListGroupItem>04h30</ListGroupItem>
                    <ListGroupItem>05h00</ListGroupItem>
                    <ListGroupItem>05h30</ListGroupItem>
                    <ListGroupItem>06h00</ListGroupItem>
                    <ListGroupItem>06h30</ListGroupItem>
                    <ListGroupItem>07h00</ListGroupItem>
                    <ListGroupItem>07h30</ListGroupItem>
                    <ListGroupItem>08h00</ListGroupItem>
                    <ListGroupItem>08h30</ListGroupItem>
                    <ListGroupItem>09h00</ListGroupItem>
                    <ListGroupItem>09h30</ListGroupItem>
                    <ListGroupItem>10h00</ListGroupItem>
                    <ListGroupItem>10h30</ListGroupItem>
                    <ListGroupItem>11h00</ListGroupItem>
                    <ListGroupItem>11h30</ListGroupItem>
                    <ListGroupItem>12h00</ListGroupItem>
                    <ListGroupItem>11h30</ListGroupItem>
                    <ListGroupItem>12h00</ListGroupItem>
                    <ListGroupItem>12h30</ListGroupItem>
                    <ListGroupItem>13h00</ListGroupItem>
                    <ListGroupItem>13h30</ListGroupItem>
                    <ListGroupItem>14h00</ListGroupItem>
                    <ListGroupItem>14h30</ListGroupItem>
                    <ListGroupItem>15h00</ListGroupItem>
                    <ListGroupItem>15h30</ListGroupItem>
                    <ListGroupItem>16h00</ListGroupItem>
                    <ListGroupItem>16h30</ListGroupItem>
                    <ListGroupItem>17h00</ListGroupItem>
                    <ListGroupItem>17h30</ListGroupItem>
                    <ListGroupItem>18h00</ListGroupItem>
                    <ListGroupItem>18h30</ListGroupItem>
                    <ListGroupItem>19h00</ListGroupItem>
                    <ListGroupItem>19h30</ListGroupItem>
                    <ListGroupItem>20h00</ListGroupItem>
                    <ListGroupItem>20h30</ListGroupItem>
                    <ListGroupItem>21h00</ListGroupItem>
                    <ListGroupItem>21h30</ListGroupItem>
                    <ListGroupItem>22h00</ListGroupItem>
                    <ListGroupItem>22h30</ListGroupItem>
                    <ListGroupItem>23h00</ListGroupItem>
                    <ListGroupItem>23h30</ListGroupItem>
                </ListGroup>
            </Col>
            <Col xs={11}>
            <Row>
                {days}
            </Row>
            </Col>
            </Row>
        </div>
    }
}
