import axios from 'axios';
import qs from 'qs'

// axios 配置
var instance = axios.create({
    headers:{
        'Content-Type': 'application/json',
    },
    timeout: 30000,
    baseURL: '',   //接口请求地址
})

//拦截重复请求
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removeRepeatUrl = (config) => {
    let comValue = config.method == 'get' ? qs.stringify(config.params) : qs.stringify(config.data);
    for(let p in pending){
        if(pending[p].u === config.url + '&' + config.method + '&' + comValue) { //当前请求在数组中存在时执行函数体
            pending[p].f();         //执行取消操作
            pending.splice(p, 1);   //把这条记录从数组中移除
        }
    }
}

let saveRepeatUrl = (config) =>{
    let comValue = config.method == 'get' ? qs.stringify(config.params) : qs.stringify(config.data);
    console.log(comValue)
    config.cancelToken = new cancelToken((c)=>{
        pending.push({ u: config.url + '&' + config.method + '&' + comValue, f: c });  // 自定义唯一标识
    });
}

// 添加请求拦截器
instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么，比如传token
    removeRepeatUrl(config);       //在一个ajax发送前执行一下取消操作
    saveRepeatUrl(config);         //保存请求地址
    return config
}, error => {
    // 对请求错误做些什么
    console.log(error) // for debug
    return Promise.reject(error);
})


// 添加响应拦截器
instance.interceptors.response.use(response => {
    removeRepeatUrl(response.config);        //执行取消操作，把已经完成的请求从pending中移除
    // 对响应数据做点什么
    const res = response.data;
    //对错误代码做处理
    return res;
}, error => {
    // 对响应错误做点什么
    console.log('err' + error)// for debug
    return Promise.reject(error);
});

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(response => {
            //对接口错误码做处理
            resolve(response.data);
        }, err => {
            reject(err);
        })
    })
}

/**
 * get 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, data = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params: data
        })
        .then(response => {
            resolve(response);
        })
        .catch(err => {
            reject(err)
        })
    })
}

/**
 * 封装所有请求
 * @param methed
 * @param url
 * @param data 
 * @param headers
 * @returns {Promise}
 */
export function request(methed,url, data = {},headers) {
    // return new Promise((resolve, reject) => {
    //     instance({
    //         method: methed || 'post',
    //         url:url,
    //         params: methed === 'get' ? data :'',
    //         data: methed !== 'get' ?  data :'',
    //         headers: headers || {'Content-Type':'application/json'},
    //     })
    //     .then(response => {
    //         //对接口错误码做处理
    //         resolve(response.data);
    //     })
    //     .catch(err => {
    //         reject(err)
    //     })
    // })
    return instance({
        method: methed || 'post',
        url:url,
        params: methed === 'get' ? data :'',
        data: methed !== 'get' ?  data :'',
        headers: headers || {'Content-Type':'application/json'},
    })
    .then(response => {
        //对接口错误码做处理
        return (response.data);
    })
    .catch(err => {
        console.log(err)
    })
}

//大神封装的，可以把接口归类的
export function createApi(urls,serviceName='',{
    apiBaseUrl,
    isFormData = false,
}={}){
    const api = {};
    Object.keys(urls).forEach(it=>{
        api[it] = (param) => {
            let nurl = urls[it];
            let requestData = param.data;
            nurl = serviceName + nurl;
            return instance({
                baseURL:apiBaseUrl,
                method:param.method,
                url:nurl,
                ...param.method.toLowerCase() == 'post'? //post请求
                {
                    data:requestData,
                    headers:{
                        'Content-Type':'application/json;charset=UTF-8',
                    }
                    
                }:{},
                ...param.method.toLowerCase() == 'get'?{ //get请求
                    data:requestData,
                }:{},
                ...isFormData?//文件上传
                {
                    transformRequest(data){
                        const formData = new FormData();
                        Object.entries(data).forEach(([key,value])=>{
                            formData.append(key,value)
                        })
                        return formData;
                    },
                    headers:{
                        'Content-Type':'application/json;charset=UTF-8',
                    }
                }:{},
                ...(typeof baseURL !== undefined)?
                {
                    baseURL:apiBaseUrl,
                }:{},
                ...param.config
            }).then(res=>{
                return res
            })
        }
    })

    return api;
}