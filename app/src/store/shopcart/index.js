import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from '@/api'
//shopcart模块的小仓库
//state:仓库存储数据的地方
const state = {
    //仓库数据初始化
    cartList: []
};

const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};


const actions = {
    //获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }
    },
    //删除购物车某一个产品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //修改购物车选择状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //删除选中的产品
    deleteAllCheckedCart({ dispatch, getters }) {
        //context：小仓库 commit：提交mutation修改state 
        //获取购物车中所有产品
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.skuId) : '';
            //将每一次返回的promise添加到数组当中
            PromiseAll.push(promise)
        });
        //只要全部p1|p2...都成功 返回结果成功 
        //如果有一个失败 返回即失败
        return Promise.all(PromiseAll);
    },
    //修改全部产品状态
    updateAllCartisChecked({ dispatch, state }, isChecked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked });
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll);
    }

};
//计算属性，在项目中，为了简化仓库中数据而生
//可以把我们将来在 组件中需要用的数据简化一下，【将来组件在获取数据的时候就比较方便】
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    },

};


export default {
    state, mutations, actions, getters
}