//先引入mockjs模块
import Mock from 'mockjs';
//把json数据格式引入进了
import banners from './banners.json'
import floor from './floor.json'

//mock数据:第一个参数请求地址  第二个参数：请求数据
Mock.mock("/mock/banners",{code:200,data:banners});
Mock.mock("/mock/floor",{code:200,data:floor});