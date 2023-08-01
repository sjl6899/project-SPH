import {reqGoodsInfo} from '@/api'
//detail模块的小仓库
//state:仓库存储数据的地方
const  state={
    //仓库数据初始化
    goodInfo:{}
};

const mutations= {
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo;
    }
};


const actions={
    //获取产品信息的action
    async getGoodInfo({commit},skuid){
        let result=await reqGoodsInfo(skuid);
        if(result.code==200){
            commit('GETGOODINFO',result.data);
        }
    }
};
//计算属性，在项目中，为了简化仓库中数据而生
//可以把我们将来在 组件中需要用的数据简化一下，【将来组件在获取数据的时候就比较方便】
const getters={
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    }
};


export default{
    state,mutations,actions,getters
}