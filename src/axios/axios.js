import axios from 'axios'

export default axios.create({
    baseURL: 'https://tduvk.herokuapp.com/',
    responseType: 'json'
})