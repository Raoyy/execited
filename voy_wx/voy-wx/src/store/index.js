import Vue from 'vue'
import Vuex from 'vuex'
import myPlugin from './plugin'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		test1:moduleA,
		test2:moduleB
	},
	plugins: [myPlugin]
})
