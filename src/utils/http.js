import axios from 'axios'
import {Message} from 'element-ui'

const instance = axios.create({
    timeout:10000
})
instance.interceptors.request.use(config=>{
    return config
})
instance.interceptors.response.use(config=>{
    return config
})

export default instance