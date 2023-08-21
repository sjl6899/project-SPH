//引入路由组件
import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Search from '@/pages/Search'
// import Detail from '@/pages/Detail'
// import AddCartSuccess from '@/pages/AddCartSuccess'
// import ShopCart from '@/pages/ShopCart'
// import Trade from '@/pages/Trade'
// import Pay from '@/pages/Pay'
// import PaySuccess from '@/pages/PaySuccess'
// import Center from '@/pages/Center'
// //引入二级路由
// import MyOrder from '@/pages/Center/myOrder'
// import GroupOrder from '@/pages/Center/groupOrder'
/*
当打包构建应用时，JavaScript 包会变得非常大，
影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
 */
// 对外暴露路由信息
//路由懒加载
export default [
    {
        path: "/center",
        component:() => import('@/pages/Center'),
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component:() => import('@/pages/Center/myOrder'),
            },
            {
                path: 'grouporder',
                component:() => import('@/pages/Center/groupOrder'),
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: "/paysuccess",
        component:() => import('@/pages/PaySuccess'),
        meta: { show: true }
    },
    {
        path: "/pay",
        component:() => import('@/pages/Pay') ,
        meta: { show: true },
        //路由独享
        beforeEnter:(to,from,next)=>{
            //去交易页面 必须从购物车来
            if(from.path=="/trade"){
                next();
            }else{
                //其他的路由组件而来，停留在当前页面
                next(false);
            }
        }
    },
    {
        path: "/trade",
        component:() => import('@/pages/Trade') ,
        meta: { show: true },
        //路由独享
        beforeEnter:(to,from,next)=>{
            //去交易页面 必须从购物车来
            if(from.path=="/shopcart"){
                next();
            }else{
                //其他的路由组件而来，停留在当前页面
                next(false);
            }
        }
    },
    {
        path: "/shopcart",
        component:() => import('@/pages/ShopCart')  ,
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component:() => import('@/pages/AddCartSuccess') ,
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component:() => import('@/pages/Detail') ,
        meta: { show: true }
    },
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/register",
        component:() => import('@/pages/Register') ,
        meta: { show: false }
    },
    {
        path: "/search/:keyword?",
        component:() => import('@/pages/Search') ,
        meta: { show: true },
        name: "search"
    },
    {
        path: "/login",
        component:() => import('@/pages/Login') ,
        meta: { show: false }
    },
    //重定向
    {
        path: "*",
        redirect: "/home"
    }
]