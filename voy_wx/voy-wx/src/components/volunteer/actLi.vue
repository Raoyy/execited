<template>
	<li>
    	<a href="javascript:;" @click="toActmess(actLi.id)" >
        	<div class="voyLr" :style="{backgroundImage:cover}"></div>
        	<div class="voyLL">
           		<div class="voyLtitile">{{actLi.title}}</div>
          		<div class="voyLLtime" >{{actLi.comments}}评论&nbsp;&nbsp;{{actLi.likes}}点赞<span class="f-fr">{{actLi.showDate | TimeYmd}}</span></div>
        	</div>
    	</a>
  	</li>
</template>

<script>
	export default{
		name:"actLi",
		props:["actLi"],
		data(){
			return{
				cover:this.actLi.cover?"url("+this.site.resourceUrl+this.actLi.cover+")":"",
			}
		},
		methods:{
			toActmess(id){
			//	this.$router.push({name:"actmess",params:{id:id,type:"text"}});     //params传参
			//	this.$router.push({path:"/volIndex/actmess/"+id});     //params传参动态匹配模式，需要配置router
				this.$router.push({path:"/volIndex/actmess/"+id+"/"+"text"});     //params传参动态匹配模式（多个参数）
			//	this.$router.push({path:"/volIndex/actmess",query:{id:id,type:"text"}});           //query传参
			}
		}
	}
</script>

<style scoped>
.voyList li{padding: 10px 0px;margin: 0 16px;background: #fff;position: relative;border-bottom: 1px solid #eee; cursor:pointer;min-height: 52px;}
.voyList li a{height: auto;display: block;overflow: hidden;}
.voyList li .voyLL{padding: 0px 0px 0px 66px;cursor:pointer;}
.voyList li.active:after{content: "当前排名";display: block;position: absolute;top: 50%;transform: translateY(-50%);right: 16px;line-height: 18px;border: 1px solid #E60211;text-align: center;padding: 0 8px;border-radius: 10px;color: #E60211;}
.voyLL .voyLLmess{font-size: 1.4rem;overflow: hidden;height: 17px;line-height: 1.7rem;margin-top: 1px;color: rgb(51,51,51);cursor:pointer;}
.voyList li .voyLr{height: 52px;width: 52px;overflow: hidden;position: absolute;top: 10px;left: 0px;border-radius: 4px;background-repeat: no-repeat;background-size: cover;background-position: center;background-image: url(../../assets/volunimages/vol.png);}
.voyLtitile{margin-bottom: 11px;line-height: 20px;font-size: 1.4rem;overflow: hidden;margin-top: 2px;color: rgb(51,51,51);}
.voyLL .voyLLtime{display: block;font-size: 1.2rem;color: rgb(151,151,151);overflow: hidden;line-height: 17px;}
</style>