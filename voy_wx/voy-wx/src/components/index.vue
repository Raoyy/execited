<template>
	<div id="main">
		<div id="mappos" style="display: none;"></div>
		<div class="nav_box">
			<div class="item" v-for="item in itemArr">
				<a href="javascript:void(0);" @click="turnTo(item.index,item.ev);" :class="item.className">
					<div class="img" :class="item.imgClass"></div>
					<span class='name'>{{item.name}}</span>
				</a>
			</div>
		</div>
	    <div class="addrPos" v-show="addrShow">{{addrPos}}</div>
   </div>
</template>

<script>
	export default{
		name : "index",
		data(){
			return{
				itemArr:[
					{index:0,ev:"javascript:void(0);",imgClass:"nav_one",name:"青年志愿者",className:"volunteer"},
					{index:1,ev:"javascript:void(0);",imgClass:"nav_two",name:"第二课堂成绩单",className:"secIndex"},
					{index:2,ev:"http://qyc.jxyouth.org.cn/a/wxinterface/wxOAuth?appId=wx9df9b85fd44a2f94",imgClass:"nav_ten",name:"青援筹",className:""},
					{index:3,ev:"youth_edu.html",imgClass:"nav_nine",name:"青少年教育",className:""},
					{index:4,ev:"http://friend.jxyouth.org.cn/wxOAuth?appId=wxe9a08de52d2723ba&callBackUrl=index.html",imgClass:"nav_five",name:"爱的约定",className:""},
					{index:5,ev:"own_center.html",imgClass:"nav_seven",name:"个人中心",className:""}
				],
				appToken:"8888",
				userToken:this.com.getCookie("userToken"),
				addrPos:"",
				addrShow:false,
				isLoading:false,
				transitionName:'slide-left'
			}
		},
		methods:{
			turnTo(index,ev){
				switch(index){
					case 0:
						this.$router.push({path:"/volIndex"});
						break;
					case 1:
						let identy = this.com.getCookie("identy");
						if(identy&&identy=='student'){
							this.$router.push({path:"/eduIndex"});
						}else{
				        	this.$layer.toast('该账号当前身份不是学生，无法进入第二课堂！')
						}
						break;
					case 3:
						this.$router.push({path:"/youthEdu"});
						break;
					case 2:
					case 4:
						location.href = ev;
						break;
					case 5:
						this.$router.push({path:"/myCenter"});
						break;
					default: this.$layer.toast("错误的跳转请求"+index);
				}
			},
			appToken_data(){
				let postData = {
					module: 'appmodule',
					action: 'apptoken',
					appkey: '0bea7bce-9b32-4a96-911f-ce4eef778f8c',
					appsecret: 'd3e76d2f-a295-41b0-b945-8a02e4a90812'
				}
				this.$http.jsonp(this.site.http+'/voy_cms/app/V1.0/api.json',{params:postData}).then((msg)=>{
					let data = msg.body;
					if(data.ret_code==200){
						this.com.setCookie('token',data.data.token);
					}
				},(err)=>{
					console.log("设置用户token失败！",err);
				});
			},
			getUserMsg(){
				// 获取用户信息
				this.$http.jsonp(this.site.http+'/voy_cms/wx/api.json',{params:{
					apptoken : this.appToken,
	                usertoken : this.userToken,
	                module : 'wxusermodule',
	                action : 'appqueryuser',
	                name : this.com.getCookie("name"),
				}}).then((msg)=>{
					let data = msg.body;
					console.log("用户信息：",data);
	                if(data.ret_code=="200"){
	                 	if(data.data.student){
	                        this.com.setCookie('identy',"student");
	                 	}
						sessionStorage.setItem("sex",data.data.sex);
						sessionStorage.setItem("realName",data.data.realName);
						if(data.data.avatar) sessionStorage.setItem("avatar",data.data.avatar);
	                 	if(data.data.volunteer == null || data.data.volunteer == undefined || data.data.volunteer == ""){
							sessionStorage.setItem("areaName","所有地区");
						}else{
							sessionStorage.setItem("areaId",data.data.volunteer.areaId);
							sessionStorage.setItem("areaName",data.data.volunteer.areaName);
						}
					}else{
						console.log("用户信息获取失败：",data.ret_code,data.ret_msg);
					}
				},(err)=>{
					console.log("获取用户信息失败",err);
				});
			},
			getWxLoaction(){
				let _this = this;
				_this.$http.jsonp(_this.site.http+'voy_cms/baseConfig/wechat/sign.do').then((msg)=>{   //
					let data = msg.body;
					if(data){
	                 	wx.config({
				            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				            appId: data.appid, // 必填，公众号的唯一标识
				            timestamp: data.timestamp, // 必填，生成签名的时间戳
				            nonceStr: data.noncestr, // 必填，生成签名的随机串
				            signature: data.signature,// 必填，签名，见附录1
				            jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				        });
				        wx.ready(()=>{
				        	wx.checkJsApi({
							    jsApiList: [
							        'getLocation'
							    ],
							    success: (res)=>{
							    	console.log(res);
							        if (res.checkResult.getLocation == false) {
							        	_this.$layer.close();
					                    _this.$layer.toast('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！');
							            return;
							        }else{
										wx.getLocation({
										    type: 'wgs84', 
									        success: (res)=>{
		                                        var ggPoint = new BMap.Point(res.longitude,res.latitude);
		                                        var convertor = new BMap.Convertor();
										        var pointArr = [];
										        pointArr.push(ggPoint);
										        convertor.translate(pointArr, 1, 5, (data)=>{
													if(data.status === 0) {
														var geolocation = new BMap.Geolocation();
														var myGeo = new BMap.Geocoder();
														myGeo.getLocation(new BMap.Point(data.points[0].lng,data.points[0].lat), function(rs){
															var addComp = rs.addressComponents;
												        	addrNow= addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
													    	sessionStorage.setItem('lng',data.points[0].lng);
		                                                	sessionStorage.setItem('lat',data.points[0].lat);
												        	sessionStorage.setItem("addrNow", addrNow);
												        	_this.addrShow = true;
												        	_this.addrPos = addrNow;
												        	_this.closeLoading();
														});
													}else{
													    _this.closeLoading();
							                            _this.$layer.toast(data.status);
													 	console.log(data);
													}
										    	})
									        },
									        fail: (error)=>{
												_this.closeLoading();
									            _this.$layer.toast("获取地理位置失败，请确保开启GPS且允许微信获取您的地理位置！");
									        }
										}); 
							        }
							    }
							});
			            });
			            wx.error((res)=>{
						    _this.closeLoading();
					        _this.$layer.toast(res.errMsg);
			            	console.log(res);
                        });
	                }else{
						_this.closeLoading();
					    _this.$layer.toast("微信配置信息为空");
	                }
				},(err)=>{
					_this.closeLoading();
					_this.$layer.toast("获取微信配置信息失败");
				});
	        },
	        closeLoading(){
	        	this.$layer.close();
	        	this.isLoading = false;
	        }
		},
		mounted(){
			let _this = this;
			sessionStorage.removeItem("entered");    //春运移除标识，重新展示春运活动图
			
			this.appToken_data();    //设置用户token
			
		    sessionStorage.setItem('appToken',this.appToken);
		    sessionStorage.setItem('userToken',this.userToken);
		    sessionStorage.setItem('way','wechartNC');
			
			this.getUserMsg();
			
			return false;
			// 微信获取相关配置信息
			if(sessionStorage.getItem('lng')){
				_this.addrShow = true;
				_this.addrPos = sessionStorage.getItem('addrNow');
			}else{
				this.$layer.loading("微信获取定位中，请稍后~~");
				this.isLoading = true;
				this.getWxLoaction();
	            setTimeout(()=>{
	            	if(!sessionStorage.getItem('lng') && _this.isLoading){
	            		_this.closeLoading();
				        _this.$layer.toast('微信获取定位失败，请重新刷新或者检查开启定位！');
		       	    }
	            },8000);
			}
		}
	}
