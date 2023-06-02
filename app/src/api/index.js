//当前模块：API进行统一管理
import request from "./request";

//三级联动的文档
//http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
//发请求：axios发请求返回结果Promise对象

export const reqCategoryList=()=>request({url:'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList',method:'get'});
