
import React, {Component} from 'react'
import { Col, Glyphicon } from 'react-bootstrap';

export default class Step extends Component {
    render() {
        let title
        if(this.props.active)
            title = <h3 style={{textAlign:'center',fontWeight:'bold'}}> {this.props.title} </h3>
        else
            title = <h3 style={{textAlign:'center'}}><a href="#">{this.props.title}</a></h3>

        return <div>
            <Col xs={3} >
                {title}
                <p style={{textAlign:'center'}}> {this.props.description} </p>
            </Col>
        </div>
    }
}
