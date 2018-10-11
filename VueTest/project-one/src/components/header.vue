<template>
	<div id="header">
		<div class="logo">
			<a href="#"><img src="../assets/img/logo.png"/></a>
		</div>
		<div class="word"></div>
		<div class="nav">
			<ul>
				<li v-for="nav in navList" :class="{now:nav.active}">
					<router-link :to="nav.linkUrl"><p v-text="nav.txt"></p><span></span></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				navList:[
					{
						linkUrl:"/",
						active:true,
						txt:"首页"
					},{
						linkUrl:"/join",
						active:false,
						txt:"合作加盟"
					},{
						linkUrl:"/download",
						active:false,
						txt:"APP下载"
					},{
						linkUrl:"/about",
						active:false,
						txt:"关于"
					}
				]
			}
		},
		methods:{
			meet(obj,screenHeight,otop,fn){
				var _this = this;
				if(_this.getTop(obj) <= $(window).scrollTop()+screenHeight-otop) fn();
			},
			getTop(obj){
				return $(obj).offset().top;
			},
			setScoll(){
				var _this = this;
				var screenHeight = $(window).height();
				$(window).scroll(function(){
					var winTop =  $(window).scrollTop();
					_this.meet($(".functions .card li"),screenHeight,50,function(index){
						$(".functions .card li").css({"top":0,"opacity":1});
					});
					_this.meet($(".painPoint .card>li"),screenHeight,0,function(){
						$(".painPoint .card>li").css({"top":0,"opacity":1});
					});
				});
			}
		},
		mounted(){
			var _this = this;
			$(this.navList).each(function(index){
	    		if(_this.navList[index].linkUrl == _this.$route.fullPath){
	    			_this.navList[index].active = true;
	    		}else{
	    			_this.navList[index].active = false;
	    		}
	    		if(_this.$route.fullPath == "/"){
	    			_this.setScoll();
	    		}
			});
		},
		watch:{
		    $route(to, from){
		    	var _this = this;
		    	if(to.fullPath == "/"){
		    		_this.setScoll();
		    	}else{
		    		$(window).unbind("scroll");
		    		clearInterval(window.btimer);
		    	}
		    	$(this.navList).each(function(index){
		    		if(_this.navList[index].linkUrl == to.fullPath){
		    			_this.navList[index].active = true;
		    		}else{
		    			_this.navList[index].active = false;
		    		}
				});
		    }
		}
	}
</script>

<style>
#header{
	width: 1200px;
	height: 80px;
	margin: 0 auto;
}
#header>*{
	float: left;
}
#header .word,.nav{
	margin-top: 21px;
}
#header .nav a,span{
	display: block;
}
#header .nav li{
	display: inline-block;
	margin-right: 60px;
}
#header .nav li:hover span{
	background: #f11c3a;
	height: 4px;
	border-radius: 2px;
}
#header .nav .now span{
	background: #f11c3a;
	height: 4px;
	border-radius: 2px;
}
#header .nav .now p{
	color: #f11c3a;
}
#header .nav p{
	font-size: 2.1rem;
	color: #999;
	line-height: 38px;
}
#header .logo{
	padding: 5px 50px 0 30px;
}
#header .word{
	width: 217px;
	height: 37px;
	background: url(../assets/img/copy.png) no-repeat center center;
	margin-right: 208px;
}
</style>