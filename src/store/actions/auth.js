import {AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR} from './actionTypes'
import Http from '../../hoc/Http/Http'

export function auth(email, password) {
    return async dispatch => {
        return new  Promise(async(resolve, reject) => {
            const res = await Http.post('users/auth', {email: email, password: password})
            const data = await res.json()
            if(data.response) { 
                const expirationDate = new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000)
                localStorage.setItem('token', data.token)
                localStorage.setItem('userId', data.user_id)
                localStorage.setItem('expirationDate', expirationDate)

                dispatch(authSuccess(data.token))
                dispatch(autoLogout(60 * 60 * 24 * 7))
                resolve()
            } else {
                dispatch(authError('не правильный логин или пароль'))
                reject("Неверный логин или пароль")
            }
        })
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        error: error
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                // dispatch(autoLogout((expirationDate.getTime() - new Date().getTime())))
            }
        }
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}