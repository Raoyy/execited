const moduleA = {
	namespaced:true,
	state: {
		name:"ryy",
		height:"178cm",
		weight:"75kg",
		arrLength:[1,2,3,4,5,6,7]
	},
	getters: {
	    getLen: state => {
	      	return state.arrLength.length
	    },
	    stateLen: state =>{
	    	return Object.keys(state).length
	    },
	    getName : (state) => (id) => {
	    	return `name is ${state.name}, id is ${id}`
	    }
	},
	mutations: {                         //处理同步事务
		changeName(state){
	  		state.name = "ryy_change"
		},
		changeHeight(state,addHeight){
			state.height = isNaN(addHeight.num)?"error" : `${178+addHeight.num}cm`
		},
		updateName(state,val){
			state.name = val;
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
}
export default moduleA