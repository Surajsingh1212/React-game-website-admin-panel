import axios from 'axios'

const instance = axios.create({
    baseURL:'https://mrxapi.fuelinfotech.com/api/',
})

export default instance 