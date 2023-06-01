<template>
  <div>
    <Header></Header>
    <!--书写路由组件-->
    <router-view></router-view>
    <Footer></Footer>
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