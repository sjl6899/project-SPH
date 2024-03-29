import {reqGetSearchInfo} from '@/api'
//search模块的小仓库
//state:仓库存储数据的地方
const  state={
    //仓库数据初始化
    searchList:{},
};

const mutations= {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};

const actions={
    async getSearchList({commit},params){
        //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        //params形参：是当前用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result= await reqGetSearchInfo(params);
        if(result.code==200){
            commit("GETSEARCHLIST",result.data);
        }
    }
};
//计算属性，在项目中，为了简化仓库中数据而生
//可以把我们将来在 组件中需要用的数据简化一下，【将来组件在获取数据的时候就比较方便】
const getters={
    //当前形成state 为当前仓库中的state 并非大仓库中的state
    goodsList(state){
        //假如网络不给力没有网 staet.searchList.goodsList应该返回的是undefined 要给个空数组
        //计算新的属性的属性值至少给个空数组
       return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    },
    attrsList(state){
        return state.searchList.attrsList;
    }
};


export default{
    state,mutations,actions,getters
}