<template>
	<div id="main">
		<header class="header">
			<span @click="toLogin" >登录</span>
		</header>
		<div class="main container">
			<div class="row">
				<div class="logo"></div>
				<div class="form" style="margin-top: -10px;">
					<div  class="form-list">
						<div  class="form-img col-sm-2 col-xs-2 formTel" ></div>
						<div class="form-input col-sm-9 col-xs-9">
							<input type="text" placeholder="请输入电话" v-model="phone" />
							<input type="button" class="registernum" :disabled="timer.able" @click="sendCode" v-model="timer.html" />
						</div>
					</div>
					<div class="form-middle" style="height: 20px!important"></div>
					<div class="form-list">
						<div  class="form-img col-sm-2 col-xs-2 vertify" ></div>
						<div class="form-input col-sm-9 col-xs-9">
							<input type="text" placeholder="请输入验证码" v-model="vertify" />
						</div>
					</div>
					<div class="form-middle" style="height: 1px !important;"></div>
					<div class="form-list password">
						<div class="form-img col-sm-2 col-xs-2 formPass"></div>
						<div class="form-input col-sm-9 col-xs-9">
							<input type="password" placeholder="请输入密码" v-model="pwd" />
						</div>
					</div>
					<div class="form-list password">
						<div class="form-img col-sm-2 col-xs-2 formPass"></div>
						<div class="form-input col-sm-9 col-xs-9">
							<input type="password" placeholder="请再次输入密码" v-model="surepwd" />
						</div>
					</div>
				</div>
				<button id="register" class="btn">注册</button>
				<span id="gotologin" @click="toLogin">已有账号&nbsp;&nbsp;去登录></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : "register",
		data(){
			return{
				phone:"",
				vertify:"",
				pwd:"",
				surepwd:"",
				timer:{
					able:false,
					html:'发送验证码',
					countdown:60
				}	
			}
		},
		methods:{
			toLogin(){
				this.$router.push({path:'/'});
			},
			sendCode(){
				if(this.timer.able) return false;
				let phone = this.phone;
		     	if(!(this.reg.phoneReg.test(phone))){
					this.$layer.toast("手机号码有误，请重填");
					return false;
			    }
				this.settime();   //开始倒计时
		     	let url = this.site.http+'voy_cms/wx/api.json?module=wxusermodule&action=appgetverifycode&mobilephone='+phone+'&verifytype=verifyCode/reg.do&apptoken=8888';
		     	this.$http.jsonp(url).then((msg)=>{
		     		let data = msg.body;
		     		if(data.ret_code == 200){
		     			console.log("短信发送成功！");
		     		}else{
		     			console.log(data.ret_code+" "+data.ret_msg);
		     		}
		     	},(err)=>{
		     		console.log("短信发送失败：",err);
		     	});
			},
			settime() {
				let _this = this;
				if (this.timer.countdown <= 0) {
					this.timer.able = false;
					this.timer.html="发送验证码"; 
					this.timer.countdown = 60;
				}else{
					this.timer.able = true;
					this.timer.html = "重新发送(" + this.timer.countdown + ")";
					console.log(this.timer.html);
					this.timer.countdown--; 
					setTimeout(function() { 
						_this.settime();
					},1000); 
				}
			},
			subRegister(){
				let phone = this.phone;
				let vertify = this.vertify;
				let pwd = rhis.pwd;
				let surepwd = this.surepwd;	

				//验证手机号,正则
				if(!(this.reg.phoneReg.test(phone))){
					this.$layer.toast("手机号码有误，请重填");
					return false;
				}
				if(pwd.length<6){
					this.$layer.toast("密码长度不够6位，请重填");
					return false;
				}
				if(pwd!=surepwd){
					this.$layer.toast("两次密码输入有误，请重填");
					return false;
				}
				
				//提交用户名密码验证码注册
				var url = move_id+'voy_cms/wx/api.json?module=wxusermodule&action=appregister&name='+phone+'&password='+pwd+'&verifycode='+vertify+'&apptoken=8888&type=normal';
				this.$http.jsonp(url).then((msg)=>{
		     		let data = msg.body;
		     		if(obj.ret_code==200){
						//跳转页面
						this.$layer.toast("注册成功");
						this.com.setCookie("name",phone);    //设置账号密码cookie
						this.com.setCookie("name",pwd);
						this.$router.push({path:'/'});
					}else{
						this.$layer.toast(data.ret_code+" "+data.ret_msg);
					}
		     	},(err)=>{
		     		console.log("注册请求失败：",err);
		     	});
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
	#main{width:100%;height: 100%;background: url(/static/img/bg_login.png) no-repeat center bottom;background-size: cover;overflow: hidden;}
	.header{margin-top: 20px;padding-left: 18px;position: relative;height: 40px;line-height: 40px;}
	.header>span{font-size: 14px;float: right;margin-right: 18px;}
	.header>img{height: 50%;margin-bottom: -7px;}
	.header>span{font-size: 14px;float: right;margin-right: 18px;color: #333;}
	.main{margin: 15px 35px;text-align: center;}
	.logo{height: 100px;width: 100px;margin: 0px auto;border-radius: 50%;-webkit-border-radius:50%;overflow: hidden;background: url(/static/img/logo.png) no-repeat center;background-size: cover;}
	.form-list{margin-bottom:50px;}
	.form-input{display: inline-block;vertical-align: middle;border-bottom: solid 1px #c7c6c6;position: relative;}
	.form-input>input:not([type=button]){border:none;font-size: 14px;color: #999999;line-height: 34px;width: 100%;text-indent: 10px;background: transparent;}
	.form-input>input:not([type=button]):focus{outline: none;}
	.form-input>input[type=button]{outline: none;border: none;}
	.password{clear: both;}
	.form-middle{clear: both;height: 30px;}
	.btn{margin-top: 50px;clear: both;background-color:#e60211;border-radius: 6px;width: 100%;height: 40px;border: none;color: #fff;font-size: 17px;}
	/*上面的样式登陆和注册是一样*/
	.registernum{background: #cccccc;font-size: 10px;border-radius: 2px;display: inline-block;position: absolute;color: white;width: 68px;line-height: 27px;height: 25px;right: 0px;top: 5px;}
	#gotologin{float: right;display: inline-block;font-size: 12px;margin-right: 5px;margin-top: 12px;color: #333;}
	.form-img{display: inline-block;vertical-align: middle;height: 39px;margin-right: 5px;}
	.formTel{background: url(/static/img/phoneNum.png) no-repeat center;background-size: contain;}
	.formPass{background: url(/static/img/password.png) no-repeat center;background-size: contain;}
	.vertify{background: url(/static/img/vertify.png) no-repeat center;background-size: contain;}
</style>