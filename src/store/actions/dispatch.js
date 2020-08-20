import Http from '../../hoc/Http/Http'
import { 
    FETCH_ORGANIZATIONS_REQUEST, FETCH_ORGANIZATIONS_ERROR, FETCH_ORGANIZATIONS_SUCCESS,
    FETCH_PROFESSIONS_REQUEST, FETCH_PROFESSIONS_ERROR, FETCH_PROFESSIONS_SUCCESS,
    FETCH_ADVANTAGES_REQUEST, FETCH_ADVANTAGES_ERROR, FETCH_ADVANTAGES_SUCCESS,
    FETCH_DISADVANTAGES_REQUEST, FETCH_DISADVANTAGES_ERROR, FETCH_DISADVANTAGES_SUCCESS,
    FETCH_HOMELAND_REQUEST, FETCH_HOMELAND_ERROR, FETCH_HOMELAND_SUCCESS
} from './actionTypes'

export function fetchOgranizations() {
    return async dispatch => {
        dispatch(fetchOgranizationsStart())
        try {
            await Http.get('api/organization').then((response) => { 
                response.json().then(data => {
                    dispatch(fetchOgranizationsSuccess(data.data))
                })
            })
        } catch(e) {
            dispatch(fetchOgranizationsError(e))
        }
    }
}

export function fetchOgranizationsStart() {
    return {
        type: FETCH_ORGANIZATIONS_REQUEST
    }
}

export function fetchOgranizationsSuccess(organizations) {
    return {
        type: FETCH_ORGANIZATIONS_SUCCESS,
        organizations
    }
}

export function fetchOgranizationsError(e) {
    return {
        type: FETCH_ORGANIZATIONS_ERROR,
        error: e
    }
}

export function fetchProfessions() {
    return async dispatch => {
        dispatch(fetchProfessionsStart())
        try {
            await Http.get('api/profession').then((response) => { 
                response.json().then(data => {
                    dispatch(fetchProfessionsSuccess(data.data))
                })
            })
        } catch(e) {
            dispatch(fetchProfessionsError(e))
        }
    }
}

export function fetchProfessionsStart() {
    return {
        type: FETCH_PROFESSIONS_REQUEST
    }
}

export function fetchProfessionsSuccess(professions) {
    return {
        type: FETCH_PROFESSIONS_SUCCESS,
        professions
    }
}

export function fetchProfessionsError(e) {
    return {
        type: FETCH_PROFESSIONS_ERROR,
        error: e
    }
}

export function fetchHomeland() {
    return async dispatch => {
        dispatch(fetchHomelandStart())
        try {
            await Http.get('api/homeland').then((response) => { 
                response.json().then(data => { 
                    dispatch(fetchHomelandSuccess(data.data))
                })
            })
        } catch(e) {
            dispatch(fetchHomelandError(e))
        }
    }
}

export function fetchHomelandStart() {
    return {
        type: FETCH_HOMELAND_REQUEST
    }
}

export function fetchHomelandSuccess(homeland) {
    return {
        type: FETCH_HOMELAND_SUCCESS,
        homeland
    }
}

export function fetchHomelandError(e) {
    return {
        type: FETCH_HOMELAND_ERROR,
        error: e
    }
}

export function fetchAdvantages() {
    return async dispatch => {
        dispatch(fetchAdvantagesStart())
        try {
            await Http.get('api/advantages').then((response) => { 
                response.json().then(data => {
                    dispatch(fetchAdvantagesSuccess(data.data))
                })
            })
        } catch(e) {
            dispatch(fetchAdvantagesError(e))
        }
    }
}

export function fetchAdvantagesStart() {
    return {
        type: FETCH_ADVANTAGES_REQUEST
    }
}

export function fetchAdvantagesSuccess(advantages) {
    return {
        type: FETCH_ADVANTAGES_SUCCESS,
        advantages
    }
}

export function fetchAdvantagesError(e) {
    return {
        type: FETCH_ADVANTAGES_ERROR,
        error: e
    }
}

export function fetchDisadvantages() {
    return async dispatch => {
        dispatch(fetchDisadvantagesStart())
        try {
            await Http.get('api/disadvantages').then((response) => { 
                response.json().then(data => { 
                    dispatch(fetchDisadvantagesSuccess(data.data))
                })
            })
        } catch(e) {
            dispatch(fetchDisadvantagesError(e))
        }
    }
}

export function fetchDisadvantagesStart() {
    return {
        type: FETCH_DISADVANTAGES_REQUEST
    }
}

export function fetchDisadvantagesSuccess(disadvantages) {
    return {
        type: FETCH_DISADVANTAGES_SUCCESS,
        disadvantages
    }
}

export function fetchDisadvantagesError(e) {
    return {
        type: FETCH_DISADVANTAGES_ERROR,
        error: e
    }
}