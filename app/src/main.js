import Vue from 'vue'
import App from './App.vue'
//三级联动组件，全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
//element-ui
import { Button, MessageBox } from 'element-ui'
//引入路由
import router from '@/router'
//引入仓库
import store from './store';
//引入swiper样式
import "swiper/css/swiper.css"

//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from '@/api'

//第一个参数：全局组件名  第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
//element-ui 另一种注册写法
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false
//引入MockServe.js---mock数据
import '@/mock/mockServe';
//引入 懒加载默认图片 凡人
import fr from '@/assets/1.jpg';
//lazy-load 懒加载
import VueLazyload from 'vue-lazyload';
//注册插件
Vue.use(VueLazyload, {
  //懒加载默认图片
  loading: fr,
})
new Vue({
  render: h => h(App),
  //全局事件总线4bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  router,
  //注册仓库,组件的实例身上都拥有$Store
  store
}).$mount('#app')
