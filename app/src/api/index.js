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

//获取验证码 url：/api/user/passport/sendCode/{phone} method:get
export const reqGetcode = (phone)=>request({url:`http://gmall-h5-api.atguigu.cn/api/user/passport/sendCode/${phone}`,method:'get'});

//注册 url:/api/user/passport/register method:post
export const reqUserRegister=(data)=>request({url:'http://gmall-h5-api.atguigu.cn/api/user/passport/register',data,method:'post'});

//登录 url:/api/user/passport/login 
export const reqUserLogin=(data)=>request({url:'http://gmall-h5-api.atguigu.cn/api/user/passport/login',data,method:'post'});

//获取用户信息【带着用户token向服务器要用户信息】 url：/api/user/passport/auth/getUserInfo
export const reqUserInfo=(data)=>request({url:'http://gmall-h5-api.atguigu.cn/api/user/passport/auth/getUserInfo',method:'get'});

//退出登录 url：/api/user/passport/logout
export const reqLogout=(data)=>request({url:'http://gmall-h5-api.atguigu.cn/api/user/passport/logout',method:'get'});

//获取用户地址信息 /api/user/userAddress/auth/findUserAddressList
export const reqAddressInfo=()=>request({url:'http://gmall-h5-api.atguigu.cn/api/user/userAddress/auth/findUserAddressList',method:'get'});

//获取交易页订单信息 /api/order/auth/trade
export const reqOrdeInfo=()=>request({url:'http://gmall-h5-api.atguigu.cn/api/order/auth/trade',method:'get'});

//提交订单接口 url：/api/order/auth/submitOrder?tradeNo={tradeNo} method：post
export const reqSubmitOrder=(tradeNo,data)=>request({url:`http://gmall-h5-api.atguigu.cn/api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

//根据订单编号 获取订单支付信息 url:/api/payment/weixin/createNative/{orderId} method:get
export const reqPayInfo=(orderId)=>request({url:`http://gmall-h5-api.atguigu.cn/api/payment/weixin/createNative/${orderId}`,method:'get'});

//获取支付订单状况 url:/api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus=(orderId)=>request({url:`http://gmall-h5-api.atguigu.cn/api/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

//获取个人中心数据 url:/api/order/auth/{page}/{limit}
export const reqMyOrderList=(page,limit)=>request({url:`http://gmall-h5-api.atguigu.cn/api/order/auth/${page}/${limit}`,method:'get'});