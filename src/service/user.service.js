import http from '@/utils/http'

export function getUserInfo(){
    return http({
        url:'/userInfo/get',
        method:'get'
    })
}