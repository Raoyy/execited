const moduleB = {
	namespaced:true,
	state: {
		name:"ryy_moduleB",
		height:"178cm_moduleB",
		weight:"75kg_moduleB",
		arrLength:[1,2,3,4,5,6,7,8,9]
	},
	getters: {
	    getLen: state => {
	      	return state.arrLength.length
	    },
	    stateLen: state =>{
	    	return Object.keys(state).length
	    },
	    getName : (state) => (id) => {
	    	return `name_moduleB is ${state.name}, id_moduleB is ${id}`
	    }
	},
	mutations: {                         //处理同步事务
		changeName(state){
	  		state.name = "ryy_change_moduleB"
		},
		changeHeight(state,addHeight){
			state.height = isNaN(addHeight.num)?"error" : `${178+addHeight.num}cm`
		}
	},
	actions: {                           //可用于处理异步实物，基于promise
	    changeName2 ({commit}) {
	    	return new Promise((resolve, reject)=>{
	    		setTimeout(()=>{
		      		commit('changeName');
		      		resolve();
		      	},3000);
	    	})
	    }
	},
	plugins : store => {
	  	// 当 store 初始化后调用
	  	store.subscribe((mutation, state) => {
	  		console.log(console.log("moduleB"));
	    	// 每次 mutation 之后调用
	    	// mutation 的格式为 { type, payload }
	  	})
	}
}
export default moduleB