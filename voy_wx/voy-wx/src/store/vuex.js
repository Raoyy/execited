import Vue from 'vue'
import Vuex from 'vuex'
import myPlugin from './plugin'


Vue.use(Vuex)

const state = {
	name:"ryy",
	height:"178cm",
	weight:"75kg",
	arrLength:[1,2,3,4,5,6,7]
}

const getters = {
    getLen: state => {
      	return state.arrLength.length
    },
    stateLen: state =>{
    	return Object.keys(state).length
    },
    getName : (state) => (id) => {
    	return `name is ${state.name}, id is ${id}`
    }
}

const mutations = {                         //处理同步事务
	changeName(state){
  		state.name = "ryy_change"
	},
	changeHeight(state,addHeight){
		state.height = isNaN(addHeight.num)?"error" : `${178+addHeight.num}cm`
	}
}

const actions = {                           //可用于处理异步实物，基于promise
    changeName2 ({commit}) {
    	return new Promise((resolve, reject)=>{
    		setTimeout(()=>{
	      		commit('changeName');
	      		resolve();
	      	},3000);
    	})
    }
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	plugins: [myPlugin]
})
