
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from '../store'

import App from './components/App'
import Intro from './components/Intro/Intro'
import Calendar from './components/Calendar/Calendar'
import Map from './components/Map/Map'

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Intro}/>
                <Route path="/calendar" component={Calendar} />
                <Route path="/map" component={Map} />
            </Route>
        </Router>
    </Provider>
, app)
