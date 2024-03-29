//对axios 进行二次封装
import axios from "axios";
//引入进度条
import nProgress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"
//在当前模块引入store
import store from '@/store'
//start：进度条开始 done：进度条结束

//1.利用axios对象的方法creat 去创建一个axios实例
//2.request 就是 axios 只不过稍微配置一下
const request = axios.create({
    //配置对象
    //基础路径 发请求的时候，路径中会出现api
    baseURL: "/api",
    //发送请求超时
    timeout: 5000
});

//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情

request.interceptors.request.use((config) => {
    //config:配置对象，对象里面有一个属性很重要，headers
    //进度条开始
    if (store.state.detail.uuid_token) {
        //请求头添加一个字段 与后端商量好
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    //需要携带token带给服务器
    if(store.state.user.token){
        config.headers.token=store.state.user.token;
    }
    nProgress.start();
    return config;
})

//响应拦截器
request.interceptors.response.use((res) => {
    //进度条结束
    nProgress.done();
    return res.data
}, (error) => {
    //响应失败的回馈函数
    return Promise.reject(new Error('false'));
})





//对外暴露
export default request;