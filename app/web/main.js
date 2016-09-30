
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'
import { Provider } from 'react-redux'

import Layout from './components/Layout'
import store from '../store'

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Intro}>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/startpoint" component={Calendar}/>
                <Route path="/maplist" component={Map}>
                <Route path="/person" component={Person}>
                <Route path="*" component={Into}/>
            </Route>
        </Router>
    </Provider>
, app)
