<template>
	<div id="main">
		<div class="nav_box">
			<div class="item">
				<a href="javascript:;" @click="toYouth">
					<div class="img nav_three"></div>
					<span class='name'>青少年宫</span>
				</a>
			</div>
			<div class="item">
				<a href="javascript:;" @click="toCource">
					<div class="img nav_four"></div>
					<span class='name'>课业辅导</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name : 'youthEdu',
		methods:{
			toYouth(){
				this.$router.push({path:""});
			},
			toCource(){
				$('#only').attr('href','tutoring1/index.html?token='+getCookie('token')+'&userToken='+getCookie('userToken'));
			}
		}
	}
</script>

<style scoped>
	#main{background-image: url(/static/img/bg.png);background-size: cover;background-repeat: no-repeat;background-position: center;height: 100%;}
	.nav_box:after{content: "";display: block;clear: both;}
	.nav_box{position: fixed;width: 3.6rem;text-align: center;left: 50%;top: 46%;margin-top: -0.9rem;margin-left: -1.8rem;}
	.nav_box .item{display: inline-block;width: 1.3rem;height: 1.6rem;text-align: center;padding: 0.1rem 0.2rem;margin: 0 auto;margin: 0 0.1rem;}
	.nav_box .item a{display: block;width: 100%;cursor: pointer;}
	.nav_box .item a .img{margin: 0.1rem 0;height: 65px;}
	.nav_box .item a .img img{width: 60%;}
	.addrPos{position: fixed;bottom: 20px;left: 0px;padding: 10px;display: none;width: 100%;}
	.nav_three{background: url(/static/img/nav_three.png) no-repeat center;background-size: contain;}
	.nav_four{background: url(/static/img/nav_four.png) no-repeat center;background-size: contain;}
</style>