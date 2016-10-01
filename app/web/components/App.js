
import React, {Component} from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'

export default class App extends Component{
    render() {
        if(this.props.children.type.displayName==='Connect(Map)'){
            return <div>
                <Header />
                <div style={{marginTop:'-20px'}}>{this.props.children}</div>
            </div>
        }else{
            return <div>
                <Header />
                <Grid>{this.props.children}</Grid>
            </div>
        }
    }

}
