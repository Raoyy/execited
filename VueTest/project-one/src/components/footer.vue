<template>
	<div id="footer">
		<ul class="left">
			<li>
				<img src="../assets/img/index/erweima_wx.png"/>
				<p>微信公众号</p>
			</li>
			<li>
				<img src="../assets/img/index/erweima_wb.png"/>
				<p>新浪微博</p>
			</li>
			<div class="clear"></div>
		</ul>
		<div class="right">
			<p class="phone">028-86701038</p>
			<p>周一至周日 9:00-18:00 (仅收市话费)</p>
			<p>地址:中国（四川）自由贸易试验区成都高新区益州大道中段422号4栋4层402号</p>
		</div>
		<div class="clear"></div>
		<p class="copy">备案号：蜀ICP备17043967号  Copyright &copy; 2017-2018  成都米可尼科技有限公司</p>
		<div style="width:300px;margin:0 auto; padding:10px 0 20px;">
	 		<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51010402000486" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="../assets/img/beian.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">川公网安备 51010402000486号</p></a>
	 	</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			title:""
		}
	}
}
</script>

<style>
#footer{
	width: 1200px;
	margin: 0 auto;
	padding-top: 50px;
}
#footer .left{
	float: left;
	margin-left: 151px;
}
#footer .left li{
	float: left;
	margin-right: 30px;
}
#footer .left img{
	border: 1px solid #ebebeb;
}
#footer .left li:nth-child(1) img{
	width: 100px;
}
#footer .left li:nth-child(2) img{
	width: 90px;
	padding: 5px;
}
#footer .left p{
	font-size: 1.4rem;
	color: #333333;
	text-align: center;
}
#footer .right{
	float: right;
	margin-right: 145px;
}
#footer .right p{
	font-family: "SimHei";
	font-size: 1.4rem;
	line-height: 3.2rem;
	text-align: right;
}
#footer .right .phone{
	font-size: 2.4rem;
	color: #222222;
	text-align: right;
}
#footer .copy{
	margin-top: 30px;
	font-family: "SimHei";
	font-size: 1.4rem;
	color: #999999;
	text-align: center;
}
</style>