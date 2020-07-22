import {AUTH_SUCCESS, AUTH_LOGOUT} from './actionTypes'

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData ={
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        }

        let url ='https://tdyvkback.herokuapp.com/users/register' // Регистрация

        if (isLogin) {
            // url = 'https://tdyvkback.herokuapp.com/users/auth' //логин и пароль
            url = 'http://localhost:3001/users/auth' //логин и пароль
        }

        const res = await fetch(url, authData)
        const data = await res.json()
        console.log(data)

        const expirationDate = new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000)

        localStorage.setItem('token', data.token)
        localStorage.setItem('userId', data.user_id)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.token))
        dispatch(autoLogout(60 * 60 * 24 * 7))
    }
}

export function autoLogout(time) {
    console.log('Logout', time)
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

export  function autoLogin() {
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