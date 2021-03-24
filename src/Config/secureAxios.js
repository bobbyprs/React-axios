import axios from 'axios';


const secureAxios=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})
secureAxios.interceptors.request.use(config => {
    config.headers['authorization'] ='token'
    return config
})
secureAxios.interceptors.response.use(response =>{
    console.log('server call is success')
    return response
},error =>{
    console.log('server error!!')
    return 'errored'
})
export default secureAxios