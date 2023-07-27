import Vue from 'vue'
import App from './App.vue'
//三级联动组件，全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
//引入路由
import router from '@/router'
//引入仓库
import store from './store';
//引入swiper样式
import "swiper/css/swiper.css"
//第一个参数：全局组件名  第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);

Vue.config.productionTip = false
//引入MockServe.js---mock数据
import '@/mock/mockServe';

// import {reqGetSearchInfo} from '@/api'
// console.log(reqGetSearchInfo({}));

new Vue({
  render: h => h(App),
  router,
  //注册仓库,组件的实例身上都拥有$Store
  store
}).$mount('#app')
