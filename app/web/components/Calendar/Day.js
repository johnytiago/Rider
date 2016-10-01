import React, {Component} from 'react'
import { Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import Event from './Event'

export default class Schedule extends Component {
    componentDidMount(){
        document.getElementById('schedule').scrollTop = 327
    }
    render() {

        let hours = [
            '00:00','00:30','01:00','01:30','02:00','02:30','03:00','03:30','04:00','04:30','05:00',
            '05:30','06:00','06:30','07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30',
            '11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00',
            '16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30',
            '22:00','22:30','23:00','23:30'
        ]

        let last_acronym = null
        let last = 0;
        let events = this.props.events
        let blocks = []
        for(let i=0; i<hours.length; i++){
            if(events[last].end === hours[i]){
                last_acronym = null
                if(last<events.length-1)
                    last++
            }
            if(events[last].start === hours[i]){
                blocks.push(<Event add={this.props.add} remove={this.props.remove} date={this.props.date+' '+hours[i]} first={true} key={i} title={events[last].acronym} />)
                last_acronym = events[last].acronym
            }

            if(last_acronym){
                blocks.push(<Event add={this.props.add} remove={this.props.remove} date={this.props.date+' '+hours[i]} key={i} title={events[last].acronym} />)
                last_acronym = events[last].acronym
            }
            else
                blocks.push(<Event add={this.props.add} remove={this.props.remove} date={this.props.date+' '+hours[i]} key={i} />)
        }

        return <div>
                <Col xs={3}>
                    <ListGroup fill>
                        { blocks }
                    </ListGroup>
                </Col>
                </div>
    }
}
