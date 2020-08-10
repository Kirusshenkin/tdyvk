import {CREATE_CHARACTER_CREATOR} from './actionTypes'
import Http from '../../hoc/Http/Http'

export function NewCreateCharacter(item) {
    return {
        type: CREATE_CHARACTER_CREATOR,
        item
    }
}

export function CreateCharacter() {
    return async (getState) => {
        await Http.post('api/characters', getState())
    }
}