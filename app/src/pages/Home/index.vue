<template>
  <div>
    <!--三级联动组件：已经注册为全局组件，因此不需要引入-->
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="(floor) in floorList" :key="floor.id"  :list="floor"/>
    <Brand />
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    //派发action ：通过Vuex发起ajax请求，将数据存储在仓库当中
    this.$store.dispatch("getFloorList");
    //获取用户信息在首页展示
    this.$store.dispatch("getUserInfo");
  },
  computed:{
    ...mapState({
      floorList:(state) => state.home.floorList,
    })
  },watch:{

  }
};
</script>

<style>
</style>