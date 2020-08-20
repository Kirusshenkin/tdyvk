import { FETCH_CHARACTER_REQUEST, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_ERROR } from "../actions/actionTypes"

const initialState = {
    isButtonDisabled: false,
    characters: [],
    loading: false,
    error: null
}

export default function charactersReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_CHARACTER_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state, loading: false, characters: action.characters
            }
        case FETCH_CHARACTER_ERROR:
            return {
                ...state, loading: false, characters: action.error
        }
        default:
            return state
    }
}