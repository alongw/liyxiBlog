import axios from 'axios'
const axiosw = axios.create({
    baseURL: process.env.VUE_APP_Backend_BaseUrl
})
export default axiosw
