<template>
	<div id="main">
		<div class="topMsg">
			<img class="mainpic" src="../assets/img/join/top.png"/>
			<div class="joinpic" >加入我们</div>
		</div>
		<div class="avantage">
			<h3 class="title title_5050">加盟优势</h3>
			<ul>
				<li>
					<img src="../assets/img/join/advantage/1.png" style="position: relative;top: -1px;"/>
					<p>市场趋势</p>
				</li>
				<li>
					<img src="../assets/img/join/advantage/2.png" style="position: relative;top: -8px;" />
					<p>市场潜力</p>
				</li>
				<li>
					<img src="../assets/img/join/advantage/3.png" style="position: relative;top: 10px;" />
					<p>政府支持</p>
				</li>
				<li>
					<img src="../assets/img/join/advantage/4.png" style="position: relative;top: 4px;" />
					<p>资源优势</p>
				</li>
				<div class="clear"></div>
			</ul>
		</div>
		<img src="../assets/img/join/line.png" />
		<div class="condition">
			<h3 class="title title_7050">加盟条件</h3>
			<div class="content">
				<img src="../assets/img/join/condition.png"/>
				<ul>
					<li>
						<p>1、合作意愿</p>
						<p>充分认同 "小尼寻师" 的理念、定位和愿景，看好在线教育平台的发展前景，对在线教育平台的开发和创新抱有极大的热情</p>
						<div class="clear"></div>
					</li>
					<li>
						<p>2、公司要求</p>
						<p>具有较强的互联网战略意识、品牌意识、服务意识和创新精神</p>
						<div class="clear"></div>
					</li>
					<li>
						<p>3、公司信誉</p>
						<p>拥有良好的商业信誉和商业道德，无不良记录</p>
						<div class="clear"></div>
					</li>
					<li>
						<p>4、业务能力</p>
						<p>具有较强的责任心和市场拓展能力（有教育行业背景或平台运营经验者优先）</p>
						<div class="clear"></div>
					</li>
					<li>
						<p>5、服务能力</p>
						<p>对所在城市的综合情况应有一定掌握，且拥有一定的资源调动优势</p>
						<div class="clear"></div>
					</li>
				</ul>
				<img style="float: right;" src="../assets/img/join/condition.png"/>
				<div class="clear"></div>
			</div>
		</div>
		<div class="flow">
			<h3 class="title title_7050">加盟流程</h3>
			<ul>
				<li>
					<div>
						<div :style="imgList[0]"></div>
						<p>咨询我们</p>
					</div>
					<div></div>
					<div class="clear"></div>
				</li>
				<li>
					<div>
						<div :style="imgList[1]"></div>
						<p>提起申请</p>
					</div>
					<div></div>
					<div class="clear"></div>
				</li>
				<li>
					<div>
						<div :style="imgList[2]"></div>
						<p>资质审核</p>
					</div>
					<div></div>
					<div class="clear"></div>
				</li>
				<li>
					<div>
						<div :style="imgList[3]"></div>
						<p>洽谈合作</p>
					</div>
					<div></div>
					<div class="clear"></div>
				</li>
				<li>
					<div>
						<div :style="imgList[4]"></div>
						<p>签约注册</p>
					</div>
					<div></div>
					<div class="clear"></div>
				</li>
				<li>
					<div>
						<div :style="imgList[5]"></div>
						<p>提供物料</p>
					</div>
					<div></div>
					<div class="clear"></div>
				</li>
				<li>
					<div>
						<div :style="imgList[6]"></div>
						<p>开通运营</p>
					</div>
					<div></div>
					<div class="clear"></div>
				</li>
				<div class="clear"></div>
			</ul>
		</div>
		<img src="../assets/img/join/line.png"/>
		<div class="tSupport">
			<h3 class="title title_7050">技术支持</h3>
			<div style="text-align: center;margin: -24px 0 20px;"><img src="../assets/img/join/zg_logo.png"/></div>
			<p>公司拥有专业的软硬件产品设计和开发团队，始终专注于研发具有自主核心技术和知识产权的软件产品</p>
			<p>是一家集研发、制造、销售和售后服务于一体的高新技术企业</p>
		</div>
		<div class="bSupport">
			<h3 class="title title_5050">品牌支持</h3>
			<ul>
				<li>
					<p class="logo"></p>
					<p class="name">成都壹柒互动科技有限公司</p>
					<p class="desc">壹柒互动立足于西南地区，基于网易云技术平台，专注于为客户提供信息化产业订制研发和运行，为传统企业的信息化专心注入新技术</p>
				</li>
				<li>
					<p class="logo"></p>
					<p class="name">成都壹柒互动科技有限公司</p>
					<p class="desc">壹柒互动立足于西南地区，基于网易云技术平台，专注于为客户提供信息化产业订制研发和运行，为传统企业的信息化专心注入新技术</p>
				</li>
				<li>
					<p class="logo"></p>
					<p class="name">成都壹柒互动科技有限公司</p>
					<p class="desc">壹柒互动立足于西南地区，基于网易云技术平台，专注于为客户提供信息化产业订制研发和运行，为传统企业的信息化专心注入新技术</p>
				</li>
				<li>
					<p class="logo"></p>
					<p class="name">成都壹柒互动科技有限公司</p>
					<p class="desc">壹柒互动立足于西南地区，基于网易云技术平台，专注于为客户提供信息化产业订制研发和运行，为传统企业的信息化专心注入新技术</p>
				</li>
				<div class="clear"></div>
			</ul>
		</div>
		<div class="partner">
			<h3 class="title title_7000">战略合作伙伴</h3>
			<ul>
				<li>
					<div class="left">
						<img src="../assets/img/join/support/partener1.png" style="padding-top: 5px;"/>
					</div>
					<div class="middle">
						<h5>四川火炎众智网络科技有限公司</h5>
						<p>我们是一家拥有7年经营虚拟主机业务的国内IDC公司。主要经营美国虚拟主机及虚拟化产品。目前拥有有效用户20000余名，服务期内虚拟主机33000余台，是目前拥有最多美国虚拟主机用户的国内IDC服务商。拥有成熟的售前售后及推广团队。</p>
					</div>
					<div class="right">
						<p class="connect">联系方式</p>
						<p>电话：(028)84349921 84330920</p>
						<p>邮箱：service@fireinter.com</p>
						<a href="###">官方网站</a>
					</div>
					<div class="clear"></div>
				</li>
				<li>
					<div class="left">
						<img src="../assets/img/join/support/partener1.png" style="padding-top: 5px;"/>
					</div>
					<div class="middle">
						<h5>四川火炎众智网络科技有限公司</h5>
						<p>我们是一家拥有7年经营虚拟主机业务的国内IDC公司。主要经营美国虚拟主机及虚拟化产品。目前拥有有效用户20000余名，服务期内虚拟主机33000余台，是目前拥有最多美国虚拟主机用户的国内IDC服务商。拥有成熟的售前售后及推广团队。</p>
					</div>
					<div class="right">
						<p class="connect">联系方式</p>
						<p>电话：(028)84349921 84330920</p>
						<p>邮箱：service@fireinter.com</p>
						<a href="###">官方网站</a>
					</div>
					<div class="clear"></div>
				</li>
			</ul>
		</div>
		<div style="width: 100%;border-bottom: 1px solid #ebebeb;"></div>
		<div id="joinUs" style="display: none;">
			<div class="warp">
				<h5>
					<div>代理商加盟</div>
					<img src="../assets/img/join/close.png" id="close"/>
				</h5>
				<form id="joinForm">
					<p>
						<label style="letter-spacing: 5px;">联系人：</label>
						<input style="position: relative;left: -4px;" type="text" name="name" v-model="name" />
					</p>
					<p>
						<label>联系方式：</label>
						<input type="text" name="tel" v-model="tel" />
					</p>
					<p>
						<label>公司职务：</label>
						<input type="text" name="position" v-model="oposition" />
					</p>
					<p>
						<label>联系地址：</label>
						<input type="text" name="address" style="width: 340px;" v-model="address" />
					</p>
					<p style="border-bottom: 1px solid #ebebeb;">
						<label style="position: relative;top: -140px;">申请内容：</label>
						<textarea name="text" maxlength="512" style="resize: none;width: 340px;height: 160px;" v-model="otext"></textarea>
					</p>
					<input type="button" id="sub" @click="formSub" value="提交"/>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:"join",
	data(){
		return {
			numTest : /^[0-9-]+$/,
			name : "",
			tel : "",
			oposition : "",
			address : "",
			otext : "",
			postData : {
				name : this.name,
				tel : this.tel,
				position : this.oposition,
				address : this.address,
				text : this.otext
			},
			imgList:[
				{backgroundImage: 'url('+require('../assets/img/join/flow/1.png')+')'},
				{backgroundImage: 'url('+require('../assets/img/join/flow/2.png')+')'},
				{backgroundImage: 'url('+require('../assets/img/join/flow/3.png')+')'},
				{backgroundImage: 'url('+require('../assets/img/join/flow/4.png')+')'},
				{backgroundImage: 'url('+require('../assets/img/join/flow/5.png')+')'},
				{backgroundImage: 'url('+require('../assets/img/join/flow/6.png')+')'},
				{backgroundImage: 'url('+require('../assets/img/join/flow/7.png')+')'}
			]
		}
	},
	mounted(){
		$("body").click(function(e){
			if(e.target.id == "joinUs" || e.target.id == "close"){
				$("#joinUs").hide(500);
			}
			if(e.target.className == "joinpic"){
				$("#joinUs").show(500);
			}
		});
	},
	methods:{
		formSub(){
			var _this = this;
			if(!_this.name){
				alert("联系人不能为空！");
			}else if(!_this.numTest.test(_this.tel)){
				alert("联系方式不符合规范！");
			}else{
				var suchtml = '<div style="padding-bottom: 100px;">'
								+'<img class="passpic" src="../assets/img/join/pass.png"/>'
								+'<p class="passmsg">您的资料已提交成功，稍后会安排工作人员与您联系！</p>'
								+'<p class="passmsg">请耐心等待，谢谢！</p>'
							+'</div>';
				_this.$http.jsonp(postUrl+"ptJoin/save.do", {params : this.postData}).then(function(data){
					data = data.body;
				    if(data.ret_code == 200){
						$("#joinUs h5 div").html("提交成功");
						$("#joinForm").html(suchtml);
						setTimeout(function(){
							$("#joinUs").hide(500);
						},3000);
					}else{
						alert(data.ret_msg);
					}
				}, function(err){
				    console.log("err:",err);
				});
			}
		}
	}
}
</script>

