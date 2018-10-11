<template>
	<div id="main">
		<div id="turnFes" v-if="sprShow">   <!--春运弹窗-->
			<div class="fesWarp">
				<img id="toPage" src="../../assets/images/toFes.png"/>
				<img id="fesClose" @click="sprClose" src="../../assets/images/close.png"/>
			</div>
		</div>
		<vol-head :activeIndex="0"></vol-head>
		<div class="pserchbox">
         	<vhsereach @ievent="searchWord"></vhsereach>
          	<div class="vAwindows" id="vAwindows">
             	<div class="clear">
	             	<div class="vAwleft">
	                 	<ul>
		                    <li @click="vAwindowsLeft($event)" style="margin-left:10px">
		                    	<span>服务类别</span>
		                    	<span class="cicle"></span>
		                    </li>
		                    <li @click="vAwindowsLeft($event)" :class="{active:areaId}">
		                    	<input type="hidden" id="areaMyInput" v-model="areaId" />
		                    	<span id="areaMy">{{areaName}}</span>
		                    	<span class="cicle"></span>
		                    </li>
	                    	<li @click="vAwindowsLeft($event)">
	                    		<span>时间筛选</span>
	                    		<span class="cicle"></span>
	                    	</li>
	                 	</ul>
	             	</div>
	             	<div class="vAwright" v-show="vAwright_show">
		               	<ul id="serviceRange">
		                    <li v-for="oSearch in searchType" @click="vAwindowsRight(oSearch.id,$event)">{{oSearch.name}}</li>
		               	</ul>
		               	<ul></ul>
		                <ul id="time" class="timeUl">
		                    <li><input type="text" readonly name="startDate" id="startDate" v-model="startDate" placeholder="开始日期"></li>
		                    <li><input type="text"  readonly name="endDate" id="endDate" v-model="endDate" placeholder="结束日期"></li>
		                    <div class="clearTime" @click="clearTime">清除时间</div>
		                </ul>
		                <div class="typybutt" @click="SureType">确认</div>
	             	</div>
	            </div>
            </div>
        </div>
	    <div class="pserchbbg" v-show="pserchbbg_show"></div>
	   	<div class="pagebox" style="margin-top: 94px;">
		   	<ul class="headulact clear" style="padding-top: 10px;">
			   	<li id="actshowRank">
					<span class="rankImg"></span>
					<span>排行榜更新啦~</span>
					<a href="//192.168.31.3/voy/web/site_1/welshow/index.html?v=0.0.1"></a>
				</li>
			</ul>
	   		<head-line :page="'actshow'"></head-line>
	    	<div class="page active">
	           	<div id="voyList">
	           		<ul class="voyList clear">
	           			<!--@click.native="changeMsg(actLi)" 绑定自定义组件 -->
	           			<act-li v-for="actLi in liList"  v-if="actLi" :actLi="actLi" :key="actLi.id"></act-li> 
	           		</ul>
	           	</div>
	     	</div>
	 		<div class="upTo" @click="toTop"></div>
	 	</div>
	</div>
</template>

