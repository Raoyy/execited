<template>
	<div class="vhead">
   		<a class="vhleft" @click="turnTo('/index')"></a>
   		<ul class="headul" id="zyhead">
   	  		<li :class="{active:active[0]}"><a href="javascript:;" @click="turnTo('/volIndex/actshow',0)">活动秀</a></li>
         	<li :class="{active:active[1]}"><a href="javascript:;" @click="turnTo('/volIndex/find',1)">找找找</a></li>
   	  	 	<li :class="{active:active[2]}"><a href="javascript:;" @click="turnTo('/volIndex/myAct',2)">我的活动</a></li>
   	  	</ul>
   	  	<a id="goToCenter" class="vhright" @click="turnTo('/index')"></a>
	</div>
</template>

<script>
	export default{
		name:"volhead",
		props:["activeIndex"],
		data(){
			return{
				active:this.$route.query.volHead,
				active:[false,false,false]
			}
		},
		methods:{
			turnTo(page,volHead){
			//	this.$router.push({path:page});
				this.$router.replace({path:page});   //替换当前浏览器历史
			}
		},
		mounted(){
			let _this = this;
			_this.$set(_this.active,_this.activeIndex,true);
	 	}
	}
</script>

<style scoped>
.vhead{height: 44px;line-height: 44px;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display:-webkit-flex;display:flex;text-align: center;background: #e60211;color: #fff;font-size: 1.8rem;position: fixed;top: 0px;left: 0px;width: 100%;z-index: 5;}
.vhleft{width: 30px;-webkit-box-flex: 0.0;-webkit-flex-grow: 0;flex-grow: 0;-webkit-flex-shrink: 0;flex-shrink: 0;overflow: hidden;background: url(../../assets/volunimages/back.png) no-repeat 8px center;background-size: 10px;cursor:pointer;position: relative;left: 5px;z-index: 999;}
.vhead .headul,.vhead .vcenter{-webkit-box-flex: 1;-webkit-flex-grow: 1;flex-grow: 1;-webkit-flex-shrink: 1;flex-shrink: 1; overflow: hidden;}
#myOffset{width: 70px;height: 30px;position: fixed;top: 150px;right: 0px;z-index: 3;background: #fff;border:1px solid red;}
.vhead a{color: #fff}
.vhead .vhleft{width: 30px;-webkit-box-flex: 0.0;-webkit-flex-grow: 0;flex-grow: 0;-webkit-flex-shrink: 0;flex-shrink: 0;overflow: hidden;background: url(../../assets/volunimages/back.png) no-repeat 8px center;background-size: 10px;cursor:pointer;position: relative;left: 5px;z-index: 999;}
.vhead .headul,.vhead .vcenter{-webkit-box-flex: 1;-webkit-flex-grow: 1;flex-grow: 1;-webkit-flex-shrink: 1;flex-shrink: 1;overflow: hidden;}
.voyTwo{justify-content: center;}
.vhead .headul li{display: inline-block;width: 25%;margin: 0px 1%;cursor: pointer;padding-left: 0px;}
.vhead .headul li a{display: block;line-height: 30px;font-size: 1.4rem;}
.vhead .headul li.active a{font-size: 1.6rem;font-weight: bold;}
.vhead .headul li.active a:after{content:"";display: block;width: 100%;height: 2px;border-radius: 1px;background: #fff;}
.vhead .vhright{
	width: 30px;
	height: 30px;
    -webkit-box-flex: 0.0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    overflow: hidden;
    background-image: url(../../assets/volunimages/2.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 23px;
    cursor: pointer;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 1.4rem;
}
</style>