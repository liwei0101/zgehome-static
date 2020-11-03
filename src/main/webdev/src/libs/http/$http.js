import Http from './index.js';
import {getSession} from "../storage";
import {Message} from 'iview';

// 统一请求路径前缀
let base = window.$config && window.$config.host ? window.$config.host : null;

let axios = new Http(base, 15000);
axios.getInstance().defaults.headers.post['Content-Type'] = Http.ContentType.json;
/**
 * 请求拦截器
 */
axios.setRequestInterceptors(config => {
    config.headers.sessionId = sessionStorage.getItem('sessionId');
    config.headers['X-Toon-User-Agent'] = 'platform:ios,appVersion:1.1.0,toonType:200,deviceId:5F081B99-D635-46DD-B668-E06D5154F62E,platformVersion:11.4.1';
    return config;
}, err => {
    Message.error('请求超时');
    return Promise.resolve(err);
})
/**
 * 响应拦截器
 */
axios.setResponseInterceptors(response => {
    // 处理业务问题
    return  response.data;
}, err => {
    // 处理网络问题
    Message.destroy();
    Message.error(err.message);
    return Promise.reject(err);
})


export const $http = axios.getInstance();

/**
 * 新项目将废弃以下方式 如项目中未使用可删除或忽略
 */
export const getRequest = axios.getRequest;
export const postRequest = axios.postRequest;
export const postRequestUrl = axios.postRequestUrl;


