<template>
	<div id="mainLogin">
		<div style="padding: 10px;font-size:12px;background: #e60211;color: #fff; ">温馨提示：如遇显示异常，请手动刷新页面，或退出重新登录。</div>
		<header class="header">
			<span @click="toRegister">注册</span>
		</header>
		<div class="fixed-info">
			<i class="fa fa-warning fa-lg"></i>
			<span class="info"></span>
		</div>
		<div class="loading" :class="{show:isLoadding}">
			<p>loading . . .<p/>
		</div>
		<div class="main container">
			<div class="row">
				<div class="logo"></div>
				<div class="form">
					<div  class="form-list">
						<div  class="form-img col-sm-2 col-xs-2 formTel" ></div>
						<div class="form-input col-sm-9 col-xs-9">
							<input id="id" class="input" type="text" placeholder="请输入电话号码" v-model="phone" />
						</div>
					</div>
					<div class="form-middle"></div>
					<div class="form-list password">
						<div class="form-img col-sm-2 col-xs-2 formPass"></div>
						<div class="form-input col-sm-9 col-xs-9">
							<input id="pwd" class="input" type="password" placeholder="请输入正确密码" v-model="pwd" />
						</div>
					</div>
				</div>
				<div class="isForget right">
					<div @click="toggle" id="checkbox" class="checkbox" :class="{active:checkboxCheck}"></div>
					<span>记住密码</span>
				</div>
				<button id="login" @click="login" class="btn">登录</button>
				<div class="botWarp" style="padding-top: 10px;">
					<span @click="findPwd" class="forgetpsd">忘记密码?</span>
				</div>
			</div>
		</div>
	</div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import url("../assets/css/reset.css");
	body{margin: 0;padding: 0;}
	#mainLogin{height: 100%;background: url(/static/img/bg_login.png) no-repeat center bottom;background-size: cover;}
	.header{margin-top: 20px;padding-left: 18px;position: relative;height: 40px;line-height: 40px;}
	.header img{height: 50%;margin-bottom: -7px;}
	.header span{font-size: 14px;float: right;margin-right: 18px;color: #333;}
	.fixed-info{position: fixed;top: -5rem;left: 0;width: 100%;height: 5rem;background-color: rgba(255,255,255,0.9);
		z-index: 100000;transition: all 0.5s;box-sizing: border-box;line-height: 5rem;padding: 0 2rem;border-bottom: 1px solid red;}
	.fixed-info .fa-warning{color:red;margin-right: 1rem;}
	.fixed-info .info{font-size: 1.6rem;color: #000;}
	.fixed-info.active{top: 0;}
	.loading{display: none;z-index: 10;position: fixed;top: 0;left: 0;right: 0;bottom: 0;background-color: rgba(0,0,0,0.4);}
	.loading p{z-index: 11;font-size: 1.6rem;position: fixed;line-height: 24px;width: 100px;left: 50%;top: 50%;margin-top: -12px;margin-left: -50px;color: #FFF;text-align: center;}
	.loading.show{display: block;}
	.main{margin: 15px 35px;text-align: center;}
	.logo{height: 100px;width: 100px;margin:0 auto;border-radius: 50%;-webkit-border-radius:50%;overflow: hidden;background: url(/static/img/logo.png) no-repeat center;background-size: cover;}
	.form-list{margin-bottom:50px;}
	.form-img{display: inline-block;height: 39px;margin-right: 5px;}
	.form-input{
		display: inline-block;vertical-align: middle;
		border-bottom: solid 1px #c7c6c6;
		position: relative;
	}
	.form-input input{
		border:none;
		font-size: 14px;
		color: #999999;
		line-height: 34px;
		width: 100%;
		text-indent: 10px;
		background: transparent;
	}
	.form-input input:focus{outline: none;}
	.password{clear: both;}
	.form-middle{clear: both;height: 30px;}
	.btn{margin-top: 30px;clear: both;background-color:#e60211;border-radius: 6px;width: 100%;
		height: 40px;border: none;color: #fff;font-size: 17px;}
	.botWarp{float: right;}
	.forgetpsd,.clickload{display: inline-block;font-size: 12px;margin-right: 5px;margin-top: 12px;color: #333;}
	.clickload{margin-right: 20px;}
	.isForget{height: 28px;line-height: 28px;margin-right: 7%;float: right;}
	.isForget .checkbox{width: 12px;height: 12px;display: inline-block;border: 1px solid #666;}
	.isForget .checkbox.active{background-color: #666;}
	.isForget span{color: #666;}
	.formTel{background: url(/static/img/phoneNum.png) no-repeat center;background-size: contain;}
	.formPass{background: url(/static/img/password.png) no-repeat center;background-size: contain;}
</style>

<script>
export default {
	name: 'login',
  	data () {
    	return {
      		phone : "",
      		pwd : "",
      		isLoadding : false,
      		isForget : null,
      		checkboxCheck : false
    	}
  	},
  	methods:{
  		login(){
			if(this.phone.length==0){
				this.$layer.toast("手机号码不能为空");
				return false;
			}
			if(!(this.reg.phoneReg.test(this.phone))){           //验证手机号,正则
				this.$layer.toast("手机号码有误，请重填");
				return false;
			}
			if(this.pwd.length==0){
				this.$layer.toast("密码不能为空");
				return false;
			}

			//提交用户名密码
			var url = this.site.http+'voy_cms/wx/api.json?module=wxusermodule&action=applogin&name='+this.phone+'&password='+this.pwd+'&apptoken=8888';
			this.$http.jsonp(url).then((msg)=>{
				let data = msg.body;
				console.log("登录请求：",data);
				this.logindo(data);
			},(err)=>{
				console.log("登录请求失败！",err);
			});
  		},
  		logindo(obj){
			//删除原先的cookie
			this.com.delCookie("name");
			this.com.delCookie("userToken"); 
			if(obj.ret_msg=="操作成功"){
				if(this.isForget=='true'){
					this.com.setCookie('pwd',this.pwd);
				}
				this.com.setCookie("isForget",this.isForget);						
				this.com.setCookie("name",obj.data.name);
				this.com.setCookie("token",8888);
				this.com.setCookie("userToken",obj.data.userToken);
				this.$router.push({path:"/index"});     //跳转页面
			}else{
				this.$layer.toast(obj.ret_msg);
			}
		},
  		toRegister(){
  			this.$router.push({path:'/register'});
  		},
  		findPwd(){
  			this.$router.push({path:'/findpsd'});
  		},
  		isLoading(status){
			if(status){
				this.isLoadding = true;
			}else{
				this.isLoadding = false;
			}
		},
		isHome(){
			this.isLoading(true);           //暂时取消
			if(this.com.getCookie('token')!=null&&this.com.getCookie('userToken')!=null&&this.com.getCookie('name')){
				let postData = {
					module:"wxusermodule",
					action:"applogin",
					name:this.com.getCookie('name'),
					password:this.com.getCookie('pwd'),
					apptoken:8888
				}
				this.$http.jsonp(this.site.http+"voy_cms/wx/api.json",{params:postData}).then((msg)=>{
					let data = msg.body;
					if(data.ret_msg=="操作成功"){
						//跳转页面
						if(this.isForget=='true'){
							this.com.setCookie('pwd',document.getElementById('pwd').value);
						}
						this.com.setCookie("isForget",this.isForget);						
						this.com.setCookie("name",data.data.name);
						this.com.setCookie("userToken",data.data.userToken);
						this.$router.push({path:'/index'});
					}else{
						this.isLoading(false);
						console.log(data.ret_code+" "+data.ret_msg);
					}
				},(err)=>{
					this.isLoading(false);
					console.log(err);
				});
			}else{
				this.isLoading(false);
				this.com.dialog('重新登录');
			}
		},
		init_forget(){
			if(!this.isCookie('isForget')){
				this.com.setCookie('isForget',true);
			}
			if(this.com.getCookie('isForget')=='true'){
				if(this.isCookie('name')){
					this.phone = this.com.getCookie('name');
				}else{
					this.phone='';
				}
				if(this.isCookie('pwd')){
					this.pwd = this.com.getCookie('pwd');
				}else{
					this.pwd = '';
				}
			}
			this.isForget=this.com.getCookie('isForget');

			if(this.isForget=='true'){
				this.checkboxCheck = true;
			}else{
				this.checkboxCheck = false;
			}
		},
		isCookie(name){
			if(document.cookie.indexOf(name)==-1){
				return false;
			}else{
				return true;
			}
		},
		toggle(){
			if(this.isForget=='true'){
				this.checkboxCheck = false;
				this.isForget='false';
			}else{
				this.checkboxCheck = true;
				this.isForget='true';
			}
		},
		clicklogin(){
			if(!this.isWeiXin()){
				this.$layer.toast("请在微信浏览器打开！");
			}else{	
				window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe9a08de52d2723ba&redirect_uri=http%3a%2f%2fvoy.jxyouth.org.cn%2Fvoy_cms%2Fbinder%2FbinderGet.do&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect';
		   }
		},
		isWeiXin(){ 
			let ua = window.navigator.userAgent.toLowerCase(); 
			if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
				return true;
			}else{ 
				return false; 
			}
		}
  	},
  	mounted(){
  		console.log(this);
  		
  		let screenHeight = document.documentElement.clientHeight;     //初始化body高度
		document.getElementsByTagName("body")[0].style.height = screenHeight + "px";
		
		this.isHome();
		this.init_forget();
		
//		let loading = this.$loading({   //整页加载
//        	lock: true,
////          	text: 'Loading',
////          	spinner: 'el-icon-loading',
//        	background: 'rgba(250, 250, 250, 0.7)'
//      });
//      setTimeout(() => {
//        	loading.close();
//      }, 2000);
//		
//		console.log(this.week(1));
//		
//		this.$alert('这是一段内容', '标题名称', {
//        	confirmButtonText: '确定',
//        	callback: action => {
//	            this.$message({
//	             	type: 'info',
//	              	message: `${ action }`
//	            });
//        	}
//      });

//      this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段(标题)', {
//        	dangerouslyUseHTMLString: true               //是否将 message 属性作为 HTML 片段处理
//      });
		
//		this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
//        	confirmButtonText: '确定',
//        	cancelButtonText: '取消',
//        	type: 'warning'
//      }).then(() => {
//        	this.$message({
//          	type: 'success',
//          	message: '删除成功!'
//        	});
//      }).catch(() => {
//        	this.$message({
//          	type: 'info',
//         	 	message: '已取消删除'
//        	});          
//      });
        
//		this.$prompt('请输入邮箱', '提示', {
//        	confirmButtonText: '确定',
//        	cancelButtonText: '取消',
//        	inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
//        	inputErrorMessage: '邮箱格式不正确'
//      }).then(({ value }) => {
//        	this.$message({
//          	type: 'success',
//          	message: '你的邮箱是: ' + value
//        	});
//      }).catch(() => {
//        	this.$message({
//          	type: 'info',
//          	message: '取消输入'
//        	});       
//      });   
  	}
}
</script>

