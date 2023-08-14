//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
import store from '@/store'
//使用组件
Vue.use(VueRouter);

//先把VueRouter原型对象的push 先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写 push | replace
//第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
//第二个参数是成功的回调
//第三个参数是失败的回调 
//call || apply 区别
//相同点，都可以调用函数一次，都可以篡改函数的上下文
//不同点：call与apply传递参数，用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {

        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

let router = new VueRouter({
    //配置路由
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { y: 0 }
    }
});

//全局守卫：前置守卫（在路由跳转之前进行判断）
router.beforeEach(async (to, from, next) => {
    //to：可以获取到你要跳转哪个路由信息
    //from：可以获取到你从哪个路由而来的信息
    //next：放行函数 next()放行 next('/login') 放行到指定路由 next(false):中断当前的导航
    let name = store.state.user.userInfo.name;
    let token = store.state.user.token;
    //用户已经登录
    if (token) {
        //不允许去login
        if (to.path == '/login') {
            next('/home')
        } else {
            //登录 但不是去login
            //如果用户名已有
            if (name) {
                next();
            } else {
                //没有用户信息，派发action 让仓库存储用户信息再跳转
                try {
                    await store.dispatch('getUserInfo');//获取用户信息成功
                    next();//放行
                } catch (error) {
                    //token失效了 获取不到用户信息
                    //清楚token
                    await store.dispatch('userLogout')
                    next('/login');
                }
            }
        }
    } else {
        //未登录 暂时没有处理完毕 先这个样子后期再处理
        next();
    }
})


export default router;