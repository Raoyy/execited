<template>
	<div>
		<!--{{ $route.params.id }}-->
		query:{{query.id}}{{query.type}} <br />
		params:{{params.id}}{{params.type}} <br />
		props:{{id}}{{type}} <br />
		{{reverseIt}} <br />
		{{reverseIt2()}} <br />
		{{testData | reverseIt3}}
		
		<br />
		<br />
		<br />
		<br />
		vueX测试
		<test1></test1>
		<test2></test2>
	</div>
</template>

<script>
	import test1 from '@/components/test1'
	import test2 from '@/components/test2'
	export default{
		name:"actmess",
		props:["id","type"],     //只有router中设置了props：true，才能够接受参数
		data(){
			return{
				query : this.$route.query,    //只能接受query传参
				params : this.$route.params,   //能够接受动态匹配及params传参两种方式参数
				testData:"testData"
			}
		},
		filters:{
			reverseIt3(msg){
				return msg+"______filters";
			}
		},
		components:{
			test1,
			test2
		},
		methods:{
			reverseIt2(){
				return this.testData+"______methods";
			}
		},
		computed:{
			reverseIt(){
				return this.testData+"______computed";
			}
		},
		mounted(){
			console.log("query",this.query);
			console.log("params",this.params);
			setTimeout(()=>{
				this.testData = 55555;
			},3000);
		}
	}
</script>

<style scoped>
	
</style>