<script>
	import area from "@/assets/js/area.js"
	export default{
		name:"actshow",
		data(){
			return{
				sprShow:true,
				vAwright_show:false,
				pserchbbg_show:false,
				searchType:[
					{id:130,name:"扶贫济困"},
					{id:131,name:"助老助残"},
					{id:132,name:"生态环保"},
					{id:133,name:"平安巡防"},
					{id:134,name:"社区服务"},
					{id:135,name:"防艾禁毒"},
					{id:136,name:"大型活动"},
					{id:137,name:"抢险救灾"},
					{id:138,name:"社会管理"},
					{id:139,name:"综合其他"}
				],
				serviceRange:"",
				startDate:"",
				endDate:"",
				word:"",
				areaId:sessionStorage.getItem("areaId"),
				areaName:sessionStorage.getItem("areaName") || "地区",
				orgId:"",      //机构搜索，暂无
				liList:[],
				org_flag:true,
				orgIndex:1,
				act_flag:true,
				actIndex:1
			}
		},
		methods:{
			changeMsg(obj){
				console.log(obj);
//				obj.title = "2333";
//				this.$set(obj,"title","233232");
//				obj = Object.assign({},obj,{'title':'453232'});    //无效
				console.log(obj);
			},
			sprClose(){
				this.sprShow=false;
				sessionStorage.setItem("entered","true");
			},
			toPage(){     //跳转活动页
				sessionStorage.setItem("entered","true");
				window.location.href = "${site.resourcePath}youth_wx/spr_turn.html?v=${site.version}";
			},
			searchWord(word){
				this.word = word;
				this.searchActivity();
			},
			LoadMoreActivity(){
				let _this = this;
              	let word=_this.word;
              	let orgId=_this.orgId;
              	let areaId=_this.areaId;
              	let serviceRange=_this.serviceRange;
              	let startDate=_this.startDate;
              	let endDate=_this.endDate;
              	if(_this.act_flag){
                  	_this.act_flag=false;
                  	$(".page.active #voyList .voyList").append(_this.tmp.listLoadingTpl);
                  	_this.$http.jsonp(_this.site.http+'voy_cms/vol/activityList.do',{params:{
                  		appToken : sessionStorage.getItem("appToken"),
                      	word : word,//关键字
                      	orgId:orgId,
                      	areaId:areaId,
                      	serviceRange:serviceRange,
                      	startDate:startDate,
                      	endDate:endDate,
                      	status : '6',
                      	pageIndex : _this.actIndex,//第几页
                      	pageSize :6//每页条数
                  	}}).then((msg)=>{
                  		let data = msg.body;
                  		$(".page.active #voyList .voyList").find(".listLoadingTpl").remove(); 
                       	$(".page.active #voyList .voyList").find(".listLoadingEmpty").remove(); 
                       	if(data.ret_code=="200"){
                           	let result=data.data;
                           	if(result.firstPage&&result.list.length==0){
                                $(".page.active #voyList").find(".listLoadingTpl").remove(); 
                                $(".page.active #voyList").find(".voyList").append(_this.tmp.empty);
                           	}else{
                                _this.liList = _this.liList.concat(result.list);
                               	if(!result.lastPage){
                                    _this.act_flag=true;
                                    _this.actIndex++;
                                }else{
                                    $(".page.active #voyList .voyList").append(_this.tmp.listLoadingEmpty);//显示没有数据了
                                }
                           	}
                       	}else{
                            _this.$layer.toast(data.ret_msg)
                       	}
                  	},(err)=>{
                  		console.log(err);
                  	});
              	}
      		},
	      	vAwindowsLeft(ele){
	      		let _this = this;
	      		let index = $(ele.currentTarget).index();
	      		let el = $(".vAwright ul").eq(index);
	      		if(index == 1){
		      		_this.vAwright_show = false;
		        	_this.pserchbbg_show = false;
		        	el.siblings("ul").removeClass("active");
		        	return false;
	      		}
		        _this.vAwright_show = true;
		        _this.pserchbbg_show = true;
		        if(el.hasClass("active")){
		            _this.vAwright_show = false;
		            _this.pserchbbg_show = false;
		           	el.removeClass("active");
		        }else{
		           	el.addClass("active").siblings("ul").removeClass("active");
		        }
	      	},
	      	vAwindowsRight(id,ele){
	      		let _this = this;
	        	let indexli=$(ele.currentTarget).parent().index();
	        	let el =  $(".vAwleft").find("ul li").eq(indexli);
	          	if($(ele.currentTarget).hasClass("active")){
		           	el.removeClass("active");
		            $(ele.currentTarget).removeClass("active");
		            _this.serviceRange = "";
	          	}else{
		            el.addClass("active");
		            $(ele.currentTarget).addClass("active").siblings().removeClass("active");
		        	_this.serviceRange = id;
	          	}
	      	},
	      	SureType(){
	      		let _this = this;
		        _this.vAwright_show = false;
		        _this.pserchbbg_show = false;
		        $(".vAwright ul").eq($(".vAwright ul.active").index()).removeClass("active");
		        _this.searchActivity();
	      	},
	      	clearTime(){
	      		this.startDate = "";
	      		this.endDate = "";
	      	},
	      	searchActivity(){
	      		let _this = this;
	      		$(".voyList").html("");
	        	if(!$(".listLoadingTpl").length){
		           	_this.liList = [];
		         	_this.actIndex=1;
		         	_this.act_flag=true;
		          	_this.act_flag&&_this.LoadMoreActivity();
	        	}
	      	},
	      	toTop(){
	         	$('html, body').animate({scrollTop:0}, 'slow');
	      	}
		},
		mounted(){
//			this.$toast({
//			  message: '提示',
//			  position: 'center',
//			  duration: 5000
//			});
			
			let _this = this;
			let entered = sessionStorage.getItem("entered");   //活动相关
			if(entered == null){
			//	this.sprShow:true;        //活动过期，更改为不展示
				sessionStorage.setItem("entered",true);
			}
			
			_this.LoadMoreActivity();
			
			let startDateCa= new lCalendar();         //初始化搜索开始时间
	        startDateCa.init({
	          	'trigger': '#startDate',
	          	'type': 'date'
	        });
	        let endDateCa = new lCalendar();          //初始化搜索结束时间
	        endDateCa.init({
	          	'trigger': '#endDate',
	          	'type': 'date'
	        });
			
	        let addressLocation = new MobileSelect({  //初始化地区搜索
			    trigger: '#areaMy',
			    title: '地区选择',
			    wheels: area.areaArray,
			    position:[0,1],
			    callback:function(indexArr, data){   //data选中的json数据
			        _this.areaId = data[data.length-1].id;
			        _this.searchActivity();
			    } 
			});
			$(window).on("scroll",function(){
				let myOffset=$("#voyList ul").offset();
              	let documentHeight=myOffset.top+$("#voyList ul").height();
              	if(documentHeight - $(this).scrollTop() - $(this).height()<200){
                	_this.act_flag&&_this.LoadMoreActivity();//找活动
              	}
              	
              	($(this).scrollTop() > 100) ? $(".upTo").fadeIn() : $(".upTo").fadeOut();
			});
		},
		beforeDestroy(){
			$(window).off("scroll"); 
		},
		beforeRouteEnter (to, from, next) {
			alert("进入当前路由");
			next(vm => {
		    	// 通过 `vm` 访问当前组件实例
		    	console.log(vm.sprShow);
		  	});
		    // 在渲染该组件的对应路由被 confirm 前调用
		    // 不！能！获取组件实例 `this`
		    // 因为当守卫执行前，组件实例还没被创建
		},
		beforeRouteUpdate (to, from, next) {
		    // 在当前路由改变，但是该组件被复用时调用
		    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
		    // 可以访问组件实例 `this`
		},
		beforeRouteLeave (to, from, next) {
		//	alert("离开当前路由");
			next();
		    // 导航离开该组件的对应路由时调用
		    // 可以访问组件实例 `this`
		}
	}
