<template>
  <div>
    <Header></Header>
    <!--书写路由组件-->
    <router-view></router-view>
        <!--在Home，Search 显示，在登录，注册不显示-->
    <Footer v-show="$route.path==='/home' || $route.path==='/search'"></Footer>
  </div>
</template>

<script>
//引入组件
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer,
  }
}
</script>

<style scope>

</style>