<template>
	<div class="container-fluid" style="font-size: 15px!important">
		<div class="row center_img content_color ">
			<div class="col-xs-2  " style="height: 140px;" >
	
			</div>	
			<div class="col-xs-8"  style="height:140px;"> 
			   	<div class="row">
			       	<div class="center_img1">
			       		<div :style="avater" style="background-image:url(/static/img/pepinfo.png);background-position: center;background-repeat: no-repeat;background-size: cover;width: 78px; height: 78px;border-radius: 50%;"></div>
			       	</div><br />
			       	
					<div style="position: relative;">
						<img src="/static/img/camera.png" class="center_img2">
						<form name="form1" id="form1">
							<input type="file" name="file" id="fileup" @change="subImg" style="width: 18px;height: 18px;">   
						</form>
					</div>
			  	</div>
			</div>
			<div class="col-xs-2" style="height: 140px;"></div>
		</div>
		<div class="row row_common content_color">
			<div class="col-xs-6">
				<div class="pull-left" style="font-size: 15px;margin-top: -5px;">我的昵称</div>
			</div>	
			<div class="col-xs-6">
				<input type="text" id="center_name" @click="changeNickname" :style="nickName.style" :readonly="nickName.readOnly" v-model="msgObj.nickName" style="width: 100%;text-align: center;float: right;height: 100%;margin-top: -4px;" >
			</div>	
		</div>
		<div class="row row_common content_color row_cell" style="padding-top: 13px;" >
			<div class="col-xs-6">
				<span style="font-size: 15px">我的手机</span>
			</div>
			<div class="col-xs-6">
				<div class="pull-right">
					<input type="number" id="center_phone" v-model="msgObj.tel" placeholder="请输入手机号">
				</div>
			</div>
		</div>
		<div class="row row_common content_color" style="padding-top: 13px;">
			<div class="col-xs-6">
				<span style="font-size: 15px">性别</span>
			</div>	
			<div class="col-xs-6">
				<div class="pull-right">
					<select id="center_sex" v-model="msgObj.sex">
						<option value="true" selected="selected">男</option>
						<option value="false">女</option>
					</select>
				</div>
			</div>	
		</div>
		<div class="row row_common content_color" style="padding-top: 13px;">
			<div class="col-xs-6">
				<span style="font-size: 15px">生日</span>
			</div>	
			<div class="col-xs-6">
				<div class="pull-right" style="position: relative;">
					<input type="text" id="center_birth" placeholder="请输入生日" v-model="myBirth" >
					<input type="button" id="birthBtn" v-model="msgObj.birthday" style="position: absolute;left: 0px;top: 0px;z-index: 1;opacity: 0;width: 100%;height: 100%;" >
				</div>
			</div>
		</div>
		<div class="update_pwd row row_common content_color" style="padding-top: 13px;">
			<router-link to="/updatePwd">
				<span class="left">修改密码</span>
				<img class="right" src="/static/img/right.png" />
			</router-link>
		</div>
		<div class="row " style="padding-top: 10px;">
			<div class="col-xs-12 infoSubmit" @click="centerSubmit">
				<span style="font-size: 15px">提交资料</span>
			</div>
		</div>
		<div class="row" style="margin-top: 10px;">
			<div class="col-xs-12"  style="text-align: center;">
				<a href="javascript:;" @click="logout">注销</a>
			</div>	
		</div>
	</div>
</template>

