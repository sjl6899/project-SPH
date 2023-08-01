//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
// 对外暴露路由信息
export default [
    {
        path:"/detail/:skuid",
        component:Detail,
        meta: { show:true }
    },
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
        path:"/search/:keyword?",
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