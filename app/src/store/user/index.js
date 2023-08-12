import { reqGetcode, reqUserRegister,reqUserLogin,reqUserInfo,reqLogout } from '@/api';
import { setToken,removeToken } from '@/utils/token';
//登录与注册模块仓库
const state = {
    code: "",
    token:localStorage.getItem("TOKEN"),
    userInfo:{},
};

const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state,token){
        state.token=token;
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo;
    },
    //清楚本地数据
    CLEAR(state){
        //仓库数据清楚
        state.token='';
        state.userInfo={};
        //本地存储数据清空
        removeToken();
    }
};
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        //获取验证码接口：把验证码返回，但正常情况后台把验证码发到用户手机上
        let result = await reqGetcode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        console.log(result);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error(`${result.message}`));
        }
    },
    //登录业务【token】
    async userLogin({commit},user){
        let result = await reqUserLogin(user);
        //服务器下发token 用户唯一标识符（uuid）
        //将来经常要根据token向服务器要用户信息
        if (result.code == 200) {
            //用户已经登录成功获取到token
            commit("USERLOGIN",result.data.token);
            //持久化存储token
            setToken(result.data.token);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //获取用户信息
    async getUserInfo({commit}){
        let result= await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO",result.data);
            return 'ok';
        } else {
            // return Promise.reject(new Error('faile'));
        }
    },
    //退出登录
    async userLogout({commit}){
        let result =await reqLogout();
        if(result.code==200){
            //清楚state 要通过mutation
            commit("CLEAR");
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};

const getters = {

};

export default {
    state,
    mutations,
    actions,
    getters
}