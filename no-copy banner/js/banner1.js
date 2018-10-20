//banner1
$(function(){
	var oLength = $('.banner .btn li').length;
	var oWidth = $('.banner .banner_ul li').width();
	$('.banner .banner_ul').width(oWidth*oLength);
	var iNow = 0;
	var timer = null;
	$('.banner').hover(function(){
		$('.banner>a').stop().animate({'opacity':1},300);
	},function(){
		$('.banner>a').stop().animate({'opacity':0},300);
	});
	function move(){
		$('.banner .btn li').eq(iNow%oLength).addClass('now').siblings().removeClass();
		$('.banner .ban_bottom li').eq(iNow%oLength).addClass('show').siblings().removeClass();
		$('.banner .banner_ul').stop().animate({'left':-oWidth*iNow},500,function(){
			if(iNow == oLength){
				$('.banner .banner_ul li').eq(0).css({'position':'static'});
				$('.banner .banner_ul').css({'left':'0px'});
				iNow = 0;
			}
		});
	}
	$('.banner .btn li').click(function(){
		iNow = $(this).index();
		move();
	});
	function autoPlay(){
		if(iNow == oLength - 1){
			$('.banner .banner_ul li').eq(0).css({'position':'relative','left':oWidth*oLength});
		}
		iNow++;
		move();
	}
	timer = setInterval(autoPlay,2000);
	$('.banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(autoPlay,2000);
	});
});