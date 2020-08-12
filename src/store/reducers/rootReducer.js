import { combineReducers } from 'redux'
import authReducer from './auth'
import createReducer from './create'
import charactersReducer from './character'


export default combineReducers({
    auth: authReducer,
    create: createReducer,
    characters: charactersReducer
})