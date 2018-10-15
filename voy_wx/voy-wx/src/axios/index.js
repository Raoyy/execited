import axios from 'axios'
import qs from 'qs'
import { MessageBox, Toast } from 'mint-ui'

axios.defaults.baseURL = 'api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;';

const get = (url,data,success) =>{
	axios.get(url, data)
  	.then(function (response) {
    	success(response);
  	})
  	.catch(function (error) {
    	MessageBox.alert('请求错误').then(action => {
			console.log(error);
		});
  	});
}

const post = (url,data,success) =>{
	axios.post(url,qs.stringify(data))
  	.then(function (response) {
    	success(response);
  	})
  	.catch(function (error) {	
		Toast({
		  	message: '请求失败',
		  	position: 'center',
		  	duration: 2000,
		});
		console.log(error);
  	});
}

// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("config",config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log("response",response);
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default {
	get,
	post,
	
}