</script>

<style scoped>
	/*春运css*/
	#turnFes{position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.3);z-index: 99;display: none;}
	#turnFes .fesWarp{position: absolute;width: 80%;left: 50%;top: 50%;transform: translate(-50%,-50%);}
	#turnFes .fesWarp a{display: inline-block;}
	#fesClose{width: 20px;position: absolute;right: 0px;top: 0px;z-index: 100;cursor: pointer;}
	#toPage{cursor: pointer;width: 100%;}
	
	.vAwindows{width: 100%;height: 100%;z-index: 2;font-size: 1.4rem;padding-bottom: 1px;}
	.vAwindows .clear{background: #fff;height: 60%;text-align: center;}
	.vAwindows .vAwleft{background: #fff;box-shadow: 0 1px 0 #ebebeb;}
	.vAwindows .vAwleft li span{display: inline-block;vertical-align: middle;margin-left: 2px;}
	.cicle{width: 15px;height: 15px;background: url(../../assets/volunimages/up.png) no-repeat center;background-size: 10px;transition: 1s;-moz-transition: 1s;-webkit-transition: 1s;-o-transition: 1s;}

	.vAwright ul{display: none;height: auto;overflow: hidden;height: 168px;overflow-y:scroll;}
	.vAwright ul.active{display:block;}
	.vAwindows .vAwleft li.active{color: #e60211}
	.vAwindows .vAwleft li.active .cicle{transform:rotate(180deg);
	-ms-transform:rotate(180deg);-moz-transform:rotate(180deg);-webkit-transform:rotate(180deg);-o-transform:rotate(180deg);}
	.vAwindows .vAwleft ul{display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-flex-flow: row nowrap;-ms-flex-flow: row nowrap; flex-flow: row nowrap;font-size:1.3rem; justify-content: space-around;  }
	.vAwindows .vAwleft .orgSearch{background: url(../../assets/volunimages/checkLine.png) no-repeat center center / auto 56%;}
	.vAwindows .vAwleft .actSearch{background: url(../../assets/volunimages/checkLine.png) no-repeat 36% center / auto 56% , url(../../assets/volunimages/checkLine.png) no-repeat 66% center / auto 56%;}
	.vAwindows .vAwleft ul li{line-height: 38px;height:38px;}
	.typybutt{width: 90%;line-height: 4rem;margin: 4rem auto 10px;text-align: center;font-size: 1.6rem;background: #e60211;color: #fff!important;
	-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px;border-radius:4px;cursor: pointer;display: block;}
	.vAwindows .vAwright li{border-bottom: 2px solid #fff;float: left;cursor: pointer;width: 33.33%;line-height: 38px;height: 40px;overflow: hidden;}
	.vAwindows .vAwright li.active{border-bottom-color: #e60211}
	.vAwindows li{float: left;cursor: pointer;}
	.timeUl{text-align: center;}
	#time li p{margin: 16px auto 0px;line-height: 16px;font-size: 1.6rem;}
	.timeUl li {width: 50%!important;overflow: initial !important;}
	.timeUl.active li{border: none!important;position: relative;}
	.timeUl.active li:nth-child(1):after{content: "";display: block;width: 15px;height: 1px;position: absolute;right: -8px;top: 35px;background: #ebebeb;}
	.timeUl li input{margin-top: 20px;width: 80%;text-align: center;line-height: 30px;border: 1px solid #ebebeb;border-radius: 4px;}
	.clearTime{cursor: pointer;font-size: 13px;width: 72px!important;height: 27px;line-height: 25px;text-align: center;margin: 88px auto 0px;color: #e60211;border: 1px solid #e60211;border-radius: 4px;}
	
	.pserchbox{position: fixed;top: 44px;left: 0px;width: 100%;height: auto;overflow: hidden;z-index: 2;background: #f9f9f9;}
	.pserchbbg{position: fixed;top: 0px;left: 0px;width: 100%;height: 100%;overflow: hidden;z-index: 1;background: rgba(0,0,0,.3);}
	.pagebox{background: white;}
	.pagebox .page{display: none;}
	.pagebox .page.active{display: block;}
	.headulact{text-align: center;display: -webkit-box;display: -moz-box;display: -ms-flexbox;display: -webkit-flex;display: flex;-webkit-flex-flow: row nowrap;
	  -ms-flex-flow: row nowrap;flex-flow: row nowrap;font-size:1.3rem;margin-bottom: 1px;padding: 0px 16px;background: #fff;}
	.headulact li{-webkit-box-flex: 1;-webkit-flex: 1 1 100%;-ms-flex: 1 1 100%;flex: 1 1 100%;cursor: pointer;position: relative;}
	.headulact li a{display: block;line-height: 33px;color: rgb(153,153,153);}
	.headulact li.active a{color: rgb(230,2,17);font-size: 1.4rem;}
	.headulact li a span{display: inline-block;vertical-align: middle;}
	#actshowRank{cursor: none;}
	#actshowRank .rankImg{display: inline-block;width:86px;height: 60px;background: url(../../assets/volunimages/rankImg.png) no-repeat center / 100% auto;}
	.headulact li{-webkit-box-flex: 1;-webkit-flex: 1 1 100%;-ms-flex: 1 1 100%;flex: 1 1 100%;cursor: pointer;position: relative;color: #333333;}
	#actshowRank a{display: inline-block;width: 49px;height: 24px;margin-left: 24px;vertical-align: middle;background: url(../../assets/volunimages/toRank.png) no-repeat center / 100% auto;}
	#actshowRank span{display: inline-block;vertical-align: middle;}
</style>