<style scoped>
.avantage{padding-bottom: 55px;}
.avantage ul{display: inline-block;position: relative;left: 50%;transform: translateX(-50%);text-align: center;}
.avantage ul li{float: left;margin-right: 30px;padding: 30px 66px 40px;border: 1px solid #ebebeb;}
.avantage ul li:nth-child(4){margin-right: 0px;}
.avantage ul p{font-size: 1.8rem;color: #333333;}
.condition .content{width: 75%;margin: 0 auto;}
.condition .content ul{padding: 10px 70px;}
.condition .content p{float: left;font-size: 1.8rem;line-height: 3.4rem;}
.condition .content li p:nth-child(1){width: 25%;color: #333333;}
.condition .content li p:nth-child(2){width: 75%;color: #666666;}
.flow{padding-bottom: 60px;}
.flow ul{display: inline-block;position: relative;left: 50%;transform: translateX(-50%);}
.flow ul>li{float: left;}
.flow li div{float: left;}
.flow li:nth-child(7) div:nth-child(2){display: none;}

.flow li div:nth-child(1) div{border: 2px solid #ececec;border-radius: 50%;padding: 15px;margin: 0 10px 20px;width: 72px;height: 72px;background-size: 72px 72px;background-repeat: no-repeat;background-position: center;}

.flow li div:nth-child(2){height: 106px;width: 38px;background: url(../assets/img/join/flow/icon1.png) no-repeat center center;}
.flow li p{font-size: 1.6rem;color: #000000;text-align: center;}
.tSupport p{font-size: 1.8rem;line-height: 3.4rem;text-align: center;}
.bSupport ul{display: inline-block;position: relative;left: 50%;transform: translateX(-50%);}
.bSupport li{padding: 10px 18px;width: 224px;height: 223px;border: 1px solid #ececec;float: left;margin: 0 15px;}
.bSupport li .logo{width: 224px;height: 94px;background: url(../assets/img/join/support/company1.png) no-repeat center center;}
.bSupport li .name{text-align: center;color: #333333;font-size: 1.5rem;line-height: 3.4rem;}
.bSupport li .desc{font-size: 1.4rem;}
.partner ul{margin-left: 60px;}
.partner li{padding: 50px 0;}
.partner li:nth-child(1){border-bottom: 1px solid #ebebeb;}
.partner li .left,.middle,.right{float: left;}
.partner li .left{width: 190px;}
.partner li .middle{width: 594px;padding-right: 60px;}
.partner li .middle h5{font-weight: normal;font-size: 1.8rem;line-height: 3.5rem;color: #333333;}
.partner li .middle p{font-size: 1.5rem;line-height: 2rem;}
.partner li .right .connect{color: #333333;font-size: 1.8rem;}
.partner li .right p{font-size: 1.5rem;line-height: 2.4rem;}
.partner li .right a{font-size: 1.5rem;line-height: 2.4rem;}
.welfare{padding: 50px;}
.welfare ul{display: inline-block;position: relative;left: 50%;transform: translateX(-50%);}
.welfare li{float: left;}
.welfare li *{float: left;}
.welfare img{margin-right: 10px;}
.welfare p{margin-right: 50px;display: inline-block;height: 55px;line-height: 55px;font-size: 1.4rem;}
#main .topMsg{position: relative;width: 1920px;left: 50%;transform: translateX(-50%);}
.topMsg>div{color: white;text-align: center;position: absolute;top: 15%;left: 50%;transform: translateX(-50%);}
.topMsg h2{font-size: 4rem;font-weight: normal;letter-spacing: 10px;padding-bottom: 40px;}
.topMsg p{font-size: 2rem;letter-spacing: 3px;}
.topMsg .mainpic{width: 100%;height: 460px;}
.topMsg .joinpic{position: absolute;left: 50%;transform: translateX(-50%);top: 75%;width: 205px;height: 56px;background: #F11C3A;text-align: center;line-height: 56px;font-size: 1.8rem;cursor: pointer;}
.topMsg .joinpic:hover{background: #eb3a53;}
#joinUs{position: fixed;top: 0;left: 0;width: 100%;height: 100%;z-index: 99;background: rgba(0,0,0,0.2);}
#joinUs .warp{position: absolute;top: 10%;left: 50%;transform: translateX(-50%);width: 550px;background: white;box-shadow: 3px 3px 3px #ebebeb;}
#joinUs h5{height: 47px;width: 100%;text-align: center;line-height: 47px;color: white;font-size: 1.8rem;position: relative;background: #f11c3a;}
#joinUs #close{position: absolute; right: 20px;top: 50%;transform: translateY(-50%);cursor: pointer;}
#joinForm{padding: 10px 52px 0;}
#joinForm input[type=text],textarea{border: 1px solid #ebebeb;background: #f5f5f5;}
#joinForm input[type=text]{height: 30px;width: 200px;text-indent: 10px;}
#joinForm p{padding: 9px 0;}
#joinForm label{color: #333333;font-size: 1.6rem;width: 80px;margin-right: 10px;}
#joinForm input[type=button]{color: white;background: #f11c3a;padding: 7px 30px;border: none; border-radius: 19px;font-size: 1.8rem;margin: 15px 10px 15px 0;float: right;cursor: pointer;}
#joinForm input[type=button]:hover{opacity: .9;}
.passpic{position: relative;left: 50%;transform: translateX(-50%);margin: 98px 0 20px;}
.passmsg{color: #333333;font-size: 1.6rem;text-align: center;}

</style>