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
    //配置路由
    routes:[
        {
            path:"/home",
            component: Home,
            meta: { show:true }
        },
        {
            path:"/register",
            component: Register,
            meta: { show:false }
        },
        {
            path:"/search/:keyWords",
            component: Search,
            meta: { show:true },
            name:"search"
        },
        {
            path:"/login",
            component: Login,
            meta: { show:false}
        },
        //重定向
        {
            path:"*",
            redirect: "/home"
        }
    ]
})