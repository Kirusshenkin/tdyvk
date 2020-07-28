import {CREATE_CHARACTER_CREATOR} from '../actions/actionTypes'

const initialState = {
    character: []
}

export default function createReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CHARACTER_CREATOR:
            return {
                ...state,
                character: [...state.character, action.item]
            }
        default:
            return state
    }
}