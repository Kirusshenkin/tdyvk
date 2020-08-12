import Http from '../../hoc/Http/Http'
import { FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_ERROR } from './actionTypes'

export function fetchCharacters() {
    return async dispatch => {
        dispatch(fetchCharactersStart())
        try {
            await Http.get('api/characters').then((response) => { 
                response.json().then(data => {
                    dispatch(fetchCharactersSuccess(data.data))
                })
            })
        } catch(e) {
            dispatch(fetchCharactersError(e))
        }
    }
}

export function fetchCharactersStart() {
    return {
        type: FETCH_CHARACTER_START
    }
}

export function fetchCharactersSuccess(characters) {
    return {
        type: FETCH_CHARACTER_SUCCESS,
        characters
    }
}

export function fetchCharactersError(e) {
    return {
        type: FETCH_CHARACTER_ERROR,
        error: e
    }
}