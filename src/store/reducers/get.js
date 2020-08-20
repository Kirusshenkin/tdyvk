import {
    FETCH_ORGANIZATIONS_REQUEST, FETCH_ORGANIZATIONS_ERROR, FETCH_ORGANIZATIONS_SUCCESS,
    FETCH_PROFESSIONS_REQUEST, FETCH_PROFESSIONS_ERROR, FETCH_PROFESSIONS_SUCCESS,
    FETCH_ADVANTAGES_REQUEST, FETCH_ADVANTAGES_ERROR, FETCH_ADVANTAGES_SUCCESS,
    FETCH_DISADVANTAGES_REQUEST, FETCH_DISADVANTAGES_ERROR, FETCH_DISADVANTAGES_SUCCESS,
    FETCH_HOMELAND_REQUEST, FETCH_HOMELAND_ERROR, FETCH_HOMELAND_SUCCESS
 } from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: null,
    professions: [],
    advantages: [],
    disadvantages: [],
    homeland: [],
    organizations: []
}

export function organizationsReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_ORGANIZATIONS_REQUEST: 
            return {
                ...state, loading: true
            }
        case FETCH_ORGANIZATIONS_SUCCESS:
            return {
                ...state, loading: false, organizations: action.organizations
            }
        case FETCH_ORGANIZATIONS_ERROR:
            return {
                ...state, loading: false, organizations: action.error
            }
        default:
            return state
    
    }
}

export function professionsReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_PROFESSIONS_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_PROFESSIONS_SUCCESS:
            return {
                ...state, loading: false, professions: action.professions
            }
        case FETCH_PROFESSIONS_ERROR:
            return {
                ...state, loading: false, professions: action.error
            }
        default:
            return state
    }
}

export function advantagesReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_ADVANTAGES_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_ADVANTAGES_SUCCESS:
            return {
                ...state, loading: false, advantages: action.advantages
            }
        case FETCH_ADVANTAGES_ERROR:
            return {
                ...state, loading: false, advantages: action.error
            }
        default:
            return state
    }
}

export function disadvantagesReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_DISADVANTAGES_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_DISADVANTAGES_SUCCESS:
            return {
                ...state, loading: false, disadvantages: action.disadvantages
            }
        case FETCH_DISADVANTAGES_ERROR:
            return {
                ...state, loading: false, disadvantages: action.error
            }
        default:
            return state
    }
}

export function homelandReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_HOMELAND_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_HOMELAND_SUCCESS:
            return {
                ...state, loading: false, homeland: action.homeland
            }
        case FETCH_HOMELAND_ERROR:
            return {
                ...state, loading: false, homeland: action.error
            }
        default:
            return state
    }
}