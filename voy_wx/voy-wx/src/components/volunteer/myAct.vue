<template>
	<div id="main">
		<vol-head :activeIndex="2"></vol-head>
		<div id="contain">
			
		</div>
	</div>
</template>

<script>
	export default{
		name:"actshow",
		data(){
			return{
				sprShow:true,
			}
		},
		methods:{
			sprClose(){
				this.sprShow=false;
				sessionStorage.setItem("entered","true");
			},
			toPage(){
				sessionStorage.setItem("entered","true");
				window.location.href = "${site.resourcePath}youth_wx/spr_turn.html?v=${site.version}";
			}
		},
		mounted(){
			var entered = sessionStorage.getItem("entered");   //活动相关
			if(entered == null){
			//	this.sprShow:true;        //活动过期，更改为不展示
				sessionStorage.setItem("entered",true);
			}
		}
	}
</script>

<style scoped>
	.selected{color: red !important;}
	#contain{
		width: 100%;
		height: 1400px;
		background: #ebebeb;
	}
</style>