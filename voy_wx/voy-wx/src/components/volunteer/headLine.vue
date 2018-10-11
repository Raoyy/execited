<template>
	<div id="headLine">
		<div class="headBanner" :class="bgClass">
			<div class="theLine"></div>
			<div class="headBannerWarp">
				<ul class="headUl">
					<li v-for="li in liList">
						<a v-if="li.link" :href="li.link">{{li.title | subStr17}}</a>
						<a v-else href="javascript:;" @click="toActmess(li.id)">{{li.title | subStr17}}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"headLine",
		data(){
			return{
				bgClass:"",
				liList:[],
			}
		},
		props:['page'],
		methods:{
			LoadBanner(type){
			  	let _this = this;
			  	_this.$http.jsonp(_this.site.http + "voy_cms/vol/headline.do",{params:{
			  		type:type
			  	}}).then((msg)=>{
			  		let data = msg.body;
			  		if(data.ret_code == "200"){
		  				_this.liList = data.data.link.concat(data.data.list);
		  			}
			  	},(err)=>{
			  		console.log("err",err);
			  	});
		  	},
		  	SetBanner(){
		  		let _this = this;
		  		let sprLiHeight = $(".headUl li").height();
				let length = $(".headUl li").length;
				
				$(".headBannerWarp").height(sprLiHeight);
				$(".headUl").append($(".headUl").html());
				let iNow = 1;
				window.fesTop_interval = setInterval(()=>{
					$(".headUl").animate({"top":-(iNow%(length+1))*sprLiHeight},1000,function(){
						iNow++;
						if(iNow%(length+1) == 0){
							$(".headUl").css("top",0);
							iNow = 1;
						}
					});
				},3000);
		  	},
		  	toActmess(id){
				this.$router.push({path:"/volIndex/actmess",query:{id:id}});
			}
		},
		filters:{
			subStr17(str){
				return str.length > 17 ? str.substring(0,17) + "..." : str;
			}
		},
		watch:{
			"liList"(){
				let _this = this;
				window.fesTop_timeout = setTimeout(()=>{
					_this.SetBanner();
				},500);
			}
		},
		created(){
			if(window.fesTop_timeout) clearTimeout(window.fesTop_timeout);
			if(window.fesTop_interval) clearInterval(window.fesTop_interval);
		},
		mounted(){
			let _this = this;
			switch (_this.page){
				case "actshow":
					_this.bgClass = "bannerVol";
					_this.LoadBanner("vol");
					break;
				case "find":
					_this.bgClass = "actHot";
					_this.LoadBanner("activity");
					break;
				case "pos":
					_this.bgClass = "orgHot";
					_this.LoadBanner("org");
					break;
				default: this.$layer.toast(_this.page+"头条类型错误！");
			}
		}
	}
</script>

<style scoped>
	#headTop{position: relative;padding-bottom: 6px;overflow: hidden;}
	.headBanner{position: relative;margin: 0 auto; width: 96%;height: 46px;border: 1px solid #ebebeb;border-radius: 24px;box-shadow: 0 2px 4px #ebebeb;overflow: hidden;background-size: auto 70%;background-repeat: no-repeat;background-position: 23px center;}
	.headBannerAct{background-image: url(../../assets/volunimages/sprAct.png);}
	.headBannerOrg{background-image: url(../../assets/volunimages/sprOrg.png);}
	.actHot{background-image: url(../../assets/volunimages/actHot.png);}
	.orgHot{background-image: url(../../assets/volunimages/orgHot.png);}
	.bannerVol{background-image: url(../../assets/volunimages/bannerVol.png);}
	.headBannerWarp{margin: 15px 0 0 85px;position: relative;overflow: hidden;height: 20px;}
	.headUl{position: absolute;top: 0px;}
	.headUl li{font-size: 1.4rem;color: rgb(51,51,51);}
</style>