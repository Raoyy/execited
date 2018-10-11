<template>
	<div id="content">
		<header class="header_nav">
			<a class="left" href="javascript:history.back();">
				<i class="fa fa-chevron-left"></i>
			</a>
			<span class="title">修改密码</span>
		</header>
		<div class="fixed-info">
			<i class="fa fa-warning fa-lg"></i>
			<span class="info"></span>	
		</div>		
		<div class="form">
			<div class="item">
				<label for="old_pwd">原密码</label>
				<input id="old_pwd" type="text" v-model="opwd.val" />
			</div>
			<div class="item">
				<label for="new_pwd">新密码</label>
				<input id="new_pwd" :type="pwd.type" v-model="pwd.val" />
				<div class='icon' @click="toggle('pwd')">
					<i :class="pwd.class"></i>
				</div>
			</div>
			<div class="item">
				<label for="new_pwds">确认密码</label>
				<input id="new_pwds" :type="rpwd.type" v-model="rpwd.val" />
				<div class='icon' @click="toggle('rpwd')">
					<i :class="rpwd.class"></i>
				</div>
			</div>
		</div>
		<div class="fixed_btn">
			<input type="button" value="提交" @click="sub" />
		</div>
	</div>
</template>

<script>
	export default{
		name:"updatePwd",
		data(){
			return{
				opwd:{
					val:""
				},
				pwd:{
					val:"",
					type:"password",
					class:"fa fa-eye"
				},
				rpwd:{
					val:"",
					type:"password",
					class:"fa fa-eye"
				}
			}
		},
		methods:{
			toggle(ele){
				let el = this.pwd;
				if(ele == "rpwd") el = this.rpwd;
				console.log(el.type);
				if(el.type == "password"){
					el.type = "text";
					el.class = "fa fa-eye-slash";
				}else{
					el.type = "password";
					el.class = "fa fa-eye";
				}
			},
			sub(){
				let _this = this;
				let old_pwd = _this.opwd.val;
				let new_pwd = _this.pwd.val;
				let new_pwds = _this.rpwd.val;
				if($.trim(old_pwd)!=''&&$.trim(new_pwd)!=''&&$.trim(new_pwds)!=''){
					if(new_pwd==new_pwds){
						_this.$http.jsonp(http+'/voy_cms/wx/api.json',{params:{
							module: 'wxusermodule',
							action: 'appchangepassword',
							apptoken: _this.com.getCookie('token'),
							usertoken: _this.com.getCookie('userToken'),
							oldpassword: old_pwd,
							newpassword: new_pwd
						}}).then((msg)=>{
							let data = msg.body;
							if(data.ret_code==200){
								_this.com.delCookie('token');
								_this.com.delCookie('userToken');
								_this.$router.push({path:"/"});
							}else{
								_this.$layer.toast(data.ret_msg);
							}
						},(err)=>{
							console.log(err);
						});
					}else{
						_this.$layer.toast("两次输入密码不一致");
					}
				}else{
					_this.$layer.toast("输入框不为空");
				}

			}
		}
	}
</script>

<style scoped>
	@import url("../../static/font-awesome-4.7.0/css/font-awesome.css");
	#content{font-size: 1.6rem;}
	.header_nav{position: fixed;top: 0;left: 0;width: 100%;height: 5rem;box-sizing: border-box;padding: 0 1rem;line-height: 5rem;background-color: red;z-index: 99999;text-align: center;}
	.header_nav .title{font-size: 1.8rem;color: #FFF;font-weight: 400;}
	.header_nav .left{position: absolute;height: 100%;width: 4rem;line-height: 5rem;color: #fff;left: 0;}
	.fixed-info{position: fixed;top: -5rem;left: 0;width: 100%;height: 5rem;background-color: #FFF;z-index: 100000;transition: all 0.5s;box-sizing: border-box;line-height: 5rem;padding: 0 2rem;border-bottom: 1px solid red;}
	.fixed-info .fa-warning{color:red;margin-right: 1rem;}
	.fixed-info .info{font-size: 1.6rem;color: #000;}
	.fixed-info.active{top: 0;}
	input{border: none;background-color: transparent;outline: none;padding: 0;margin: 0;display: block;width: 100%;height: 4rem;}			
	.form{padding-top: 5rem;}
	.form .item{position: relative;width: 100%;height: 4rem;line-height: 4rem;padding: 0 2rem;border-bottom: 1px solid #ddd;}
	.form .item label{position: absolute;font-size: 1.6rem;width: 8rem;}
	.form .item input{box-sizing: border-box;padding-left: 8rem;padding-right: 3rem;font-size: 1.6rem;}
	.form .item .icon{position: absolute;width: 3rem;top: 0;right: 2rem;text-align: center;}
	.fixed_btn{position: fixed;width: 100%;bottom: 0;left: 0;background-color: red;color: #FFF;height: 4rem;}		
	.fixed_btn input{font-size: 1.6rem;color: #FFF;}
</style>