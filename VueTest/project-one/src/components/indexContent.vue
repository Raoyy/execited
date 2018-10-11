<template>
	<div id="main">
		<i id="banner_warp">
			<ul class="btn">
				<li class="now"><a href="###"></a></li>
				<li><a href="###"></a></li>
				<li><a href="###"></a></li>
				<li><a href="###"></a></li>
				<li><a href="###"></a></li>
				<li><a href="###"></a></li>
			</ul>
			<ul class="banner_ul">
				<li><a href="###"><img src="../assets/img/index/banner1.png"/></a></li>
				<li><a href="###"><img src="../assets/img/index/banner2.png"/></a></li>
				<li><a href="###"><img src="../assets/img/index/banner3.png"/></a></li>
				<li><a href="###"><img src="../assets/img/index/banner4.png"/></a></li>
				<li><a href="###"><img src="../assets/img/index/banner5.png"/></a></li>
				<li><a href="###"><img src="../assets/img/index/banner6.png"/></a></li>
			</ul>
		</i>
		<div class="functions">
			<h3 class="title title_7070">"小尼寻师" 有什么功能？</h3>
			<ul class="card">
				<li :style="styleMsg.funtionList[0]">
					<div class="grey">
						<div class="move_warp">
							<h4>搜罗身边的好机构、好老师</h4>
							<ul class="deso" style="color: white;">
								<li>
									<p>1、GPS定位</p>
									<p>一键定位身边名师、省时省力</p>
								</li>
								<li>
									<p>2、名师/机构简历在线看</p>
									<p>基于大数据分析，名师资质权威认证</p>
								</li>
								<li>
									<p>3、赛事、活动同步展示</p>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li :style="styleMsg.funtionList[1]">
					<div class="grey">
						<div class="move_warp">
							<h4>圆老师一份" 事业梦 "</h4>
							<ul class="deso" style="color: white;">
								<li>
									<p>1、千万家高品质机构入驻</p>
								</li>
								<li>
									<p>2、好的发展平台就在指尖</p>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li :style="styleMsg.funtionList[2]">
					<div class="grey">
						<div class="move_warp">
							<h4>助力机构做大做强</h4>
							<ul class="deso" style="color: white;">
								<li>
									<p>1、提高机构知名度</p>
									<p>线上品牌推广+线下落地活动提升机构品牌知名度</p>
								</li>
								<li>
									<p>2、扩充机构生源</p>
									<p>千万家长/学生入驻，机构生源有保障</p>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li :style="styleMsg.funtionList[3]">
					<div class="grey">
						<div class="move_warp">
							<h4>释放行业协会能量</h4>
							<ul class="deso" style="color: white;">
								<li>
									<p style="padding-left: 55px;">1、链接行业资源</p>
								</li>
								<li>
									<p style="padding-left: 55px;">2、方便协会管理</p>
								</li>
								<li>
									<p style="padding-left: 55px;">3、重建行业生态</p>
								</li>
								<li>
									<p style="padding-left: 55px;">4、提升协会权威</p>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<div class="clear"></div>
			</ul>
		</div>
		<img src="../assets/img/index/4.png" style="width: 1920px;position: relative;left: 50%;transform: translateX(-50%);"/>
		<div class="painPoint">
			<h3 class="title title_7070">解决那些市场痛点？</h3>
			<ul class="card">
				<li :style="styleMsg.paneList[0]">
					<div class="grey">
						<div class="move_warp">
							<h4>家长的痛点</h4>
							<ul class="deso" style="color: white;">
								<li>
									<p>好机构难找</p>
								</li>
								<li>
									<p>教学效果无保障<span>></span>试错成本高</p>
								</li>
								<li>
									<p>路程远、杂费多</p>
								</li>
							</ul>
						</div>
						<img src="../assets/img/index/completed.png"/>
					</div>
				</li>
				<li :style="styleMsg.paneList[1]">
					<div class="grey">
						<div class="move_warp">
							<h4>教师的痛点</h4>
							<ul class="deso" style="color: white;">
								<li>
									<p>好机构难找</p>
								</li>
								<li>
									<p>教学效果无保障<span>></span>试错成本高</p>
								</li>
								<li>
									<p>挂靠机构不理想</p>
								</li>
							</ul>
						</div>
						<img src="../assets/img/index/completed.png"/>
					</div>
				</li>
				<li :style="styleMsg.paneList[2]">
					<div class="grey">
						<div class="move_warp">
							<h4>机构的痛点</h4>
							<ul class="deso" style="color: white;">
								<li>
									<p>转换率低</p>
								</li>
								<li>
									<p>体量小、优势弱<span>></span>发展壮大困难</p>
								</li>
								<li>
									<p>推广落后、成本高</p>
								</li>
							</ul>
						</div>
						<img src="../assets/img/index/completed.png"/>
					</div>
				</li>
				<li :style="styleMsg.paneList[3]">
					<div class="grey">
						<div class="move_warp">
							<h4>行业协会的痛点</h4>
							<ul class="deso" style="color: white;">
								<li>
									<p>统筹管理难</p>
								</li>
								<li>
									<p>资源调动难<span>></span>难有较大作为</p>
								</li>
								<li>
									<p>组织权威不高</p>
								</li>
							</ul>
						</div>
						<img src="../assets/img/index/completed.png"/>
					</div>
				</li>
				<div class="clear"></div>
			</ul>
		</div>
		<div style="width: 100%;border-bottom: 1px solid #ebebeb;"></div>
		<div class="spread">
			<ul>
				<li class="online">
					<img src="../assets/img/index/online.png"/>
					<p>线上推广服务</p>
				</li>
				<li class="line">
					<img src="../assets/img/index/line.png"/>
					<p>线下融资、包装、宣传</p>
				</li>
			</ul>
		</div>
		<div style="width: 100%;border-bottom: 1px solid #ebebeb;"></div>
		<div class="video">
			<div style="float: left;margin-left: 33px;">
				<video id="my-video" class="video-js" controls preload="auto" autoplay="autoplay" loop="loop" width="565" height="350"
				  poster="../assets/img/index/fengmian.png" data-setup="{}"> 
					<source id="videoSource" src="energy.mp4" type='video/mp4'>
				    <p class="vjs-no-js">
				    	To view this video please enable JavaScript, and consider upgrading to a web browser that
				    	<a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
				    </p>
				</video>
			</div>
			<div style="float: left;padding-left: 138px;" class="video_right">
				<img src="../assets/img/join/condition.png"/>
				<ul class="commentXN">
					<li>
						<p>"小尼寻师" 这款APP给我找名师带来了很大的帮助，通过周边定位就简单的找到了!</p>
						<p>—— 大辰子</p>
						<div class="clear"></div>
					</li>
					<li>
						<p>"小尼寻师" 的学习圈功能不错，能够让孩子之间保持交流，提高学习乐趣</p>
						<p>—— 李嘉</p>
						<div class="clear"></div>
					</li>
					<li>
						<p style="text-align: left;">在APP中名师资源十分不错，相当优秀！</p>
						<p>—— 王可</p>
						<div class="clear"></div>
					</li>
				</ul>
				<img style="float: right;" src="../assets/img/join/condition.png"/>
				<div class="clear"></div>
			</div>
			<div class="clear"></div>
		</div>
		<div style="width: 100%;border-bottom: 1px solid #ebebeb;margin-top: 20px;"></div>
	</div>
