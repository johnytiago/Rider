import {combineReducers} from 'redux'

import todos from './todos'
import rides from './rides'
import user from './user'
import calendar from './calendar'

export default combineReducers({
    todos,
    rides,
    user,
    calendar
})
