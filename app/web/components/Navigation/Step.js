
import React, {Component} from 'react'
import { Col, Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Step extends Component {
    render() {
        let title
        if(this.props.active)
            title = <div>
                <h3 style={{textAlign:'center',fontWeight:'bold',color:'#000'}}> {this.props.title} </h3>
                <p style={{textAlign:'center',color:'#000'}}> {this.props.description} </p>
            </div>
        else
            title = <div>
                <h3 style={{textAlign:'center'}}><a href="#">{this.props.title}</a></h3>
                <p style={{textAlign:'center'}}> {this.props.description} </p>
            </div>

        return <div>
            <Link to={this.props.link}>
            <Col xs={3} >
                {title}
            </Col>
            </Link>
        </div>
    }
}
