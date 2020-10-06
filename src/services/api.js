import axios from 'axios'

const api = axios.create({baseURL: 'https://productapp-api.herokuapp.com/api'})

export default api;