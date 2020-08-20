import { combineReducers } from 'redux'
import authReducer from './auth'
import createReducer from './create'
import charactersReducer from './character'
import {
    professionsReducer, 
    advantagesReducer, 
    disadvantagesReducer, 
    homelandReducer, 
    organizationsReducer
} from './get'
// import {} from './organizations'

export default combineReducers({
    auth: authReducer,
    create: createReducer,
    characters: charactersReducer,
    organizations: organizationsReducer,
    professions: professionsReducer,
    advantages: advantagesReducer,
    disadvantages: disadvantagesReducer,
    homeland: homelandReducer
})