<template>
  <div>
    <Header></Header>
    <!--书写路由组件-->
    <router-view></router-view>
    <!--在Home，Search 显示，在登录，注册不显示-->
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
//引入组件
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //派发一个action || 获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style scope>
</style>