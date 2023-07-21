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
//先把VueRouter原型对象的push 先保存一份
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;

//重写 push | replace
//第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
//第二个参数是成功的回调
//第三个参数是失败的回调 
//call || apply 区别
//相同点，都可以调用函数一次，都可以篡改函数的上下文
//不同点：call与apply传递参数，用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
       
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

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