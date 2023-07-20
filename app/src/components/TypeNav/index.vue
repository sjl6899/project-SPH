<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件委托 | 事件代理 -->
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 商品分类列表-->
        <transition name="sort">
          <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <!-- 二级 三级 分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//引入方式：是把lodash全部功能函数引入
//import  _ from 'lodash';
//最好的引入方式：按需引入
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      //存储用户鼠标移动到哪一个位置
      currentIndex: -1,
      show:true,
    };
  },
  //组件挂载完毕：可以向服务器发送请求
  mounted() {
    //通知vuex发送请求，获取数据，存储于仓库中
    this.$store.dispatch("categoryList");
    //当组件挂载完毕，让show变为：false
    //如果不是Home路由组件 将tyoeNav 隐藏
    if(this.$route.path!='/home'){
      this.show=false
    }
    
  },
  computed: {
    //右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
    //注入一个参数state 其实即为大仓库中的数据
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    //鼠标进去修改响应式数据currentIndex index:鼠标移动上的一级分类的元素索引值
    changeIndex(index) {
      this.currentIndex=index
    },
    //加上节流;throttle回调函数别用箭头函数
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 20),
    goSearch(event) {
      //最好的解决方案 编程式导航  +  事件委派
      //利用事件委派存在一些问题：1.点击一定是a标签  2。如何获取参数【1，2，3级商品的类名】
      //怎么能确定点击的就是a标签
      //存在另一个问题：即使你能确定点击的是a标签 怎么区分 一 二 三 级

      //第一个问题：把子节点当中a标签，我加上自定义属性data-categoryName 其余子节点是没有的
      let element = event.target;
      //获取到当前出发这个事件的节点【h3，a，dt，dl】 需要带有data-categoryName这个节点【一定是a标签】
      //节点有一个属性dataset属性，可以获取节点的自定义属性与属性值
      let { categoryname, category1id, category2id, category3id } =element.dataset;
      //如果标签身上有categoryname一定是a标签
      if (categoryname) {
        //整理路由跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        //一级分类，二级分类，三级分类的a标签(自定义属性标签)
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        //整理完整参数
        location.query=query;
        //路由跳转
        this.$router.push(location);
      }
    },
    //当鼠标移入的时候，让商品分类列表展示
    enterShow(){
      if(this.$route.path!='/home'){
        this.show=true;
      }
    },
    //当鼠标移出的时候，让商品分类列表隐藏
    leaveShow(){
      this.currentIndex = -1;
      if(this.$route.path!='/home'){
        this.show=false;
      }
    }
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }

        .cur {
          background-color: skyblue;
        }
      }
    }
    //过渡动画的样式
    //过渡动画开始状态（进入）
    .sort-enter{
      height: 0px;
    }
    //过渡动画结束状态
    .sort-enter-to{
      height: 461px;
    }

    //定义动画时间 ，速率
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>>
