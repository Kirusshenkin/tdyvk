import { combineReducers } from 'redux'
import authReducer from './auth'
import createReducer from './create'


export default combineReducers({
    auth: authReducer,
    create: createReducer
})