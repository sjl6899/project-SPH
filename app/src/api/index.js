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
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/

export const reqGetSearchInfo = (params) => request({ url: 'http://gmall-h5-api.atguigu.cn/api/list', method: 'post', data: params });

//获取产品信息的详情信息 URL:/api/item/{skuid} mehtod:get
export const reqGoodsInfo = (skuid) => request({ url: `http://gmall-h5-api.atguigu.cn/api/item/${skuid}`, method: 'get' });