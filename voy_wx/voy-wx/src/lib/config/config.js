export default{
	install(Vue, options){
		let onlineSite = {
			http : "http://voy.jxyouth.org.cn/",
			webUrl : "http://voy.jxyouth.org.cn/web/site_1/",
			resourceUrl : "http://voy.jxyouth.org.cn/resource/site_1/"
		}
		let localSite = {
			http : "http://192.168.31.3/",
			webUrl : "http://192.168.31.3/voy/web/site_1/",
			resourceUrl : "http://192.168.31.3/voy/resource/site_1/"   // "http://192.168.31.3/voy/resource/site_1/"
		}
		Vue.prototype.site = onlineSite;              //请求地址
		Vue.prototype.reg = {
			phoneReg : /^1[34578]\d{9}$/
		}
		Vue.prototype.tmp = {
			listLoadingTpl : '<div class="listLoadingTpl">拼命加载中...</div>',
		    listLoadingEmpty : '<div class="listLoadingEmpty">这是我的底线</div>',
		    LoadingMoreTpl : '<div class="LoadingMoreTpl">查看更多</div>',
		    empty : '<div class="empty">暂无数据！</div>'
		}
	}
}
