<template>
	<div id="main">
		<div>
			<div class="left">
				<div class="student">
					<h2>学生版</h2>
					<ul class="content">
						<li class="iphone">
							<img src="../assets/img/index/erweima.png"/>
							<div>
								<p class="ver">iPhone v.1.0.1</p>
								<p>发布日期：2017-11-20</p>
							</div>
							<a href="###" class="downLoad">立即下载</a>
						</li>
						<li class="android">
							<img src="../assets/img/download/andrid/student.png"/>
							<div>
								<p class="ver">Android v.1.0.1</p>
								<p>发布日期：2017-11-20</p>
							</div>
							<a href="###" class="downLoad">立即下载</a>
						</li>
						<div class="clear"></div>
					</ul>
				</div>
				<div class="teacher">
					<h2>名师版</h2>
					<ul class="content">
						<li class="iphone">
							<img src="../assets/img/index/erweima.png"/>
							<div>
								<p class="ver">iPhone v.1.0.1</p>
								<p>发布日期：2017-11-20</p>
							</div>
							<a href="###" class="downLoad">立即下载</a>
						</li>
						<li class="android">
							<img src="../assets/img/download/andrid/teacher.png"/>
							<div>
								<p class="ver">Android v.1.0.1</p>
								<p>发布日期：2017-11-20</p>
							</div>
							<a href="###" class="downLoad">立即下载</a>
						</li>
						<div class="clear"></div>
					</ul>
				</div>
				<div class="merchant">
					<h2>商家版</h2>
					<ul class="content">
						<li class="iphone">
							<img src="../assets/img/index/erweima.png"/>
							<div>
								<p class="ver">iPhone v.1.0.1</p>
								<p>发布日期：2017-11-20</p>
							</div>
							<a href="###" class="downLoad">立即下载</a>
						</li>
						<li class="android">
							<img src="../assets/img/download/andrid/merchant.png"/>
							<div>
								<p class="ver">Android v.1.0.1</p>
								<p>发布日期：2017-11-20</p>
							</div>
							<a href="###" class="downLoad">立即下载</a>
						</li>
						<div class="clear"></div>
					</ul>
				</div>
			</div>
			<div class="right">
				<img src="../assets/img/download/1.png"/>
				<img src="../assets/img/download/2.png"/>
				<img src="../assets/img/download/3.png"/>
				<img src="../assets/img/download/4.png" style="width: 427px;"/>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
export default{
	name:"download",
	data(){
		return {
			otop : 0,
			index : 0
		}
	},
	methods:{
		init(){
			var _this = this;
			_this.otop = $(".right img")[_this.index].offsetTop;
		},
		showIt(){
			var _this = this;
			_this.init();
			$(".right img").eq(_this.index).animate({"top":_this.otop+100,"opacity":1},650,function(){
				_this.index++;
				if(_this.index <= $(".right img").length-1){
					_this.showIt();
				}
			});
		}
	},
	mounted(){
		var _this = this;
		$(".student .downLoad").eq(0).prop("href",student_ios);
		$(".teacher .downLoad").eq(0).prop("href",teacher_ios);
		$(".merchant .downLoad").eq(0).prop("href",merchant_ios);
		
		$(".student .downLoad").eq(1).prop("href",apkUrl+student_android);   //安卓apk下载路囧拼接
		$(".teacher .downLoad").eq(1).prop("href",apkUrl+teacher_android);
		$(".merchant .downLoad").eq(1).prop("href",apkUrl+merchant_android);
		
		_this.index = 0;
		
		_this.showIt();
	}
}
</script>

<style scoped>
.line{width: 100%;border-bottom: 1px solid #ebebeb;}
#main{padding-top: 50px;width: 1200px;margin: 0 auto;padding-bottom: 50px;}
.left,.right{float: left;}
#main .left{padding-left: 25px;width: 530px;}
#main .left h2{display: inline-block;padding-right: 56px;font-weight: normal;font-size: 3rem;color: #333333;line-height: 4rem;}
#main .student h2{background: url(../assets/img/download/student.png) no-repeat right center;}
#main .teacher h2{background: url(../assets/img/download/teacher.png) no-repeat right center;}
#main .merchant h2{background: url(../assets/img/download/merchant.png) no-repeat right center;}
#main .student{padding: 50px 0 60px;}
#main .teacher{padding: 0 0 60px;}
ul.content{text-align: center;padding-top: 30px;}
ul.content li{float: left;}
ul.content li p:nth-child(2){font-size: 1.4rem;color: #666666;}
ul.content div{text-align: left;}
.iphone{margin-right: 100px;}
.iphone div{padding-left: 44px;background: url(../assets/img/download/iphone.png) no-repeat left center;}
.android div{padding-left: 44px;background: url(../assets/img/download/android.png) no-repeat left center;}
.ver {font-size: 2rem;color: #333333;font-weight: 550;padding-bottom: 5px;}
.content .downLoad{display: inline-block;border: none;margin-top: 18px;cursor: pointer;width: 210px; height: 43px;text-align: center;line-height: 43px;color: white;background: #4aa9f6;font-size: 1.6rem;letter-spacing: 1px;}
.content .downLoad:hover{background: #7ecfff;}
.content img{border: 1px solid #EEEEEE;margin-bottom: 10px;width: 101px;padding: 5px;}
#main .right{position: relative;left: 30px;top: 100px;}
.right img{position: absolute;opacity: 0;}
.right img:nth-child(1){top: 525px;left: 190px;}
.right img:nth-child(2){top: 320px;left: 130px;}
.right img:nth-child(3){top: 110px;left: 80px;}
.right img:nth-child(4){top: -100px;left: 40px;}
</style>