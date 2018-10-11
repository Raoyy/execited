<template>
	<div id="volModel">
		<transition :name="transitionName">
			<router-view/>
		</transition>
	</div>
</template>

<script>
	import "../assets/js/lCalendar.min.js"
	import "../assets/js/mobileSelect.js"
	import "../assets/css/mobileSelect.css"
	export default{
		name:"volIndex",
		data(){
			return {
		      	transitionName: 'slide-left'
		    }
		},
		watch:{  
            $route(to, from){
				const toDepth = to.meta.index
			    const fromDepth = from.meta.index
			    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
	}
</script>

<style>
	li{list-style: none;}
	a:link,a:visited,a:hover,a:active{color:#666666; text-decoration:none; outline:none;}
	img{border:none;display: block;width: 100%;height: auto;}
	input{font-family: "微软雅黑";font-size: 1.4rem; -webkit-appearance: none;}
	#main{width: 100%;padding-top: 44px;}
	.selected{color: red !important;}
	.f-fr {float: right;}
	.upTo{cursor: pointer;width: 45px;display: none;height: 45px;position: fixed;bottom: 100px;right: 10px;background:url(../assets/volunimages/top.png) no-repeat center;background-size: cover;z-index: 1;}
	.empty{width: 300px;height: 300px;margin:0px auto;background: url(../assets/volunimages/no_order.png) no-repeat center bottom 50px;background-size: 130px;text-align: center;line-height: 3rem;font-size: 0px;}
	.listLoadingEmpty,.listLoadingTpl,.LoadingMoreTpl{text-align:center;margin-top: 15px;line-height:4rem;border-bottom:0;font-size: 1.4rem;cursor: pointer;color: rgb(153,153,153);position: relative;}
	.listLoadingEmpty:before,.listLoadingEmpty:after{border-bottom: 1px solid #ebebeb;  content: "";  height: 1px;  position: absolute;  top: 50%;  width: 30%;}
	.listLoadingEmpty:before{left: 5%;}
	.listLoadingEmpty:after{right: 5%;}
</style>