</template>

<script>
import "../assets/css/video-js.css"
import banner from "../assets/js/banner"
import "../assets/js/video"
export default{
	name:"indexContent",
	data(){
		return {
			styleMsg:{
				funtionList:[
					{backgroundImage: 'url('+require('../assets/img/index/fun3.png')+')'},
					{backgroundImage: 'url('+require('../assets/img/index/fun4.png')+')'},
					{backgroundImage: 'url('+require('../assets/img/index/fun1.png')+')'},
					{backgroundImage: 'url('+require('../assets/img/index/fun2.png')+')'}
				],
				paneList:[
					{backgroundImage: 'url('+require('../assets/img/index/pane_par.png')+')'},
					{backgroundImage: 'url('+require('../assets/img/index/pane_teach.png')+')'},
					{backgroundImage: 'url('+require('../assets/img/index/pane_org.png')+')'},
					{backgroundImage: 'url('+require('../assets/img/index/pane_industry.png')+')'}
				]
			}
		}
	},
	methods:{
		
	},
	mounted(){
		banner.setBanner();
		$("#videoSource").attr("src",apkUrl+mp4Url);
		
		this.$alert("ok");
		this.$alert('这是一段内容', '标题名称', {
          	confirmButtonText: '确定',
          	callback: action => {
            	this.$message({
              		type: 'info',
              		message: `action: ${ action }`
            	});
          	}
        });
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          	dangerouslyUseHTMLString: true
        });
		
		this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          	confirmButtonText: '确定',
          	cancelButtonText: '取消',
          	type: 'warning'
        }).then(() => {
          	this.$message({
            	type: 'success',
            	message: '删除成功!'
          	});
        }).catch(() => {
          	this.$message({
            	type: 'info',
           	 	message: '已取消删除'
          	});          
        });
        
		this.$prompt('请输入邮箱', '提示', {
          	confirmButtonText: '确定',
          	cancelButtonText: '取消',
          	inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          	inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          	this.$message({
            	type: 'success',
            	message: '你的邮箱是: ' + value
          	});
        }).catch(() => {
          	this.$message({
            	type: 'info',
            	message: '取消输入'
          	});       
        });        
	}
}
</script>

