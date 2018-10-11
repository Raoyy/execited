<template>
	<div class="vhsereach">
        <div class="vhserBox">
             <input name="word" class="vhserIn" type="text" placeholder="活动查询" v-model="word">
             <input class="vhserButt" type="button" @click="postWord">
             <input class="clearButt" type="button" @click="clear" v-show="showClear">
        </div>
 	</div>
</template>

<script>
	export default{
		name:"vhsereach",
		data(){
			return{
				word:"",
				showClear:false
			}
		},
		watch:{
			"word"(val){
	          	if(val){
	           		this.showClear = true;
	          	}else{
	           		this.showClear = false;
	          	}
	      	}
		},
		methods:{
			postWord(){
				this.$emit('ievent',this.word);
			},
			clear(){
	        	this.showClear = false;
	          	this.word = "";
	        	this.postWord();
	      	}
		}
	}
</script>

<style scoped>
	.vhsereach{background: #fff;padding: 7px 0px 10px;border-bottom: 10px solid #f9f9f9;}
	.vhsereach .vhserBox{margin: 0px 16px;position: relative;-webkit-border-radius:3px;-moz-border-radius:3px;-ms-border-radius:3px;-o-border-radius:3px;height: 28px;line-height: 28px; padding: 0;overflow: hidden;}
	.vhserBox .vhserIn{width: 75%;background: #f2f3f5;line-height: 26px;border-radius: 4px !important;border: 1px solid #ebebeb;text-indent: 20px;outline: none;font-size: 1.2rem;}
	.vhSelect~.vhserIn{text-indent: 90px;}
	.vhSelect{position: absolute;top: 0px;left: 0px;z-index: 1;width: 7rem;height: 35px;overflow: hidden;line-height: 35px;text-align: center;border-right: 1px solid #eee;}
	.vhSelect.active{overflow: visible;}
	.vhSelect li{height: 35px;background: #fff;cursor: pointer;}
	.vhSelect li:nth-child(1){background: no-repeat 57px center;background-size: 10px;}
	.vhserButt{position: absolute;top: 0px;right: 0px;width: 20%;height: 100%; border-radius: 4px;background: url(../../assets/volunimages/search.png) #e60211 no-repeat center;background-size: 14px;border: none;outline: none;cursor: pointer;}
	.clearButt{position: absolute;top: 2px;right: 25%;width: 30px;height: 85%; background: url(../../assets/volunimages/close.png) no-repeat center;background-size: 15px;border: none;outline: none;border-left: 1px solid rgba(0,0,0,.1);cursor: pointer;}
</style>