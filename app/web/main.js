import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from '../store'

import App from './components/App'
import Intro from './components/Intro/Intro'
import Calendar from './components/Calendar/Calendar'

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Intro}/>
                <Route path="/calendar" component={Calendar} />
            </Route>
        </Router>
    </Provider>
, app)
