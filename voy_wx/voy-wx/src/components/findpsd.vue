<template>
	<div id="main">
		<div class="row">
		  	<div class="col-xs-12 findwrap" style="border-bottom: 1px solid #c7c6c6;">
		  		<input type="text" v-model="phone" placeholder="请输入手机号码" class="findinput" style="text-indent: 20px;background: transparent;margin-top: 84px;">
		    </div>
		   	<div class="col-xs-12 findwrap">
		  		<span class="findspan" id="findspan">找回密码</span>
		    </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				phone:""
			}
		},
		methods:{
			find(){
	            if(!(this.reg.phoneReg.test(phone.value))){
					this.$layer.toast("手机号码有误，请重填");
					return false;
				}
				function success(obj){
					if(obj.ret_msg=="操作成功"){
						//跳转页面
						this.$layer.toast("请注意查收短信");
						location.href="./login.html";
					}
					else{
						this.$layer.toast(obj.ret_msg);
					}
				}
				var url=this.site.http+'/voy_cms/wx/api.json?module=wxusermodule&action=resetpw&name='+this.phone+'&apptoken=8888';
				this.$http.jsonp(url).then((msg)=>{
					let data = msg.body;
					if(data.ret_code==200){
						this.$layer.toast("请注意查收短信");
						this.$router.push({path:'/'});
					}else{
						this.$layer.toast(data.ret_code+" "+data.ret_msg);
					}
				},(err)=>{
					console.log('找回密码请求失败',err);
				});
				
				//发送ajax请求
				console.log(url);
				ajax(url,'post',success,'');
			}
		},
		mounted(){
			var screenHeight = document.documentElement.clientHeight;     //初始化body高度
			document.getElementsByTagName("body")[0].style.height = screenHeight + "px";
		}
	}
</script>

<style scoped>
	@import url("../assets/css/reset.css");
	@import url("../assets/css/css.css");
	#main{width:100%;height: 100%;background: url(../../static/img/bg_login.png) no-repeat center bottom;background-size: cover;}
</style>