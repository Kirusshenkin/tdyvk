export function register(email, username, password) {
    return async dispatch => {
        const regData = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, username: username, password: password})
        }
        let url ='https://tdyvkback.herokuapp.com/users/register' // Регистрация

        const res = await fetch(url, regData)
        const data = await res.json()

        if (data.response) {
            alert('Успех!')
        }
        console.log(res)

    }
}