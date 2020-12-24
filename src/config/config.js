import axios from 'axios'

axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_AUTH_BEARER;
axios.defaults.baseURL = process.env.REACT_APP_API_SERVER

export default axios