<template>
	<div style="padding: 20px;border-top: 1px solid #000000;">
		<h2>test2</h2>
		<input type="button" value="changeHeight" @click="changeHeight" /><br />
		{{name}} <br />
		{{height}} <br />
		{{len}}
	</div>
</template>

<script>
	export default{
		name:"test2",
		data(){
			return{
				
			}
		},
		methods:{
			changeHeight(){
			//	this.$store.commit("changeHeight",10);
				this.$store.commit({
					type:"test1/changeHeight",
					num:10
				});
			}
		},
		computed:{
			name:_this=>_this.$store.state.test1.name,
			height:_this=>_this.$store.state.test1.height,
			
			len:_this=>_this.$store.getters['test1/getLen']
		}
	}
</script>

<style>
</style>