//当前模块：API进行统一管理
import request from "./request";
import mockRequest from "./mockAjax"
//三级联动的文档
//http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
//发请求：axios发请求返回结果Promise对象

export const reqCategoryList=()=>request({url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',method:'get'});

//获取banner （Home 首页轮播图接口）
export const reqGetBannerList=()=>mockRequest({url:'/banner',method:'get'});