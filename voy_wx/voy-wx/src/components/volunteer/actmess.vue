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
		
		<div id="ttt" style="margin-top: 20px;border: 1px solid #EBEBEB;">
			<input type="radio" name="test" value="1" v-model="t" />
			<input type="radio" name="test" value="2" v-model="t" />
			<input type="radio" name="test" value="3" v-model="t" />
			<input type="radio" name="test" value="4" v-model="t" />
		</div>
		<input type="button" value="add" @click="add" />
		<ul>
			<li v-for="item in obj" :key="k">{{item.name}}-{{item.height}}-{{item.weight}}</li>
		</ul>
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
				testData:"testData",
				t:1,
				arr:[1,2,3,4,5,6,7],
				obj:[
					{
						name:"ryy",
						height:"178cm",
						weight:"74kg"
					},
					{
						name:"ryy2",
						height:"178cm2",
						weight:"74kg2"
					},
					{
						name:"ryy3",
						height:"178cm3",
						weight:"74kg3"
					}
				]
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
			add(){
				let ob = {
					name:"ryy4",
					height:"178cm4",
					weight:"74kg4"
				}
				this.obj[0].name = "ryy23333"
				this.obj.push(ob);
			},
			reverseIt2(){
				return this.testData+"______methods";
			}
		},
		computed:{
			reverseIt(){
				return this.testData+"______computed";
			}
		},
		watch:{
			t(v){
				console.log(v);
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
	#ttt input{width: 10px;height: 10px;appearance:initial}
</style>