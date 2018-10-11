// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//import store from '@/store/vuex'   //vuex
import store from '@/store/index'   //vuex-module模式
import { mapState, mapGetters, mapMutations } from 'vuex'
window.mapState = mapState
window.mapGetters = mapGetters
window.mapMutations = mapMutations

import 'mint-ui/lib/style.css'

import MintUI from 'mint-ui'   //全局引入
Vue.use(MintUI)

//import {Toast } from 'mint-ui'
//
//Vue.prototype.Toast = Toast
////Vue.use(MessageBox)

import App from './App'
import router from './router'
import VueResource from 'vue-resource'


import "./assets/js/jquery-1.11.3.min.js"

import com from "@/assets/js/comm"
import myConfig from "@/lib/config/config"
import "./assets/css/common.css"

import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'

import "../static/js/calendar.min.js"
import "../static/css/calendar.css"

import * as filters from './assets/js/filters.js'  //使用该种方式接收时，filters.js需要直接export{}，export default{}会报错

import components from './assets/js/components.js'  

Object.keys(filters).forEach(key => {    //全局注册过滤器
  Vue.filter(key, filters[key])  
});

Object.keys(components).forEach(key => {   //全局注册组件
  Vue.component(key, components[key])  
});

Vue.use(VueResource);

Object.keys(com).forEach(key=>{    //将公用方法绑定在vue下
	Vue.prototype[key] = com[key];
});

Vue.prototype.com = com;

Vue.use(layer);
Vue.use(myConfig);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
