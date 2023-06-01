//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用组件
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
export default new VueRouter({
    routes:[
        {
            path:"/home",
            component: Home
        },
        {
            path:"/register",
            component: Register
        },
        {
            path:"/search",
            component: Search
        },
        {
            path:"/login",
            component: Login
        },
        //重定向
        {
            path:"*",
            redirect: "/home"
        }
    ]
})