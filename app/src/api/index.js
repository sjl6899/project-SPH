//当前模块：API进行统一管理
import request from "./request";
import mockRequest from "./mockAjax"
//三级联动的文档
//http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
//发请求：axios发请求返回结果Promise对象

export const reqCategoryList = () => request({ url: 'http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList', method: 'get' });

//获取banner （Home 首页轮播图接口）
export const reqGetBannerList = () => mockRequest({ url: '/banner', method: 'get' });

//获取floor数据
export const reqFloorList = () => mockRequest({ url: '/floor', method: 'get' });

//获取搜索模块数据 地址：/api/list 请求方式：post 参数：需要带参数
export const reqGetSearchInfo = (params) => request({ url: 'http://gmall-h5-api.atguigu.cn/api/list', method: 'post', data: params });

//获取产品信息的详情信息 URL:/api/item/{skuId} mehtod:get
export const reqGoodsInfo = (skuId) => request({ url: `http://gmall-h5-api.atguigu.cn/api/item/${skuId}`, method: 'get' });

//将产品添加到购物车中 （获取更新某一产品的数量）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => request({ url: `http://gmall-h5-api.atguigu.cn/api/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });

//获取购物车列表数据接口 URL:/api/cart/cartList method:get
export const reqCartList=()=>request({url:'http://gmall-h5-api.atguigu.cn/api/cart/cartList',method:'get'});

//删除购物车产品的接口 URL:/api/cart/deleteCart/{skuId} method:DELETE
export const reqDeleteCartById=(skuId)=>request({url:`http://gmall-h5-api.atguigu.cn/api/cart/deleteCart/${skuId}`,method:'delete'});

//修改商品选中状态 url：/api/cart/checkCart/{skuID}/{isChecked} method:get
export const reqUpdateCheckedByid=(skuId,isChecked)=>request({url:`http://gmall-h5-api.atguigu.cn/api/cart/checkCart/${skuId}/${isChecked}`,method:'get'});
