/*
 * @Author: windyGu
 * @Date: 2022-03-05 00:24:06
 * @LastEditors: windyGu
 * @LastEditTime: 2022-03-05 00:28:21
 * @FilePath: \nb_blog\web-client\src\api\requests.js
 * @Description: 
 */


import httpRequest from './index'


// test for  method get
export const testGet = () => httpRequest({
    type: 'get',
    url: '/user/test/',
})