</script>

<style>
	@import url("../assets/css/reset.css");
	#main{background: url(/static/img/bg.png) no-repeat center;background-size: cover;width: 100%;height: 100%;}
	.nav_box:after{content: "";display: block;clear: both;}
	.nav_box{position: fixed;width: 36rem;left: 50%;top: 46%;margin-top: -14rem;margin-left: -18rem;}
	.nav_box .item{float: left;width: 12rem;height: 14rem;text-align: center;padding: 1rem 2rem;}
	.nav_box .item a{display: block;width: 100%;cursor: pointer;}
	.nav_box .item a .img{margin: 1rem 0;height: 50px;}
	.nav_box .item a .img img{width: 60%;}
	.nav_box .item .name{font-size: 1.6rem;}
	.addrPos{position: fixed;bottom: 20px;left: 0px;padding: 10px;display: none;width: 100%;}
	.nav_one{background: url(/static/img/nav_one.png) no-repeat center;background-size: contain;}
	.nav_two{background: url(/static/img/nav_two.png) no-repeat center;background-size: contain;}
	.nav_three{background: url(/static/img/nav_three.png) no-repeat center;background-size: contain;}
	.nav_four{background: url(/static/img/nav_four.png) no-repeat center;background-size: contain;}
	.nav_five{background: url(/static/img/nav_five.png) no-repeat center;background-size: contain;}
	.nav_six{background: url(/static/img/nav_six.png) no-repeat center;background-size: contain;}
    .nav_seven{background: url(/static/img/nav_seven.png) no-repeat center;background-size: contain;}
    .nav_eight{background: url(/static/img/nav_eight.png) no-repeat center;background-size: contain;}
    .nav_nine{background: url(/static/img/nav_nine.png) no-repeat center;background-size: contain;}
    .nav_ten{background: url(/static/img/nav_ten.png) no-repeat center;background-size: contain;}
</style>