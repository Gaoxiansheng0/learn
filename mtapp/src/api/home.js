import request from '@/utils/request'
// 传data
export function getCategroy(data){
    return request({
        url:'/get_type',
        data    //传data    在es6中 当属性值和属性名同名时可以简写 
    })
}
export function getStore(data){
    return request({
        url:'/get_store',
        data    //传data    在es6中 当属性值和属性名同名时可以简写 
    })
}