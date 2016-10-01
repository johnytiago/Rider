

import React, {Component} from 'react'
import { Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import Day from './Day'

export default class Schedule extends Component {
    componentDidMount(){
        document.getElementById('schedule').scrollTop = 327
    }
    render() {

        let events = this.props.events

        let dates = Object.keys(events)
        let j = 0, cl2 = ''
        let header = dates.map((day)=>{
            j++
            if(j>1)
                cl2 = 'hidden-xs'
            let text = day.substring(0,5)
            return <Col class={cl2} key={day} xs={12} md={3}><Panel collapsible defaultExpanded header={text}></Panel></Col>
        })

        let days = []
        let k = 0
        for (let key in events){
            k++
            if(k>1){
                days.push(<Day key={key} class='hidden-xs' add={this.props.addHour} remove={this.props.removeHour}  date={key} events={events[key]}  ></Day>)
            }else{
                days.push(<Day key={key} add={this.props.addHour} remove={this.props.removeHour}  date={key} events={events[key]}  ></Day>)
            }
        }

        return <Panel>
            <div class="schedule-header">
            <Row>
                <Col md={1} xs={3}>
                    <Panel collapsible defaultExpanded header=" &nbsp; "></Panel>
                </Col>
                <Col md={11} xs={9}>
                    <Row>{header}</Row>
                </Col>
            </Row>
            </div>
            <Row class="schedule" id="schedule">
            <Col xs={3} md={1}>
                <ListGroup fill>
                    <ListGroupItem key={1}>00h00</ListGroupItem>
                    <ListGroupItem key={2}>00h30</ListGroupItem>
                    <ListGroupItem key={3}>01h00</ListGroupItem>
                    <ListGroupItem key={4}>01h30</ListGroupItem>
                    <ListGroupItem key={5}>02h00</ListGroupItem>
                    <ListGroupItem key={6}>02h30</ListGroupItem>
                    <ListGroupItem key={7}>03h00</ListGroupItem>
                    <ListGroupItem key={8}>03h30</ListGroupItem>
                    <ListGroupItem key={9}>04h00</ListGroupItem>
                    <ListGroupItem key={10}>04h30</ListGroupItem>
                    <ListGroupItem key={11}>05h00</ListGroupItem>
                    <ListGroupItem key={12}>05h30</ListGroupItem>
                    <ListGroupItem key={13}>06h00</ListGroupItem>
                    <ListGroupItem key={14}>06h30</ListGroupItem>
                    <ListGroupItem key={15}>07h00</ListGroupItem>
                    <ListGroupItem key={16}>07h30</ListGroupItem>
                    <ListGroupItem key={17}>08h00</ListGroupItem>
                    <ListGroupItem key={18}>08h30</ListGroupItem>
                    <ListGroupItem key={19}>09h00</ListGroupItem>
                    <ListGroupItem key={20}>09h30</ListGroupItem>
                    <ListGroupItem key={21}>10h00</ListGroupItem>
                    <ListGroupItem key={22}>10h30</ListGroupItem>
                    <ListGroupItem key={23}>11h00</ListGroupItem>
                    <ListGroupItem key={24}>11h30</ListGroupItem>
                    <ListGroupItem key={25}>12h00</ListGroupItem>
                    <ListGroupItem key={26}>12h30</ListGroupItem>
                    <ListGroupItem key={27}>13h00</ListGroupItem>
                    <ListGroupItem key={28}>13h30</ListGroupItem>
                    <ListGroupItem key={29}>14h00</ListGroupItem>
                    <ListGroupItem key={30}>14h30</ListGroupItem>
                    <ListGroupItem key={31}>15h00</ListGroupItem>
                    <ListGroupItem key={32}>15h30</ListGroupItem>
                    <ListGroupItem key={33}>16h00</ListGroupItem>
                    <ListGroupItem key={34}>16h30</ListGroupItem>
                    <ListGroupItem key={35}>17h00</ListGroupItem>
                    <ListGroupItem key={36}>17h30</ListGroupItem>
                    <ListGroupItem key={37}>18h00</ListGroupItem>
                    <ListGroupItem key={38}>18h30</ListGroupItem>
                    <ListGroupItem key={39}>19h00</ListGroupItem>
                    <ListGroupItem key={40}>19h30</ListGroupItem>
                    <ListGroupItem key={41}>20h00</ListGroupItem>
                    <ListGroupItem key={42}>20h30</ListGroupItem>
                    <ListGroupItem key={43}>21h00</ListGroupItem>
                    <ListGroupItem key={44}>21h30</ListGroupItem>
                    <ListGroupItem key={45}>22h00</ListGroupItem>
                    <ListGroupItem key={46}>22h30</ListGroupItem>
                    <ListGroupItem key={47}>23h00</ListGroupItem>
                    <ListGroupItem key={48}>23h30</ListGroupItem>
                </ListGroup>
            </Col>
            <Col xs={9} md={11}>
            <Row>
                {days}
            </Row>
            </Col>
            </Row>
        </Panel>
    }
}
