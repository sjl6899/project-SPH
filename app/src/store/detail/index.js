import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
//封装游客临时身份模块--随机生成一个字符串（不能再变)
import {getUUID} from '@/utils/uuid_token'
//detail模块的小仓库
//state:仓库存储数据的地方
const  state={
    //仓库数据初始化
    goodInfo:{},
    //游客的临时身份
    uuid_token:getUUID(),
};

const mutations= {
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo;
    }
};


const actions={
    //获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result=await reqGoodsInfo(skuId);
        if(result.code==200){
            commit('GETGOODINFO',result.data);
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //因为服务器没有返回其余数据 无需三连环存储数据
        let result=await reqAddOrUpdateShopCart(skuId,skuNum);
        //当前的这个给函数如果执行返回Promis
        if(result.code==200){
            return "OK";
        }else{
            //代表加入购物车失败
            return Promise.reject(new Error('faile'));
        }
 
        
    }
};
//计算属性，在项目中，为了简化仓库中数据而生
//可以把我们将来在 组件中需要用的数据简化一下，【将来组件在获取数据的时候就比较方便】
const getters={
    //路径导航简化的数据
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    //简化产品信息的数据 
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    //产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
};


export default{
    state,mutations,actions,getters
}