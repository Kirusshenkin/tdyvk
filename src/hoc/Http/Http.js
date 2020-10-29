function Http() {

    this.token = localStorage.getItem('token')
    this.BaseUrl = 'https://tdyvkback.herokuapp.com/'
    // this.BaseUrl = 'http://localhost:3001/'

    this.get = function(url, params) {
        return fetch(this.BaseUrl + url, {
            method: "GET",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
            },
        })
    }
    this.post = function(url, params) {
        return fetch(this.BaseUrl + url, {
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(params)
        })
    }
    this.del = function(url, params) {
        return fetch(this.BaseUrl + url, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(params)
        }) 
    }
}

export default new Http()