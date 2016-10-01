
import React, {Component} from 'react'
import { Grid } from 'react-bootstrap'

import Header from './Header'

export default class App extends Component{

    render() {
        return <div>
            <Header />
            <Grid>{this.props.children}</Grid>
      </div>
    }

}
