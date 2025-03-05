import axios from "axios";

const http = {
    timeout: 1000 * 60 * 5, // 超时时间
    // withCredentials: true, // 允许跨域携带cookie
    baseURL: "http://localhost:3000", // 请求地址
};
const instance = axios.create(http);

// 请求拦截器
instance.interceptors.request.use(
    async config => {
        return config
    },
    async err => {
        return Promise.reject(err)
    },
)

// 响应拦截器
instance.interceptors.response.use(
    async response => {
        return response
    },
    async err => {
        return Promise.reject(err)
    },
)

// return instance;

export default instance;