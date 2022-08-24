import axios from "axios";
import Message from "./message";
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10 * 1000
})
console.log(process.env.REACT_APP_BASE_URL);
service.interceptors.request.use((config) => {
    config.headers['token'] = '123456789'
    if (config.data === undefined) {
        config.data = {}
    }
    return config
}, error => {
    Message('error', error)
    return Promise.reject(error)
})
service.interceptors.response.use((res) => {
    if (res.status === 200) {
        if (res.data.code === 200) {
            return res.data
        } else if (res.data.code === 500) {
            Message('error', res.data.msg)
        }
    }
}, error => {
    Message('error', error)
    return Promise.reject(error)
})

export default service