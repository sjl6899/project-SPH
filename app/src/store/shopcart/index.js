import {reqCartList} from '@/api'
//shopcart模块的小仓库
//state:仓库存储数据的地方
const  state={
    //仓库数据初始化

};

const mutations= {

};


const actions={
    //获取购物车列表数据
    async getCartList({commit}){
        let result=await reqCartList();
        console.log(result);
    }

};
//计算属性，在项目中，为了简化仓库中数据而生
//可以把我们将来在 组件中需要用的数据简化一下，【将来组件在获取数据的时候就比较方便】
const getters={
   
};


export default{
    state,mutations,actions,getters
}