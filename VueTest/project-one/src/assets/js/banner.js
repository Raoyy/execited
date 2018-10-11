//banner
export default{
	data(){
		return {
			oLength : 0,
			oWidth : 0,
			iNow : 0
		}
	},
	setBanner(){
		var _this = this;
		_this.init();
		$('#banner_warp .banner_ul').width(_this.oWidth*_this.oLength);
		$('#banner_warp .btn li').mouseover(function(){
			_this.iNow = $(this).index();
			_this.bannerMove();
		});
		window.btimer = setInterval(function(){
			_this.autoPlay();
		},3000);
		$('#banner_warp').hover(function(){
			clearInterval(window.btimer);
		},function(){
			window.btimer = setInterval(function(){
				_this.autoPlay();
			},3000);
			$('#banner_warp .banner_ul li').css({'position':'static'});
		});
	},
	autoPlay(){
		var _this = this;
		if(_this.iNow == _this.oLength - 1){
			$('#banner_warp .banner_ul li').eq(0).css({'position':'relative','left':_this.oWidth*_this.oLength});
		}
		_this.iNow++;
		_this.bannerMove();
	},
	bannerMove(){
		var _this = this;
		$('#banner_warp .btn li').eq(_this.iNow%_this.oLength).addClass('now').siblings().removeClass();
		$('#banner_warp .banner_ul').stop().animate({'left':-_this.oWidth*_this.iNow},500,function(){
			if(_this.iNow >= _this.oLength){
				$('#banner_warp .banner_ul li').eq(0).css({'position':'static'});
				$('#banner_warp .banner_ul').css({'left':'0px'});
				_this.iNow = 0;
			}
		});
	},
	init(){
		this.iNow = 0;
		this.oLength = $('#banner_warp .btn li').length;
		this.oWidth = $('#banner_warp .banner_ul li').width();
	}
}
