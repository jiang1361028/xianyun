import {Message } from 'element-ui'

// 错误拦截器
export default function({$axios,redirect}){
    $axios.onError(err=>{
        const {statusCode,message}=err.response.data
        if(statusCode === 400){
            Message.warning({message})
        }
    })
}