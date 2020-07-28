import {CREATE_CHARACTER_CREATOR} from './actionTypes'

export function NewCreateCharacter(item) {
    return {
        type: CREATE_CHARACTER_CREATOR,
        item
    }
}

export function CreateCharacter() {
    return async (getState) => {
        await fetch 
    }
}