<style scoped>
	#my-video{width: 565px;height: 350px;}
	#banner_warp{display: block;width: 1920px;height: 500px;position: relative;left: 50%;transform: translateX(-50%);overflow: hidden;}
	.btn{position: absolute;left: 50%;transform: translateX(-50%);bottom: 20px;z-index: 99;}
	.btn .now{background: rgba(256,256,256,1);}
	.btn li{width: 13px;height: 13px;border-radius: 50%;background: rgba(0,0,0,.2);float: left;margin-right: 10px;cursor: pointer;}
	.banner_ul{height: 500px;position: absolute;left: 0px;}
	.banner_ul li{float: left;}
	.banner_ul a{display: inline-block;width: 1920px;height: 500px;}
	.banner_ul img{width: 100%;}
	
	.video{padding-top: 30px;margin: 0 auto;width: 1170px;}
	.functions{padding-bottom: 70px;}
	.functions .card{display: inline-block;position: relative;left: 50%;transform: translateX(-50%);}
	.functions .card>li:nth-child(4){margin-right: 0;}
	.functions .card>li .move_warp{position: absolute;width: 100%;height: 100%;top: 85px;transition: all 1s;}
	.functions .card>li h4{font-size: 1.8rem;color: white;text-align: center;margin-top: 47px;}
	.functions .deso{text-align: center;margin-top: 23px;font-size: 1.4rem;color: #333333;padding-left: 20px;padding-right: 15px;}
	.functions .deso li{padding-bottom: 10px;}
	.functions .deso li p{text-align: left;padding-left: 20px}
	.functions .deso li p:nth-child(1){font-weight: bold;font-size: 1.4rem;line-height: 2rem;}
	.painPoint .card{width: 750px;margin: 0 auto;}
	.painPoint .card>li h4{font-size: 1.8rem;color: white;text-align: center;margin-top: 35px;}
	.painPoint .card>li{overflow: initial;position: relative;top: 50px;opacity: 0;transition: all 1s;float: left;border: 1px solid #ebebeb;width: 312px;height: 260px;margin-right: 120px;margin-bottom: 40px;}
	.painPoint .card>li:nth-child(4){margin-right: 0;}
	.painPoint .card>li:nth-child(2){margin-right: 0;}
	.painPoint .card>li .move_warp{position: absolute;width: 100%;height: 100%;top: 80px;transition: all 1s;}
	.painPoint .deso{padding-top: 18px;}
	.painPoint .deso>li{margin-top: 10px;}
	.painPoint .deso>li>p{color: #fff;font-size: 1.4rem;padding-left: 35px;line-height: 2.3rem;}
	.painPoint .deso span{display: inline;font-family: monospace;padding: 0 25px;font-weight: bold;font-size: 2rem;}
	.card>li ul{opacity: 0;transition: all 1s;}
	.card>li{overflow: hidden;transition: all 1s;float: left;width: 260px;height: 300px;position: relative;top: 50px;opacity: 0;background-size: cover;background-position: center;background-repeat: no-repeat;}
	.card>li .grey{background: rgba(0,0,0,.4);position: relative;width: 100%;height: 100%;transition: all 1s;}
	.card>li:hover .move_warp{top: 0px;}
	.card>li:hover ul{opacity: 1;}
	.card>li:hover .grey{background: rgba(196,0,28,.8);}
	.grey>img{position: absolute;right: -45px;bottom: -45px;width: 100px;opacity: 0;transition: 1s;}
	.card>li:hover .grey>img{opacity: 1;right: -15px;bottom: -15px;}
	
	.spread{padding: 50px 0px;}
	.spread ul{display: inline-block;position: relative;left:50%;transform: translateX(-50%);}
	.spread li{display: inline-block;text-align: center;}
	.spread li:nth-child(1){margin-right: 415px;}
	.spread p{margin-top: 20px;font-size: 1.8rem;color: #333333;}
	.commentXN{width: 404px;padding: 0px 13px;color: #000000;font-size: 1.7rem;line-height: 2.3rem;text-align: center;}
	.commentXN li{padding: 10px 0 10px;}
	.commentXN li p:nth-child(2){color: #999999;font-size: 1.6rem;text-align: right;margin-top: 20px;}
	.video_right img{width: 22px;}
</style>