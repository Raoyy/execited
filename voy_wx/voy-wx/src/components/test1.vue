<template>
	<div>
		<div style="padding: 20px;border: 1px solid #EBEBEB;">
			<h3>moduleA</h3>
			<mt-button size='small' plain @click="changeName">changeName</mt-button>
			<mt-button size='small' @click="changeName2">changeName2</mt-button>
			<br />
			{{name}} <br />
			{{height}} <br />
			{{len}} -- {{sLen}} <br />
			{{getterName}}
			<!--{{getLen}} -- {{stateLen}}-->
		</div>
		
		<div style="padding: 20px;border: 1px solid #ebebeb;">
			<h3>moduleB</h3>
			<mt-button size='small' plain @click="changeName_B">changeName_B</mt-button>
			<mt-button size='small' @click="changeName2_B">changeName2_B</mt-button>
			<br />
			{{name_B}} <br />
			{{height_B}} <br />
			{{len_B}} -- {{sLen_B}} <br />
			{{getterName_B}}
			<br />
			<br />
			表单：
			<input type="text"v-model="name" />
		</div>
	</div>
</template>

<script>
	export default{
		name:"test1",
		data(){
			return{
				
			}
		},
		methods:{
//			changeName(){
//				this.$store.commit("changeName");
//			}
			...mapMutations('test1',[
				'changeName',
				'changeHeight'
			]),
			changeName2(){
				this.$store.dispatch('test1/changeName2').then(()=>{
					console.log("changeCompelete");
				});
			},
			...mapMutations('test2',{
				changeName_B:'changeName',
				changeHeight_B:'changeHeight'
			}),
			changeName2_B(){
				this.$store.dispatch('test2/changeName2').then(()=>{
					console.log("changeCompelete_B");
				});
			},
		},
		computed:{
			name:{
				get(){
					return this.$store.state.test1.name
				},
				set(val){
					this.$store.commit("test1/updateName",val)
				}
			},
			...mapState('test1',[
				'height'
			]),
//			...mapGetters([
//				'getLen',
//				'stateLen'
//			]),
			...mapGetters('test1',{
				len:'getLen',
				sLen:'stateLen',
			}),
			getterName:_this=>_this.$store.getters['test1/getName'](520),
			
			...mapState('test2',{
				name_B:'name',
				height_B:'height'
			}),
			...mapGetters('test2',{
				len_B:'getLen',
				sLen_B:'stateLen',
			}),
			getterName_B:_this=>_this.$store.getters['test2/getName'](1314),
		},
		mounted(){
			console.log(this.$store);
		}
	}
</script>

<style>
</style>