<script>
	export default{
		name:"myCenter",
		data(){
			return{
				userToken:this.com.getCookie("userToken"),
				token:this.com.getCookie("token"),
				name:this.com.getCookie("name"),
				msgObj:{},
				avater:{"background-image":""},
				nickName:{
					readOnly:true,
					style:{"border":"none"}
				}
			}
		},
		methods:{
			logout(){
				this.com.delCookie("token");
				this.com.delCookie("userToken");
				this.$router.push({path:"/"});
		   	},
		   	changeNickname(){
		   		this.nickName.readOnly =  false;
			    this.nickName.style["border"] = "1px solid #f2f2f2";
		   	},
		   	centerSubmit(){
		   		let name = this.name;
			   	let center_phone=this.msgObj.tel;
			  	let center_sex=this.msgObj.sex;
	     		let center_birth=this.msgObj.birthday;
	     		let center_name=this.msgObj.nickName;
		   		if(center_name=='' || $.trim(center_name)==''){
		   			this.$layer.open({
					    content: '昵称不能为空'
					});
		   		}else if(center_phone==''||$.trim(center_phone)==''){
		   			this.$layer.open({
					    content: '手机号不能为空'
					});
		   		}else if(center_birth==''||$.trim(center_birth)==''){
		   			this.$layer.open({
					    content: '生日不能为空'
					});
			   	}else{
			   		let postData = {
		     			module : "usermodule",
		     			action : "appupdateuser",
		     			apptoken : this.token,
		     			usertoken : this.userToken,
		     			mobilephone : center_phone,
		     			sex : center_sex,
		     			birthday : center_birth,
		     			nickname : center_name
		     		}
			   		let url_submit=this.site.http+'voy_cms/app/V1.0/api.json?';
			   		this.$http.jsonp(url_submit,{params:postData}).then((msg)=>{
			   			let obj = msg.body;
			   			if(obj.ret_msg=="操作成功"){
						  	this.$layer.toast(obj.ret_msg);
						   	this.nickName.readOnly =  true;
			    			this.nickName.style["border"] = "none";
						}else{
							this.$layer.toast(obj.ret_msg);	
						}
			   		},(err)=>{
			   			console.log("修改信息失败！",err);
			   		});
			   	}
		   	},
		   	subImg(event){
	            let pictureurl = this.site.http+'voy_cms/app/V1.0/api.json?module=usermodule&action=uploadavatar&apptoken='+this.token+'&usertoken='+this.userToken;		   		
		   		let file = event.target.files[0];
		   		let formData = new FormData();
                formData.append('file', file)

	            this.$http.post(pictureurl,formData).then((msg)=>{
	            	let data = msg.body;
	            	if(data.ret_code == 200){
	            		this.avater["background-image"] = "url("+this.site.resourceUrl+data.data+")";
	            	}else{
	            		this.$layer.toast(data.ret_msg);	
	            	}
	            },(err)=>{
	            	this.$layer.toast("提交图片请求失败!");
	            	console.log("提交图片请求失败！",err);
	            });
		   	}
		},
		computed : {
            "myBirth" : function(){
            	let time = this.msgObj.birthday;
                if(time){
                	let oTime = new Date(time);
			    	let year = oTime.getFullYear();
			    	let mounth = oTime.getMonth();
			    	let day = oTime.getDate();
			        return year+"-"+mounth+"-"+day
                }
            }
       	},
		mounted(){
	    	let url=this.site.http+"voy_cms/wx/api.json?module=wxusermodule&action=appqueryuser&apptoken="+this.token+"&usertoken="+this.userToken+"&name="+this.name;
	    	this.$http.jsonp(url).then((msg)=>{    //初始化个人信息
				let data = msg.body;
				if(data.ret_code == 200){
					this.msgObj = data.data;
					this.avater["background-image"] = "url("+this.site.resourceUrl+this.msgObj.avatar+")";
				}else{
					this.$layer.toast(data.ret_msg);
				}
	    	},(err)=>{
	    		console.log("个人信息请求失败！",err);
	    	});

			let calendardatetime = new lCalendar();    //日期插件
			    calendardatetime.init({
			    'trigger': '#birthBtn',
			   	'type': 'date'
			});
		}
	}
</script>

<style scoped>
	@import url("../assets/css/reset.css");
	@import url("../assets/css/css.css");
	#form1{position: absolute;top: 8px;left: 50%;transform: translateX(-50%);opacity: 0;z-index: 9;}
	.container-fluid{background: #f2f2f2;}
	.input{font-size: 15px!important!}
	.update_pwd .left{float: left;}
	.update_pwd .right{float: right;}
	.update_pwd a{display: block;}
	.update_pwd a:after{content: "";display: block;clear: both;}
	.update_pwd img{width: 10px;}
</style>